---
title: Applications of A.I.
description: In this brief article, I will go over a few problems that artificial intelligence is helping us solve (in no particular order).
excerpt: In this brief article, I will go over a few problems that artificial intelligence is helping us solve (in no particular order).
is_project: false
date: 2020-12-01 12:00:00
featured_image: '/assets/images/fullsize/posts/applications-of-ai/feat.jpg'
---

### 1. Object detection

As humans, we can easily identify what objects are present in a photo/video. We can also point to their exact location. For example, could you draw a rectangle around each dog in the photo below?

![Dogs](/assets/images/fullsize/posts/applications-of-ai/dogs.jpg)

Of course! But this task is quite a difficult one for a computer. How would one even begin to write a program that finds every dog in the photo?

An A.I. system  called [YOLO](https://pjreddie.com/darknet/yolo/) (You Only Look Once) aims to do just that. Given an image or video, the algorithm identifies several of the objects that it knows, and draws rectangles around them. See an example output file below:

![Example of YOLO in use](/assets/images/fullsize/posts/applications-of-ai/yolo.jpg)

<small>Photo by [MTheiler](https://commons.wikimedia.org/wiki/User:MTheiler) (licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0?ref=ccsearch&atype=rich))</small>

_Here are several ways that YOLO can be used:_

*   Automatic cropping of images
*   Security footage analysis
*   Foundation for more complicated detection systems

### 2. Translation

You are probably already familiar with engines such as Google Translate, which have become quite good at translating complete sentences between over a hundred languages. Such translations are powered by artificial intelligence.

Why do we need A.I. for this? After all, we _do_ have online dictionaries that can translate. Well, word-for-word translations are not good enough, especially between unrelated languages (e.g. Germanic vs. Romance languages).

For example, some languages have several subject pronouns (e.g. formal vs. informal “you”). In Spanish, the difference between “Dime” and “Dígame” depends solely on context, which is something that a non-A.I. algorithm would have a harder time adapting to:

![Google translate example](/assets/images/fullsize/posts/applications-of-ai/translate.png)

Two ways to say "tell me" in Spanish.

Additionally, different languages might have completely different grammatical structures, which makes it even more difficult to translate full sentences without A.I.

### 3. Recommendations

#### Movie recommenders

These are used by companies such as Netflix, Hulu, and even YouTube to provide their users with suggestions about which content they might be interested in.

Movie recommendation is a special type of A.I. solution that works despite the lack of customized user data. For example, Netflix’s algorithm will only know a new user’s preference about _five or ten movies,_ and will already be ready to suggest movies that the user might like.

#### Other recommenders

These are used by companies like Amazon, Facebook, and Google, to find products that might interest their users. These systems are also hard to design (for similar reasons).

### For those that want to learn more

Check out these resources about the various applications of A.I. above:

[YOLO9000 paper](https://arxiv.org/pdf/1612.08242v1.pdf) about the object-detection algorithm.

[CS Dojo Community’s lecture](https://www.youtube.com/watch?v=AIpXjFwVdIE) about how Google Translate works.

[Stanford lecture](https://www.youtube.com/watch?v=h9gpufJFF-0) about collaborative filtering, a popular recommendation technique.
