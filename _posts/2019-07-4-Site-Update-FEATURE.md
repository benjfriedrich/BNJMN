---
layout: post
title: 'BNJMN | Performance Update'
date: 2019-07-04 15:45:57
categories: feature
tag: feature
---

I just finished an update to the site that should dramatically improve its download performance. I shrunk the images down a ton, and wrote some javascript that loads images in a more pleasing, controlled way.

When I first conceived this site, I was thinking of it mostly as a text based site. The photo aspect of it was thrown in as an afterthought. As time progressed I found that I really liked posting images more than anything. It has gotten to the point where well over half of my posts are images, so I was time to revise the way the site handles images. Load times were awful, because I was just dumping these big image files to the browser, and it would try to download them all at once.

I took a two-pronged approach to solving the issue: 1) reformat the images to reduce image size, & 2) make it so the images didn’t try to load all at one at time.

### Just Make them Smaller

The way I upload photos to the site is using an iOS shortcut that I wrote, so it was pretty simple to go into there and revise the resizing function so it scales all the way down to 1000px wide (previously it was set to 2500px, which is kinda insane). And because of the nature of being a static site, it was really simple to go into my photos and use an app called PhotoBulk to tear through and resize them all. That process alone made the site 150% smaller, which frankly solved 80% of the problem.

### Cicada Function

The way that I made the site serve images smarter relies on Javascript. I rewrote the HTML source code so that the HTML doesn’t actually download the file, but still has the link embedded as data in the img tags. Then I wrote a function that finds all the images and downloads them one at a time. 

The cool thing about the function is that it’s what I’m calling a Cicada Function (I’m sure there is a real term for this that hardcore programing people know. Not me though.) The way it works is it takes the data in the img tag and reassigns it to be  the image source, which causes the image to start to load. At this point the function is almost done, but right before it ends, it adds an event listener to the img that tells it to run this same function on the next image once this image is done loading.  It’s like a loop, but the function is actually not running most of the time. Sort of like the way Cicadas sleep for years underground, and just emerge for a few days to lay eggs and die, restarting the cycle.

Honestly, I don’t know what the precise best practice for this particular goal would have been, but I think that this does the trick and it’s conceptually fun.

### Much Better

This site has always been very performant by most metrics, so it’s evaluation by the web bots hasn’t changed that much, but the total page load times are like 3x quicker at least and experientially it’s even better, because you don’t have to wait nearly as long for the first images to load. So far it seems like the lower res images still have enough quality for the site, even if it’s not as fun to view them blown up to full size.

Enjoy!