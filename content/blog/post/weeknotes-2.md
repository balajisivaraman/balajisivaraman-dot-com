+++
title = "Weeknotes: 2"
author = ["Balaji Sivaraman"]
date = "2021-11-21"
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

One of my colleagues and I had to debug an issue that caused some of
our HTML documents to render � in place of valid characters. Looking
at it, it was immediately apparent this was due to an issue with
character encoding. It turned out that we were assuming UTF-8 encoding
as default from our document store, whereas in reality it could also
be Windows-1251 or ISO-8859.

In and of itself that wasn't super interesting, but resolving it led
to another issue where some characters were rendered as `=E8` in our
text documents. This led us further down the rabbit hole of character
encodings to [Quoted
Printable](https://en.wikipedia.org/wiki/Quoted-printable) encoding,
which is something neither of us had heard of before.

That turned out to be the only interesting bit of learning in an
otherwise straightforward week at work from the project point of view.

Some further reading material on the above topics we read through in
our deep dive:

- [The Absolute Minimum Every Software Developer Absolutely,
  Positively Must Know About Unicode and Character Sets (No
  Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
- [Working with Strings in
  Rust](https://fasterthanli.me/articles/working-with-strings-in-rust)

On the internal training program for technical principals, we have
been handed our final piece of homeworkm where we have to come up with
the technical and engagement strategy for a sample problem statement.
This mirrors the kind of response we might have to submit to a
large-scale client RFP. This entire training journey has been full of
learning, and this piece of work is no different. It is forcing me to
think strategically like a CTO faced with a large problem rather than
as a developer or a technical lead.

# Learning

I ran into a weird issue in my VPS with Nextcloud complaining of a
downgrade from v22.2.2.0 to v22.2.0.2 and failing to start. After
living without my cloud for one and a half days, this eventually
forced me to put in a temporary
[commit](https://github.com/balajisivaraman/nixfiles/commit/8493a03c6265fa4692140152298606257d3612eb)
pinning the Nextcloud version in place. I will write more about this
in a separate post some time later this week.

Besides this, I spent some time researching RSS readers I can setup on
my VPS. I finally settled on [Miniflux](https://miniflux.app/). I love
minimal and no-nonsense software, and Miniflux fits the bill
perfectly. Given there was already a [Nix
Package](https://github.com/NixOS/nixpkgs/blob/master/nixos/modules/services/web-apps/miniflux.nix)
that set it up perfectly only made it a no-brainer. It is now setup at
https://feeddb.balajisivaraman.com.

## Personal

I finally got around to [setting up](https://www.yubico.com/in/setup/)
the [Yubikey 5 NFC](https://www.yubico.com/in/product/yubikey-5-nfc/)
I had asked my parents to get from the US on their recent trip. It was
only after going through the setup documentation I realised that
Yubico [suggests](https://www.yubico.com/spare/) treating the Yubikey
as if it were any other regular key and buy some spares to keep handy.
So I ended up ordering a couple more from
[Icons](https://icons.net.in/product/yubico-yubikey-5-nfc-security-key/)
who are the official reseller for Yubico in India. I'm currently
waiting on them to be delivered before setting all of them up.

## Gaming

Going through [Mortismal
Gaming](https://www.youtube.com/c/MortismalGaming1966)'s videos, I got
enticed into starting a new Baldur's Gate: Enhanced Edition campaign.
I have started a couple in the past that I never made any real
progress in. This time around I hope to actually complete the game
given it is a CRPG classic. As usual, I rolled a Paladin Cavalier to
get the ball rolling as I anyway end up playing as a hero with a heart
of gold in RPGs, and a Paladin sort of fits the bill being Lawful Good
by default. One of these days though I really should play as an Elf
Rogue who specializes in being pure evil. Let's see!

## Link Roundup

### Software Leadership

- [Don't Soften
  Feedback](https://larahogan.me/blog/dont-soften-feedback/)
