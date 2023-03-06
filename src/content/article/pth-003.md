---
tags:
  - issue:pathicles
  - topic:athicles/floating_points
issue: pathices
pubDatetime: 2023-02-15T00:00:00.000+00:00
version: "1.0 (unpublished)"
title: Making it precise
subtitle: by outsmarting floating @@  point limitations
sectionNumber: PTH.003
description: >
  Rounding errors due to storing values as floating point values can easily get out of hand, particular care is required if you can only safely assume 16 bit precision.
---

If it is true that the devil is in the details, then getting numerical simulations to work in web browsers on different devices is a statistical endeavor.

The root of the evil are floating point numbers, which are not a bad thing per se, but a neat trick to store numbers of very different magnitude and reasonably acceptable precision in a memory-efficient way. They solve the problem of representing an infinite number of numbers with limited memory - be it 16 bit, 32 bit or 64 (in the case of WebGL even 24 bit on some devices).

<div class="level1">

To store any number `x` in computer memory you need a binary representation of that number:

```glsl
x = aₙ aₙ₋₁ … a₀.a₋₁ a₋₂…a₋ₘ

```

where `aₙ aₙ₋₁ … a₀` represents the integer part and `a₋₁ a₋₂…a₋ₘ` the fractional part of `x`.

We have to decide how many bits to use for its integer part, and how many for its fractional part.

</div>

When using WebGL for numerical simulations, floating point numbers cause trouble in two places:

1. While smartphones GPUs know to read floating points and to do arithmetics with them, they cannot write them back to memory. Therefore, we need to convert them from and to some integer based representation.
2. While desktop GPUs can write floating points back to memory, the precision of

## IEEE 754

For nearly all hardware and programming languages, floating-point numbers are stored in the same binary format defined on the 70 pages of the _IEEE Standard for Floating-Point Arithmetic (IEEE 754)_ (<bib-ref cite-key="ieee__2019__754" />, <bib-ref cite-key="ieee__2019__754" />)

The usual formats are 32 or 64 bits in total length:

The first version of the standard was published in 1985 by the Institute of Electrical and Electronics Engineers (IEEE). The first revision was published in 2008, the third and current (as of 2020) revision was published in 2019.

The IEEE754 standards, representing double precision numbers with 64 bits (a.k.a double, or float64) and single precision numbers with 32 bits (a.k.a float32).

defines how almost all modern programming languages, GPUs and CPUs handle floating-point numbers.

## Rounding errors tragedies

- On February 25, 1991, a poor implementation fo floating point artithmetics contributed to the death of 28 soldiers from the U.S. Army's 14th Quartermaster Detachment in Dhahran, Saudi Arabia. Although the soldiers' location was protected from Iraqi Scud missiles by a Patriot defence system, floating points rounding errors caused the system's internal clock to be inaccurate by .34 seconds after being in operation for 100 hours. For a Scud missile travelling at 1600 m/s, a third of a second corresponds to half a kilometre (<bib-ref cite-key="benchoff__2015__improvement" />).

- **NOT FLOATIONG POINT, BUT OVERFLOW**. On 4 June 1996 -- after ten years of development and cost of 7 billion dollars -- the maiden flight of the Ariane 5 launcher ended in a failure. At 39 seconds after liftoff it exploded because a conversion from a 64-bit floating point to a 16-bit integer made the steering computer think the rocket was way off course and made it initiate the self-destruct mechanism built into the rocket -- destroying the rocket and cargo valued at half a billion dollars (<bib-ref cite-key="stadther__1998__high" />, <bib-ref cite-key="lions__1999__ariane" />, <bib-ref cite-key="cnn__1996__unmanned" />).

- Belotti argues that one reason of the 50 years old programming language COBOL being still used for the majority of financial transacions worldwide is that it has fixed point numbers being build-in (<bib-ref cite-key="bellotti__2018__cobol" />)
