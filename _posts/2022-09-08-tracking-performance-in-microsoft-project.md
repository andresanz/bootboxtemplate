---
layout: post
title: Tracking Performance in Microsoft Project
date: 2022-09-08T21:39:07-0500
date-modified: 
comments: true
category: Blog
tags: [microsoft project, performance]
feature-image:
feature-image-width: 100%
feature-image-height: auto
thumbnail-image: /assets/images/msproject.png
thumbnail-image-width: 150px
thumbnail-image-height: auto
---

The ability to measure performance in Microsoft Project is a key element to keeping a project on track. Saving a baseline for a project where your using Microsoft Project is pretty easy to do. but that doesn’t necessarily tell you how on-time tasks are tracking.

Although often overused, misused and poorly managed, the concept of “traffic lights” to gauge performance (green=good, yellow=problems, red=bad) can give you a sense of “how it going” when a baseline shows you to be on track.

**But how do you implement something like that, as “Progress” is not a standard field in Microsoft Project?**

Create a Custom Field in Microsoft Project
Select **Gantt Chart Tools > Columns > Custom Fields:**

<img src="/assets/images/Project-Custom-Fields-1.png" class="postimage" alt="Project Custom Fields">

Select the Text field you want to use (making sure not to use a Text field already used for another function), and select **Rename**, and give it a name such as **Progress**:

<img src="/assets/images/Project-Rename-Test1-to-Progress-1.png" class="postimage" alt="Project Custom Fields">

Next, select the **Lookup button** from the **Custom Attributes** field:

<img src="/assets/images/Project-Custom-Attributes-Lookup-1.png" class="postimage" alt="Project Custom Fields">

Then enter the values you want in your custom field, as an example, I’m using “On Track, Slipping & Blocked“:

<img src="/assets/images/Project-Edit-Lookup-Table-1.png" class="postimage" alt="Project Custom Fields">

Then select **Close**. Next select the **Graphical Indicators** button:

<img src="/assets/images/Project-Values-to-Display-1.png" class="postimage" alt="Project Custom Fields">

In the Graphical Indicators Selector screen that appears, first make sure that Nonsummary rows are selected for the criteria:

<img src="/assets/images/Project-Indicator-Criteria-1.png" class="postimage" alt="Project Custom Fields">

I’m looking to track progress on specific tasks, not on a group of tasks. You’ll need to define the “test” for each of the custom values we created earlier. In this case, the test is “equals”:

<img src="/assets/images/Project-Test-for-Progress-1.png" class="postimage" alt="Project Custom Fields">

Next, select the customer value created earlier from the Values dropdown:

<img src="/assets/images/Project-Edit-Lookup-Table-1.png" class="postimage" alt="Project Custom Fields">

and then select the your preferred image:

<img src="/assets/images/Project-5-Different-Colors-1.png" class="postimage" alt="Project Custom Fields">

Once you’ve completed this for each of the custom values, select OK (and OK again to return to your Gantt chart):

<img src="/assets/images/Project-Graphical-Indicators-for-Progress-1.png" class="postimage" alt="Project Custom Fields">

Once your back in your project schedule, select **Add New Column**:

<img src="/assets/images/Project-Add-New-Column-1.png" class="postimage" alt="Project Custom Fields">

then select the progress field we created earlier:

<img src="/assets/images/Project-Text-1-Progress-1.png" class="postimage" alt="Project Custom Fields">

Now, as you manage your project, you can use your new Progress field for each of the tasks in your schedule:

<img src="/assets/images/Project-Add-New-Column-1.png" class="postimage" alt="Project Custom Fields">

Once you select the Progress value, the graphical indicator will appear:

<img src="/assets/images/Project-Progress-Lights-List-1.png" class="postimage" alt="Project Custom Fields">

If you export project schedule information to Excel, the graphical images wont copy over, but you can use a [Conditional Formatting](https://www.excel-easy.com/data-analysis/conditional-formatting.html) rule to get the desired results.