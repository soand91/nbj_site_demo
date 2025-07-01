const EleventyFetch = require("@11ty/eleventy-fetch");
const RSSParser = require('rss-parser');

module.exports = async function() {
  // Try Substack API first
  try {
    const apiUrl = "https://natesnewsletter.substack.com/api/v1/archive?limit=4&sort=top";
    const response = await EleventyFetch(apiUrl, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          "Accept": "application/json",
          "User-Agent": "Eleventy-Substack-Integration/1.0"
        }
      }
    });

    return response.map(post => ({
      date: new Date(post.post_date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }),
      title: post.title,
      url: post.canonical_url,
      excerpt: cleanExcerpt(post.subtitle || post.body),
      readTime: calculateReadTime(post.body),
      likes: post.num_likes || 0
    }));

  } catch (apiError) {
    console.log("API failed, trying RSS...");
    
    // Fall back to RSS
    try {
      const parser = new RSSParser();
      const feed = await parser.parseURL('https://natesnewsletter.substack.com/feed');
      
      return feed.items.slice(0, 4).map(item => ({
        date: new Date(item.isoDate).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        }),
        title: item.title,
        url: item.link,
        excerpt: cleanExcerpt(item.contentSnippet || item.content),
        readTime: calculateReadTime(item.content),
        likes: 0
      }));
    } catch (rssError) {
      console.error("Both methods failed, using fallback");
      return getFallbackData();
    }
  }
};

function cleanExcerpt(text) {
  return text
    .replace(/<[^>]*>?/gm, "")
    .substring(0, 150)
    .trim() + "...";
}

function calculateReadTime(text) {
  const words = text.split(/\s+/).length;
  return `${Math.ceil(words / 200)} min read`;
}

function getFallbackData() {
  return [
    {
      date: "June 10, 2024",
      title: "The Future of AI",
      url: "#",
      excerpt: "Exploring how artificial intelligence will transform industries...",
      readTime: "5 min read",
      likes: 42
    },
    {
      date: "May 28, 2024",
      title: "Remote Work Strategies",
      url: "#",
      excerpt: "Best practices for managing distributed teams effectively...",
      readTime: "4 min read",
      likes: 35
    }
  ];
}