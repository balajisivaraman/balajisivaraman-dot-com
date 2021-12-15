+++
title = "Weeknotes: 4"
author = ["Balaji Sivaraman"]
date = "2021-12-12"
categories = [
"Weeknotes (2021)"
]
tags = [
"Weeknotes"
]
share = "false"
type = "post"
+++

## Work

End of the year blues were in full effect. (And have been for the last couple of
weeks.) I am in that zone where it's just a case of looking forward to December
24 when my mini-vacation will begin.

The biggest news to come out of this week was that Thoughtworks Chennai office
opened for the first time since March 2020. It goes without saying I was there
on the second day of opening (Thursday, December 9). Currently only a minimum
number of people are allowed, and there are understandably numerous restrictions
in place in terms of where we can sit and so on.

Even so, it was still great to meet up with 2 other folks from my current team,
along with a handful of folks who had joined us during lockdown. The best part
was the free-flowing conversation that happened over a socially distanced lunch
table that reminded me of what I had been missing for more than a year and a
half.

In terms of actual technical work, I decided to use the December lull
productively and started migrating one of our frontend Angular codebases from
Jasmine to Jest. I had estimated to be able to complete it within the week, but
then the
[bombshell](https://www.cyberkendra.com/2021/12/worst-log4j-rce-zeroday-dropped-on.html)
dropped. (There might be more on this in next week's post, but suffice to say
everything has been dealt with.)

## Learning

I started solving this [year](https://adventofcode.com/2021)'s Advent of Code in
[GoLang](https://github.com/balajisivaraman/aoc2021go/) just like I
[started](https://github.com/balajisivaraman/aoc2020go/) last year. After
solving the first two days, I realised I was not having any fun with it at all,
and I finally made peace with the fact that Go was never going to be a language
I will use in my free time. So I have now begun solving it in - no surprises
here! - [Rust](https://github.com/balajisivaraman/adventofcode-rust).

## Personal - Tech

After nearly 2 years with i3, I finally decided to switch back to XMonad this
week. The main reason behind the switch was that I had hit a ceiling with the
manual tiling in i3.

Primarily, my use-case was that I wanted to have one large window in the middle
covering half of my 34" ultra-wide with two smaller windows on either side of it.
If I swap my center window to the left, the window that moved to the middle
should now be large. This is simply not possible in i3 since you're resizing
windows, not screen spaces or layouts. This turned out to be a [piece of
cake](https://github.com/balajisivaraman/xmonad-config/commit/03637384ae38112ba25a6c6d283a1ff7369ae49f)
with XMonad.

I had used
[XMonad](https://github.com/search?q=xmonad+repo:balajisivaraman/dotfiles&type=Commits)
in the past, so this was not an entirely new shift for me. However, what
surprised me was that I was able to go farther with some of my configuration
than I had in the past. This was interesting to me since it kind of showed the
power of XMonad, in that I'm able to pick up something new and become more
powerful with it every time I return to it.
