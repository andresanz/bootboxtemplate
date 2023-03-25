---
layout: post
date: 2023-01-14T11:10:39-0500
title: Running Cron on WSL
description: How to get cron to run consistantly & automatically on WSL2 on Windows 10 
category: Blog
date-modified: 2023-01-16T13:36:45
comments: true
tags: [cron, wsl, windows 10]
feature-image: /assets/images/brokenclock.png
feature-image-width: 200px
feature-image-height: auto
thumbnail-image: /assets/images/brokenclock.png
thumbnail-image-width: 150px
thumbnail-image-height: auto
---
## Overview

So as I begin to teach myself new things such as **WSL**, the first thing that I always try to do is ensure my work is protected & secured, so as I mess things up (*and boy do I..,*) my work it's still protected, making it easy to start over.

I've created a shell script that I've been using for a long time that backs up all of my stuff to Google Drive and Amazon S3 Buckets, and **i'll write about at a later time**, but [today's post](.) talks about getting [Cron](https://www.computerhope.com/unix/ucrontab.htm) running within Ubuntu in WSL, and to do that we need to use the built in [task scheduler](https://en.wikipedia.org/wiki/Windows_Task_Scheduler) on Windows 10.

This is the first time I'm managing a *nix server in a Windows environment versus using [WinSCP](https://www.winscp.net) & [PuTTy](https://www.putty.org) to get to my work so it's very differernt experience. 

I'm running [Ubuntu 22.04](https://releases.ubuntu.com/22.04/) [LTS](https://ubuntu.com/blog/what-is-an-ubuntu-lts-release) on [WSL2](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview) on Windows 10 (22H2).  By default, Cron **does not start automatically** in WSL2.  I discovering this the hard way by assuming my crontab entries, postfix settings or script was wrong :(

## Prepare Ubuntu

The first thing we have to do is allow the Ubuntu installation to start cron without a password or sudo. When you start a service like cron, you use the command ``sudo service cron start``. [Sudo](https://acloudguru.com/blog/engineering/linux-commands-for-beginners-sudo) requires user interaction, and a windows installation wont have that when it starts up. The way around this is to turn off the requirement for a password.

You'll need to open your WSL console (typically **c:\windows\system32\wsl.exe**) or, if you have it installed, type **Terminal**, then type: 
```
sudo visudo
```
Hit Enter on your keyboard, enter your Root user password, and hit the Enter key again. If you’re using Ubuntu, this opens the [sudoers](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-configuring-the-linux-sudoers-file) file using Nano.

Add the following command to the bottom of the  [sudoers](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-configuring-the-linux-sudoers-file) file:

``` shell
%sudo ALL=NOPASSWD: /usr/sbin/service cron start
```
and then press **Ctrl+O** to save and **Ctrl+X** to exit the file.

This sudoers command says that any user who has enough privileges to use the sudo command doesn’t require a password to run the command **sudo service cron start**, which starts the cron daemon.

After you’ve saved the file, you can check that the command is doing its job by typing: 

``` shell
sudo service cron start
```

and it should start cron without asking for a password. If that worked, let’s turn cron off again so that we can test that the task we’re creating in the next step works properly. To do that, please run:

``` shell
sudo service cron stop
```
## Prepare Windows

Tap the Windows key on the keyboard, and then search for and launch the **“Task Scheduler”** shortcut:

<a href="/assets/images/TaskSchedulerIcon.png" title="Task Scheduler Icon"><img src="/assets/images/TaskSchedulerIcon.png" class="postimage thumbnail" alt="Task Scheduler Icon"></a>

Once it's running, look under the “**Actions**” section and select “**Create Basic Task**”:

<a href="/assets/images/TaskSchedulerCreateATask.png" title="Task Scheduler Basic Task"><img src="/assets/images/TaskSchedulerCreateATask.png" class="postimage thumbnail" alt="Task Scheduler Basic Task"></a>

#### Step 1: Give it a **Name** & **Description**:

<a href="/assets/images/TaskSchedulerName.gif" title="Task Scheduler"><img src="/assets/images/TaskSchedulerName.gif" class="postimage thumbnail" alt="Task Scheduler"></a>

#### Step 2: Define Task **Trigger**:

<a href="/assets/images/TaskSchedulerTrigger.png" title="Task Scheduler Name"><img src="/assets/images/TaskSchedulerTrigger.png" class="postimage thumbnail" alt="Task Scheduler NAMe"></a>

#### Step 3: Define Task **Action**.  

In this case the The **Program/Script** is ``c:\windos\system32\wsl.exe`` & the **Add Arguments** are ``sudo /usr/sbin/service cron start``:

<a href="/assets/images/TaskSchedulerFinish.gif" title="Task Scheduler Command"><img src="/assets/images/TaskSchedulerFinish.gif" class="postimage thumbnail" alt="Task Scheduler Command"></a>

The select **Next** & **Finish**.

#### Step 4: Test.  

Lets verify that what we've done is working.  Go back to your ***WSL Console*** or ***Terminal*** and type:

``` shell
sudo service cron stop
```

Then exit out of the session and reboot your computer.  Once you've rebooted, log back into Ubuntu and type:

``sudo service cron status``

and you should see the Cron service ***Active*** and ***Running***:

<a href="/assets/images/TaskSchedulerCronStatus.png" title="Task Scheduler"><img src="/assets/images/TaskSchedulerCronStatus.png" class="postimage thumbnail" alt="Task Scheduler"></a>

Now with cron running consistantly & automatically on WSL2 on Windows 10, you can schedule backups and other tasks (like automating updates) and know that your schedule will run as planned!