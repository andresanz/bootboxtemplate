---
layout: post
date: 2023-03-21T21:28:29-0500
title: About this site
description: 
category: Blog
date-modified: 2023-03-28T16:48:08
comments: false
tags: [about]
feature-image:
feature-image-width: 100%
feature-image-height: auto
thumbnail-image: /assets/images/rusty.jpg
thumbnail-image-width: 150px
thumbnail-image-height: auto
---

<div class="container">
	<div class="row">
	
		<main class="container">
			
			<script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async></script>
			
			<div class="row" data-masonry='{"percentPosition": true }'>
				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Site Dates</h5>
							<h6 class="card-subtitle mb-2 text-muted">Key dates for this site</h6>
							<p class="card-text">
								
								Date Created: {{ page.date | date: "%Y-%m-%d,%l:%M%P" }}<br />
								Last updated: {{ page.date-modified | date: "%Y-%m-%d,%l:%M%P" }}
								
							</p>
							
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Site Generation</h5>
							<h6 class="card-subtitle mb-2 text-muted">How this site is created</h6>
							<p class="card-text">
								
								Built using <a class="noline" href="https://jekyllrb.com/">Jekyll</a> v4.3, the <a class="noline" href="https://github.com/jekyll/jekyll-feed">jekyll-feed</a> & <a class="noline" href="https://github.com/jekyll/jekyll-seo-tag">jekyll-seo-tag</a>.
							</p>
							
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Hosting</h5>
							<h6 class="card-subtitle mb-2 text-muted">How this site is hosted</h6>
							<p class="card-text">
								Using a decicated <a class="noline" href="https://www.linode.com/pricing/">Linode</a> 4GB virtual machine (Use my <a class="noline" href="https://www.linode.com/lp/refer/?r=fabe331b4ec11910c78d6b837da6732505fb6c92">refferal code</a> if interested).
							</p>
							
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Content</h5>
							<h6 class="card-subtitle mb-2 text-muted">How this site's content is managed</h6>
							<p class="card-text">
								So i'm trying to become proficient in <a href="https://github.com">Github</a>, so I'm storing this site in a private repository, and taking a key version of it and posting it in a <a href="https://github.com/andresanz/bootboxtemplate">public repository</a>. <br /><br />Have a look at the <a href="https://github.com/andresanz/bootboxtemplate#readme">Readme.md</a> file.<br /><br /><a class="github-button" href="https://github.com/andresanz/bootboxtemplate" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star andresanz/bootboxtemplate on GitHub">Star</a>								
								<!-- Place this tag in your head or just before your close body tag. -->
								<script async defer src="https://buttons.github.io/buttons.js"></script>
							</p>
							
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Iconography</h5>
							<h6 class="card-subtitle mb-2 text-muted">How this site's fonts & images are managed</h6>
							<p class="card-text">I'm using locally-hosted versions of <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap</a> 5.1, Google's <a href="https://fonts.google.com/specimen/Krub">Krub</a> font & <a href="https://fontawesome.com/search?m=free&o=r">FontAwesome</a> 6.2.</p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-lg-4 mb-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Multi-blog</h5>
							<h6 class="card-subtitle mb-2 text-muted">How this site's content is seperated</h6>
							<p class="card-text">I was looking for a way to host multiple, seperate blogs in he same Jekyll install, and I've psudo-accomplished this with a simple <a href="https://shopify.dev/docs/api/liquid/filters">Liquid</a> filter:</p>
							<p class="card-text" style="font-style: italic;">
								{% raw %}{% if post.categories contains 'Blog' %}{% endraw %}
							</p>
							<p class="card-text">
								By filtering out everything thats in the "Blog" category, we can hide everything else, and show other categories ("blogs") elswhere.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>