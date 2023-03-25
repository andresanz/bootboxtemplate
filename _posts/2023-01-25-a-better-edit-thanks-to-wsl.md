---
layout: post
date: 2023-01-25T19:57:22-0500
title: A Better Edit Thanks to WSL
description: A safer way to edut files while running Ubuntu on WSL
category: Blog
date-modified:
comments: true
tags: [ubuntu, script, shell, notepad++, wsl]
feature-image: 
feature-image-width: 25%
feature-image-height: auto
thumbnail-image: /assets/images/pencil.png
thumbnail-image-width: 150px
thumbnail-image-height: auto
---
<img src="/assets/images/pencil.png" class="img-thumbnail float-start" style="margin-right: 8px; margin-top: 4px;" width="35%">
## Overview ##

One of the biggest problems I have in wanting to constantly learn new things, is that these learnings sometimes come at the cost of breaking/ruining thins that you've previously done that actually work.  You learn a new or better way of doing something, like tuning your [Apache](http://apache.org) config file, tweaking a php.in filr or overwriging and index.html file, only to overwrite the existing file, and now - poof! - the original file (that worked) has been overwritten and all that hard work goes down the drain.

Now add-on the fact that editing inside [Ubuntu](http://ubuntu.com) using [Vi](https://en.wikipedia.org/wiki/Vi) is not as easy as [Notepad++](https://notepad-plus-plus.org/).  Copy, cut & paste are far less intuitive, so your less likely to do it well.

But now running Ubuntu inside of [WSL](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) on my laptop gives me options that I didnt have before by making the [windows file system available to me as mounted volumes](https://www.howtogeek.com/426749/how-to-access-your-linux-wsl-files-in-windows-10/).  With that new feature in mind, I set out on making my "editing" better.

## Requirements ##

When I thought about it, my requirements were really simple:

- I'd like to take a snapshot or a backup of the file I was going to edit,
- I wanted it to be transparent to me, and 
- I'd like to edit using a tool that was easier to use than VI.

## Copy the File ##

Before becoming aware of local file system availability, I wrote a simple script called **Copy** that made a backup of the file I was planning to edit:

``` bash
#!/bin/bash
echo
echo Copying "$1" to "$1"-`date +"%Y%m%d-%H%M%S"`.txt.html 
cp "./$1" ./"$1"-`date +"%Y%m%d-%H%M%S"`.txt.html
echo
```

All it did was simply copy the filename I supplied on the command line, to a [hidden file name](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory), and dropped in a date and time stamp, using and reformatting the [date](https://www.cyberciti.biz/faq/unix-date-command-howto-see-set-date-time/) command.

This worked, __**but**__ I needed to remember to run **Copy** before I edited the file with Vi.

## Better Edit ##

Then, later on, I created an [Alias](https://www.cyberciti.biz/tips/bash-aliases-mac-centos-linux-unix.html) to easily run Notepad++":

``` bash
alias npp=/mnt/c/'Google Drive'/Utilities/Notepad++/Notepad++.exe
```

Now all I needed to do was first fune my **Copy** script, then use the **npp** alias to edit the file in Notepad++.

## Put it all Together ##

Finally, I put it alll together into a script called **Edit** which hits all my requirements; backup files **before** I edit them, Transparent to me, and a better editor.

The biggest change I made was the creation of ```.backups``` folders to house the backups created in each folder, keeping them out of the way (transparent) while still keeping things in order.

Her's the final version of the file.

``` sh
#!/bin/bash
NOW=$(date +"%Y.%m.%d,%H.%M.%S")

FILE="$1"

if [ -z "$FILE" ]
then
echo "ERROR: Need a file on the command line"
else

mkdir ./.backup > /dev/null 2>&1
cp "./$1" .backup/`date +"%Y%m%d-%H%M%S"`.$1 > /dev/null 2>&1
echo Editing $1 in Notepad++
/mnt/c/'Google Drive'/Utilities/Notepad++/Notepad++.exe $1

fi
```

Please let me know if you have suggestions on how to do this better, smarter or simpler.


