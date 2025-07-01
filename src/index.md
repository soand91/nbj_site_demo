---
layout: base.njk
title: Home
description: Writer, consultant, and thought leader sharing insights on business, technology, and personal growth.
---

<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>AI & Product</h1>
            <p>I'm building a compass for the age of AI</p>
            <div class="hero-cta">
                <a href="https://natesnewsletter.substack.com/" class="btn btn-primary" target="_blank">Subscribe to Substack</a>
                <a href="/services/" class="btn btn-secondary">Work With Me</a>
            </div>
        </div>
    </div>
</section>

<section id="writings" class="section">
    <div class="container">
        <div class="section-header">
            <h2>Featured Writing</h2>
            <p>My most popular insights on the cutting edge of AI, including breaking news, strategy, product breakdowns, and thought pieces.</p>
        </div>
        <div class="featured-posts">
            {% for post in substack %}
            <article class="post-card">
                <div class="post-meta">
                    <span>{{ post.date }}</span>
                    {% if post.likes > 0 %}
                    <span class="likes">♥ {{ post.likes }} likes</span>
                    {% endif %}
                </div>
                <h3><a href="{{ post.url }}" target="_blank" rel="noopener">{{ post.title }}</a></h3>
                <p class="post-excerpt">{{ post.excerpt }}</p>
                <a href="{{ post.url }}" class="read-more" target="_blank" rel="noopener">Read More →</a>
            </article>
            {% else %}
            <p class="no-posts">No articles found. Please check back later.</p>
            {% endfor %}
        </div>
        <div class="view-all">
            <a href="https://natesnewsletter.substack.com/" class="btn btn-secondary" target="_blank" rel="noopener">View All on Substack</a>
        </div>
    </div>
</section>

<section id="services" class="section" style="background: var(--bg-secondary);">
    <div class="container">
        <div class="section-header">
            <h2>How I Can Help</h2>
            <p>AI Guides, Prompts, and Community-building projects</p>
        </div>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">📊</div>
                <h3>My Guide to AI & Careers</h3>
                <p>30 minute video guide to AI and Careers, with the goal of helping you understand macro AI trends and start to think strategically about how AI may affect your career</p>
                <a href="https://natebjones.com/#guide" class="btn btn-primary">Learn More</a>
            </div>
            <div class="service-card">
                <div class="service-icon">🎯</div>
                <h3>Get My AI Prompts</h3>
                <p>More than 50 pages of prompts that run the gamut from product to engineering to professional development to social posts for marketers.</p>
                <a href="https://natebjones.com/#ai-prompts" class="btn btn-primary">Learn More</a>
            </div>
            <div class="service-card">
                <div class="service-icon">🚀</div>
                <h3>AI Robot Club</h3>
                <p>I created AI Robot Club so we can learn to build with AI, together. This is the place to go if you're curious about building with AI, need some help, and want some regular support in a group context as you sharpen your skills.</p>
                <a href="https://natebjones.com/#club" class="btn btn-primary">Learn More</a>
            </div>
        </div>
    </div>
</section>

<section id="about" class="section" style="background: var(--bg-secondary);">
    <div class="container">
        <div class="section-header">
            <h2>About</h2>
            <p>I've lived in 30 centuries at once. That's the title of an old Indonesian ad campaign, and it accurately summarizes my 20 years living in Southeast Asia—everywhere from a hut with no electricity to the towers of a megacity.</p>
            <p>Coups and failing airplane engines have given me an unflappable calm. So has founding, which is its own special class of insanity.</p>
            <p>I'm still in tech because I think AI is the most interesting technology most of us are going to see in our lifetimes. It's up to us to make it useful, and that's what excites me.</p>
            <p>Yes, I do many things at once here. If you wonder how I do it, the answer is the usual one: ruthless time management and efficiency. Time is the one thing I can't get back and I treat it that way.</p>
            <p>When I'm not working, you'll find me on hikes in the PNW, on a plane somewhere new, building Legos, reading books, or taking my kids on unforgettable adventures. We're going to see Taylor Swift next!</p>
        </div>
    </div>
</section>

<section class="newsletter-cta">
    <div class="container">
        <h2>Join 32,000+ Strategic Thinkers</h2>
        <p>Get my weekly newsletter with actionable insights on AI strategy, breaking news, and careers in the age of AI.</p>
        <a href="https://substack.com/@natesnewsletter" class="btn" target="_blank">Subscribe Now</a>
    </div>
</section>