---
layout: post
date: 2023-01-09T21:28:29-0500
title: A Shell Script to Create New Posts for Markdown Blogs
description: 
category: Blog
date-modified: 2023-01-10T09:57:08
comments: true
tags: [markdown, jekyll, script, shell]
feature-image: /assets/images/markdown.png
feature-image-width: 100%
feature-image-height: auto
thumbnail-image: /assets/images/markdown.png
thumbnail-image-width: 150px
thumbnail-image-height: auto
---
So in the past three months, I've been working on converting my my blog from [Wordpress](https://www.wordpress.com) to [Jekyll](https://www.jekyll.com). Wordpress has so many requirements that I found myself spending all of my spare time managing plugins, interfaces, tables & themes **and not** writing.

In Jekyll, blog posts are managed via Markdown files in a specific directory. Each post has its own file. [Front matter](https://jekyllrb.com/docs/front-matter/) included in each file contains metadata about the post, such as the title, publishing date, category, and desired layout. Jekyll looks through those files and then generates the site resulting in a set of static HTML & CSS pages that can be pushed to a web server  This flat, simple structure also makes backups simpler.

There’s no user interface, which I initially thought would be difficult to accept, but in fact it makes it easier by being able to use the editor of of my choice such as [Vi](https://en.wikipedia.org/wiki/Vi) or [Notepad++](https://notepad-plus-plus.org/).  You have to manually create a file, ideally name the file using a slugified version of the post’s title, and then add the preamble with title and the published date in ISO format and anything else your specific setup needs to render the post;  A lot to remember and even more to forget.

Being the geek & perfectionist that I am, manual work is highly frustrsting because the output is often different. So I created a simple shell script that uses the [read](https://phoenixnap.com/kb/bash-read) function, then asks for the post’s title & the destination domain, creates the file using the slugified version of the title for the file name, then opens the file in Vi:

```shell

#!/bin/sh
read -p "Title: " title
SLUG="$(echo $title | sed -r 's/[\.\, \?]+/-/g' | tr '[:upper:]' '[:lower:]')"
DATE=$(date +"%Y-%m-%d")
DATE_TIME=$(date +"%Y-%m-%dT%H:%M:%S%z")

read -p "Domain: " domain
tee -a /home/andre/jekyll-sites/$domain/_drafts/${DATE}-${SLUG}.md <<EOF
---
layout: post
date: ${DATE_TIME}
title: ${title}
description: 
category: 
date-modified:
comments: true
tags: [Tag01, Multi-Word Tag02]
feature-image: /assets/images/planning.jpg
feature-image-width: 100%
feature-image-height: auto
thumbnail-image: /assets/images/markdown.png
thumbnail-image-width: 150px
thumbnail-image-height: auto
---
EOF
vim /home/andre/jekyll-sites/$domain/_drafts/${DATE}-${SLUG}.md

```
This script creates new posts in the `_drafts` folder.  This is simple enough to enable, but not obvious.