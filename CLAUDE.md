# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal blog/website for Balaji Sivaraman built with [Hugo](https://gohugo.io/), a static site generator. The site is deployed to `balajisivaraman.com`.

## Commands

```bash
# Local development
make serve_blog    # Serve the blog section with live reload
make serve_home    # Serve the home section with live reload

# Build
make build         # Build both home and blog sections to public/

# Clean
make clean         # Remove public/www and public/blog directories

# Deploy (requires SSH access)
make deploy        # clean + build + rsync to production server
```

## Site Structure

The site is split into two content sections, each built and served independently:

- `content/home/` — Homepage content
- `content/blog/` — Blog posts (type: `post`)

Hugo outputs each to a separate subdirectory under `public/`:
- `public/home/`
- `public/blog/`

## Content

### Blog Posts

Posts live under `content/blog/post/` as either:
- Single `.md` files (e.g., `my-post.md`)
- Page bundles — a directory with `index.md` and an `images/` subfolder for posts with images

Post front matter uses TOML (`+++ ... +++`) with these common fields:
```toml
title = "Post Title"
author = ["Balaji Sivaraman"]
date = "YYYY-MM-DD"
type = "post"
draft = true
categories = ["Category"]
tags = ["Tag"]
toc = false
share = true
```

### Creating New Content

Use Hugo archetypes to scaffold new posts:
```bash
hugo new blog/post/my-post-slug.md
```

The `archetypes/weeknotes.md` archetype provides a structured template for weekly notes posts.

## Layouts

Custom layouts (no external theme is used):

- `layouts/post/single.html` — Individual blog post template
- `layouts/homepage/index.html` — Homepage template
- `layouts/partials/` — Shared partials: `head.html`, `header.html`, `footer.html`, `right-sidebar.html`
- `layouts/shortcodes/img.html` — Custom shortcode for images

## Styling

SCSS source is in `assets/scss/main.scss`. Hugo pipes compile it. Key design tokens:
- Fonts: Roboto Slab (body), Oswald (headings), Work Sans (subtext)
- Bootstrap CSS is included in `static/css/`

## Configuration

`config.toml` at the root is the single Hugo config file. Syntax highlighting uses Chroma (pygments-style config). Post permalinks are set to `/:slug`.
