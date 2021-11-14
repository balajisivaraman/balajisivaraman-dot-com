+++
title = "Getting Started With rledger"
author = ["Balaji Sivaraman"]
description = "In this article, I briefly share my earlier experiences in open source before describing the current project I have kick-started. I will talk about how I went about finding an itch to scratch, building on that by setting some goals for the project, and finally how I actually got the ball rolling."
date = "2021-08-12"
toc = true
share = true
categories = [
  "Software Development"
]
tags = [
  "Open Source", "rledger"
]
type = "post"
+++


## Introduction

The world of open source can appear daunting to people who aren't part
of it. Till a couple of years back, I had never contributed to an open
source project despite relying on them in a professional capacity all
my life. During that time, I always marveled at people who took time
out of their personal lives to offer something of value to the rest of
the world, at little or no monetary gain to themselves. It wasn't
until I contributed my first commit that I realised open source (when
done right) offers a drug-like feeling.

That was in 2018 when, after completing the Rust Book, I needed a way
to quickly apply all the Rust I had learned from it. At that point,
the only Rust project I was familiar with was
[ripgrep](https://github.com/BurntSushi/ripgrep). So I went to its
GitHub page, identified the simplest looking issue that needed help,
fixed it and sent a pull request, which was accepted. So it spurred me
on to contribute more to the project, including a fairly large
feature. The latter remains my most significant open source
contribution till date. Since then, my open source contributions have
been mostly non-existent. As a result, I have been left yearning for
the drug-like feeling contributing to open source - and most
importantly, learning something new in the process - provides.

In that time, I have also been constantly searching for an itch I can
scratch in the form of a medium-sized open source project, primarily
built using Rust. Finding this has proven to be a significant
challenge. It is not that there aren't unsolved problems in the world
of open source, especially in Rust. It is just that unless there is a
personal attachment to the idea at hand, my brain tends to get
detached beyond a certain point.

In this article, I want to share my journey of discovering that itch
and taking the first step with it.

## Finding an Itch I Want to Scratch

In late 2018, I
[discovered](https://www.goodreads.com/review/show/2649548256?book_show_action=false&from_review_page=1)
You Need a Budget. A year later in 2019, I put my first yearly budget
together by following the four simple rules along with my partner. To
do this, I used YNAB's own software, which is proprietary and costs
$84 a year. Normally I have an aversion towards anything proprietary,
because I can't say for sure what the company does with my data. In
this case, I was convinced YNAB weren't up to anything untoward after
reading their privacy policy. And more importantly, I really needed to
kick-start my budgeting journey, so I went ahead with it.

My partner wasn't convinced. They challenged my inner programmer
saying, "You call yourself a programmer who can solve large problems.
Why don't you take this as a challenge and build your own software for
budgeting?" (They really felt we could find better use for the money
we were giving to YNAB. )

Having used [ledger](https://www.ledger-cli.org/) in the past, I knew
I may not even have to build one from scratch. I only needed to get it
to play nicely with YNAB's four rules, which is where I hit a
roadblock. Going through [Plain Text
Accounting](https://plaintextaccounting.org/#budgeting), I realised
every person had their own approach of doing YNAB-style budgeting
using ledger. This wasn't a roadblock in and of itself, as I could
always adapt any one of those approaches to my own. The biggest
problem was none of the approaches was as seamless as using YNAB's
app, especially in offering the ability to set goals for individual
accounts and showing how much should be allocated monthly based on the
goals.

I also [looked
around](https://plaintextaccounting.org/#plain-text-accounting-apps)
to see if there was already a widely used ledger-clone in Rust but
couldn't find it. And lo and behold, I had suddenly found my itch.

## Why Should I Build This

I recognised a long time ago that getting an idea wasn't enough. I am
a highly distractible person. I had had a number of decent ideas I
could have worked on in the past. I hadn't. With rledger, I wanted to
break this cycle. I wanted to primarily prove to myself I could put
together a medium-sized project on my own.

To do this, however, I knew I had to give myself some solid reasons to
continue working on this project whenever those pesky distractions
tried to pull me away. In this regard, I was inspired by a recent
[presentation](https://youtu.be/6PKmZSHxu0c?t=1147) given by Simon
Michael on hledger, in which he listed "get better at Haskell" as one
of his goals for starting hledger. And I told myself, "If that was
good enough to get hledger to survive for 14 years, then it's good
enough for me."

> "Get better at Rust" became my primary motivation to work on
> rledger.

I have been on and off with Rust for the better part of 3 years now
without ever really improving my skills with it. By building a
ledger-clone using Rust, I knew it will touch upon a variety of
aspects of programming I should be able to learn from: *building a CLI
application*, *parsing techniques*, *modularising the core of rledger
as a library*, *packaging a CLI application for a variety of OSes* and
so on.

I also understood that, while "get better at Rust" might be good for
personal motivation, I needed to give rledger a purpose to exist
beyond that.

## Why Should This Get Built

There are
[numerous](https://plaintextaccounting.org/#plain-text-accounting-apps)
ledger-likes available currently. More keep cropping up from
time-to-time, though only ledger and hledger have any real market
share owing to being continuously developed and supported. Knowing I
might never be able to match up to either of them is one of the
excuses I told myself for not starting with rledger in the first
place.

With hledger, Simon Michael's non-personal goal was to "acquire a more
robust, usable, evolving incarnation of ledger". For rledger, I needed
to find a similar larger purpose for rledger to exist beyond just "get
better at Rust" for myself. And I also knew it couldn't just be to
"acquire an incarnation of ledger in a modern language", since this
was the problem already solved by hledger.

As hinted at earlier, budgeting has long been a thorn in the world of
plain text accounting. ledger's
[budgeting](https://www.ledger-cli.org/3.0/doc/ledger3.html#Budgeting)
relies on periodic transactions. For people following a YNAB style of
budgeting where the budget can be in a state of flux often changing
every month, this means editing the periodic transactions by hand to
indicate how long it should be active for. Having tried this, I know
it is a pain.

In a Github
[issue](https://github.com/simonmichael/hledger/issues/315) discussion
on hledger, the suggested mechanism was to use virtual accounts. In
general, this is the widely adopted strategy for YNAB-style budgeting
using ledger-likes. However, this does not offer a great user
experience, especially if the user has to allocate budget amounts by
hand every month.

Most importantly though, none of the above approaches offer something
similar to the "goals feature" offered by YNAB. I have found this to
be a life-saver for budget allocation. For example, if I tell YNAB how
much money I want to save in a particular budget by a certain date, it
will tell me how much I need to allocate on a monthly basis to reach
my target. Every time I tried plain text accounting after having used
YNAB, I missed this feature the most, causing me to relapse.

> And so with rledger, my overarching purpose became to acquire an
> incarnation of ledger offering an out-of-the-box seamless user
> experience with a goals feature for YNAB-style budgeting.

## Taking the First Step

Even after giving myself clear motivation to continue working on
rledger and giving it a reason to exist, I knew I wasn't going to get
anywhere unless I made the all important `Initial commit` on my
codebase.

For a long time, this proved to be a blocker as I was stuck in a state
of [analysis
paralysis](https://en.wikipedia.org/wiki/Analysis_paralysis). If
you're unfamiliar with the idea, it is a state where we're basically
stuck in the same position without moving forward due to
over-analysing. I was stuck here because I was trying to operate in a
Waterfall-ish way for rledger. I told myself I was setting up rledger
for success by getting all thinking done initially. It turned out I
was setting up rledger for *never getting kicked-off*.

Here again, I was inspired by the hledger
[presentation](https://youtu.be/6PKmZSHxu0c?t=1584) I mentioned
earlier from Simon Michael. The [first Hledger
commit](https://github.com/simonmichael/hledger/commit/85864b414e0cd81efcd031d18fa4243cc55103a7)
had nothing but a simple Haskell data type representing a Ledger
transaction. This taught me a valuable lesson.

> By observing hledger's early commits, I realised it's okay to start
> small. All successful large open source projects slowly evolved into
> their current states from humble beginnings.

That's exactly what I ended up doing recently. Kick-start rledger with
a simple commit containing a ledger `Transaction` data type in Rust
and then printing it out. This seemingly simple act meant a huge
weight had been lifted off my shoulders.

## Looking Forward

Now some of you might be wondering why I haven't linked to a public
repository containing some actual rledger code. This is because it
still doesn't exist in the world as such. I am developing it in my
spare time and within my own space. When I feel it has reached a shape
where I am okay sharing it with others who can also contribute to it,
I will make it public.

Till such a time, however, I want this article (and the series which
will follow) to act as a record of the process of creating an open
source project. I wish to capture design considerations and some of
the research that goes into solving a problem, amongst other things in
the hope it gives others the motivation that open source isn't as
daunting a place after all.
