---
layout: post
title: BNJMN | The Site
categories: feature
tag: feature
---

There are two reasons this website exists. The most sensible one is that I miss having a website for just posting whatever. I miss blogs and I think it’ll be cool to have one site I can use as a hub to point to my other projects.

The other reason is that I wanted to try out a new (to me) web development stack I think is interesting. When I build a site from scratch I’ve mostly used Wordpress as the content management system (CMS). Wordpress is fine but has drawbacks. It can be unwieldy and overbuilt for a lot of uses, setting up a Wordpress site so it runs fast can be finicky, and the whole software and plugin overhead around Wordpress can bloat up really quickly.

Instead, I wanted to set up this site as a static generated site, which I think turned out great. I ended up with this lightweight, fast site that I’m able to host totally free, and I can make work in the way that suits me.

The rest of this post is about the technical side of the site, so if you’re interested, read on!

### Static Sites

Here is the way traditional websites built with CMS’s work: when someone wants to view a webpage they make a request to your web server for a page, and web server gathers all the data it needs, assembles the page, and sends that info back to you. That’s a lot of work, especially if lots of people are visiting a site. There are ways to make this more efficient (namely caching, which helps a ton if it’s set up correctly), but that’s the principle. These traditional monolithic dynamic sites are assembled on the fly, which means if something goes wrong, your site gets slow or goes down.

The development stack I’m using for this site is built around something called a static site generator. What a static site generator does is it creates the entire website all at once, only regenerating the pages when you actually update the website. So instead of assembling the webpage from scratch every time a web browser visits a page, all the pages have already been created, so it just has to send out that pre-made file to the user, which is easy.

What this means, practically, is that you can create a website that is highly efficient and won’t get overloaded, and is also much more secure than a website built with a traditional CMS like Wordpress. Once the site has been generated, not much can go wrong.

The other interesting attribute of a static generated site is that the content of the site is stored as text files in folders. There’s no invisible database. It’s just like files in your finder. This can be a good thing or a bad thing depending on your needs. For my uses, I think it’s great. It gives me a lot more flexibility.

### Deployment: GitHub

My deployment system is built around GitHub. Since the content for a static site is just files in folders, you’re able to manage and deploy the entire site via git (which is a commonly used version control system that makes it so you can restore old versions of your code if you break something). This is cool because it fully backs up and versions your site and your content, and you can sync it between multiple locations. GitHub is the de facto web-based git repository host of choice for most developers, and I have a free account already, so I decided early on that I’d use GitHub as a middleman in my deploy process.

Here’s how I decided I wanted the site deployment process to work: I make edits or write posts > I push the updates to Github when I’m finished > Github tells my web server that there are updates > the server pulls the update from Github > the server, running the site generator builds the site.

### Static Site Generator: Jekyll

A static site generator is the tool that takes your content and your templates and converts them into actual web pages. You can run the generator on your local computer, output the site there and then send it to your server, or you can have the server running the generator by itself. I decided early on I didn’t want to generate the site on my personal computer, because I wanted to be able to update the site from my phone, so the generator needed to be hosted on the server.

In hindsight, I wish I had researched the different static site generators more before I started on the project because there are lots of great static site generators. I went with one called Jekyll basically just because I’d heard of it. It was one of the first ones in the category and is still the most popular. Jekyll is good, but after I was mostly done with the project I checked out the other options and I think I should have given Hugo a closer look. It’s supposed to be a lot quicker at generating sites than Jekyll. This doesn’t affect the speed the user gets the site—just how fast new changes get uploaded.

That being said, I enjoyed working with Jekyll and found it to be pretty simple. I had to install a plugin to support pagination, but that wasn’t bad at all. If I feel like build times are ever getting out of hand, maybe I’ll convert it to Hugo.


### Web Host: Netlify

There were two options I considered and tested. I could use the virtual private server I already use to host my other sites, or I could try out a service specifically designed to host static sites.

The virtual private server I already have running is a Digital Ocean Droplet that just costs $5 a month. I really like it. I have it running on NGINX, and it’s easy to add new sites too. Getting the site up and running on the server is something I felt comfortable with (you just have to SSH into the server > install Jekyll > download your site from GitHub > generate the site pages > set up the NGINX config files so it knows when to serve the site)—the problem for me is that I don’t know as much about triggering the site to download new updates and generate the site. I didn’t want to have to manually SSH in, pull down the new data, and build the site each time.

The way that you could get the server to download the files and build them automatically is using a thing called webhooks. You can configure GitHub to send out a webhook notification to your server whenever the GitHub hosted data is updated and have that notification trigger a script on the server that will make the server download the updated files and run the build process. It probably wouldn’t be too hard to figure this out, but I’d need to install some new software, and I didn’t feel like messing too much with that server since I’ve got all my other stuff running on there.

The other option I looked at (the one I went with) was using a service called Netlify that is specifically designed to work with static generated sites. For my purposes, it seems like it is just plain a better option than hosting it on my virtual server. They have a free tier designed exactly for sites like this (which is cool), they have a full-scale content distribution network, they can automatically sync up with your GitHub, and they can set up your domain name stuff for you (which isn’t hard, but it’s slick). 

For me, there were a bunch of advantages over using my own server. One of the biggest is I didn’t need to figure out webhooks, but there are performance boosts too. My server is in New York, so in the US it is quick, but if you’re in Australia it’d be a bit slower. Netlify has servers all over, so this isn’t an issue at all. Basically, it’s better in every single way for my use, with the exception that I had to set my main domain as www.bnjmn.us instead of just plain bnjmn.us. Not a huge deal, but I prefer the latter. Oh well.

One option that I didn’t really consider was hosting it using GitHub Pages, but this would have also been an option. It’s less flexible than Netlify (you can’t have any plugin dependencies it looked like), but it’s also free and seems like it’s probably reliable. Lots of people think it’s great.  

### Updating Content

Because of the way I have the site set up, there are a bunch of ways for me to update content. I can do it locally on my Mac using Ulysses (or any text editor) and push it to Github. I can log into Github and update it directly. Another cool option is this web app called Forestry.io that you can point at your Github repo and manage the files inside using a nice interface that you can access from anywhere.

The trickiest part of adding posts is making sure that the headers (technically they are called **front matter**) and filenames of the text files use the proper conventions. On the mac, it’s easy enough because I have templates, but one cool feature using Forestry.io is that it has tools you can preset those headers in whatever way you need to. It also lets you specify where you want to serve photos from, and lets you upload them directly.

The one thing I haven’t implemented yet, but intend to, is the ability to publish Asides via this great little iOS app called Drafts that makes it easy to do random stuff like this with text. Basically, the plan is to use drafts to format the text and have it send the formatted text to an app like Working Draft (at least that’s the first one I’ll try) to add the file to the GitHub repo.

### Conclusion

For something that is technically a simpler process than a Wordpress site, it is complicated in its own way, because it doesn’t hide the process from you like Wordpress does. The cool thing is that it’s modular. I can get the features I want and the resulting site is super light-weight and I can easily swap out tools at any point. It’s organized in a way that makes sense to me and it’s fully backed up via GitHub.

I can see a setup like this being interesting solutions for lots of low-maintenance, small business and organizations. It has extremely low upkeep cost, it doesn’t require software updates, and it is remarkably straightforward to make edits, especially if you set someone up with one of the faux CMS’s, like forestry.io.

For now, I’m just going to use it and see how it goes.