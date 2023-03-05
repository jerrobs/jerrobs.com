---
pubDatetime: 2023-02-15T00:00:00.000+00:00
issue: pathicles
version: "1.0 (unpublished)"
title: Approximating movement
subtitle: by relativistic leapfrogging
sectionNumber: PTH.001
tags:
  - issue:pathicles
  - topic:pathicles/accelerator_science
  - topic:pathicles/numerical_integrators
description: >
  The relativitic equations of motion of a particle system can only be solved analytically in very special cases. However, there is a class of well known numerical algorithms that are specialised in the numerical approximation.
---

Today, the movement of charged particles influenced by electric and magnetic forces is not rocket science and part of the school curriculum. That was a different story before Dutch physicist Hendrik Antoon Lorentz (1853-1928) derived the equation of motions from Maxwell equations of electromagnetism in 1895 (<bib-ref cite-key="lorentz__1895__versuch" />). This feat is the reason why the electromagnetic force is called "Lorentz force".

::: level1 Lorentz force

The electric and magnetic component of the Lorentz force have very different properties. While the electric force only depends on field strength and charge, the magnetic force is additionally dependent on the value and direction of the particle's velocity

:::

The electric and magnetic component of the Lorentz force have very different properties. While the electric force only depends on field strength and charge, the magnetic force is additionally dependent on the value and direction of the particle's velocity.

::: level1 Relativistic equations of motion

The relativistic motion of a particle in an electromagnetic field must satisfy the relativistic extension of Newton's second law, which means the equality of change in momentum and Lorentz force.

```js

du/dt = (q/m)(E + v &timey; B)
  // equation of motion I


dx/dt = v
  // equation of motion II

```

with

```js

u := γv = p/m
  // spatial part of the four-velocity

β := v/c
  // beta, the relative velocity
  // (relative to the speed of light)

γ := 1/sqrt(1 - β²) = sqrt(1 + u²/c²)
  // gamma, the Lorentz factor

```

[comment]: <> (1. The **Lorentz force** of an electric force field <span class="math">**E**</span> and magnetic force field <span class="math">**B**</span> on a particle with mass <span class="math">m</span>, electric charge <span class="math">q</span>, velocity <span class="math">**v**</span>, and location <span class="math">**x**</span> is given by)

[comment]: <> ( <div class="math">**F** = q @ / @ m &#40;**E** @ + @ **v**&times;**B**&#41; </div>)

[comment]: <> (2. According to **Newton's second law**, the force on a particle is equal to the change in momentum of the particle.)

[comment]: <> ( <div class="math">**F** = d**p** @ / @ dt = d&#40;m**v**&#41; @ / @ dt = d²&#40;m**x**&#41; / dt²</div> )

[comment]: <> (3. According to Einstein's Special Relativity, the momentum of a &#40;relativistic&#41; particle is given by)

[comment]: <> ( <div class="math">**p** @@ = @@ &gamma; @ m @ **v** = &gamma; @ m @ c @ **&beta;**</div>)

:::

## Analytical solutions

The relativistic equations of motion can only be solved analytically in very special cases, which means that a simple formula can be found to calculate the location and velocity of a particle at given moments in time.

One such special case is a charged particle in a uniform magnetic field and in the absence of electric forces, in which the particle orbits in a perfect circle perpendicular to the magnetic field. The radius and frequency of the gyration depends on the velocity component perpendicular to the magnetic field.

::: level1 Gyration in uniform magnetic field

The gyration of a charged particle in a uniform magnetic field is fullly described by the gyroradius and gyrofrequency:

```js
ω = q/m * B/γ   // gyrofrequency
T = 2π/ω = 2π * m/q * γ/B  // gyroperiod
R = vp/ω =       // gyroradius

with vp

```

the velocity component perpendicular to the magnetic field.

For _Pathicles_, both formulas are used to contruct test cases for checking the validiy of the numerical integration.

:::

## Numerical Solutions

In most cases, analytical solutions to the equations of motion do not exist and you have to apply numerical integration methods. Here, the trajectory of a particle is approximated step by step at time intervals `Δt`. Different numerical approaches differ in their computational complexity and how the error depends on `Δt`.

### Euler integration

The most straightforward numerical integration approach is the Euler method that calculates the new position and velocity by simply treating the infinitesimal `Δt` of the differential operator as the finite time interval `Δt`.

::: level1 Euler integration

```js
xnp1 = xn + vn Δt
vnp1 = vn + (q/m)(E + vn × B) Δt

```

The error of the Euler method is proportional to `Δt`.

:::

### (Synchronized) Leapfrog Integration

To calculate the next position, the Euler method uses the velocity as it is at the beginning of each time step. A more accurate result can be expected by using the midpoint velocity instead. This can easily be achieved by shifting the time steps for the velocity approximation by half a time step. Because of this interleaving, the term leapfrog is used (<bib-ref cite-key="kreissetal__2014__introduction" />).

::: level1 Leapfrog integration

A discretized version of the the differential equations of motion is

```js

// leapfrog scheme
unp1  = un   + (q/m) * (Enp1_2 + v × Bnp1_2) * (Δt/2)
xnp3_2 = xnp1_2 + unp1/gnp1  * Δt


```

:::

If you are interested in the phase-space of the motion, you need to calculate positions and velocities at the same moments in time (instead of shifted by half delta t). For this, the synchronized version of the leapfrog integration comes handy at little computational cost.

::: level1 Synchronized Leapfrog integration

```js

// synchronized leapfrog scheme
xnp1_2  = xn   + un/gn * Δt/2
unp1   = un   + (q/m)[ Enp1_2 + v × Bnp1_2] Δt
xnp1   = xnp1_2 + unp1/gnp1 * Δt/2

```

:::

Leapfrog integration has two major advantages over alternative approaches such as Euler integration or Runge-Kutta methods. The first advantage is its **time reversibility**: You can go n steps forward and n steps backward to get to the same starting position. (The second strength is its **symplectic** nature, which implies that it preserves the (slightly modified) energy of dynamical systems.)

### Leapfrog integration with Boris

There various ways to solve the above leapfrog scheme. The first one was proposed by Boris in 1970 by setting the velocity on the right hand side to

::: level1 Boris leapfrogging

```js

v  = 1/2 ( unp1 + un) / gnp1_2

u*      = unp1 + (q/m)(Δt/2) E
u**     = u* + (u* + u* × t) × s
unp1    = u**   + (q/m)(Δt/2) E

```

By applying half the electric field before the magnetic field rotation and half afterward, the algorithm becomes fully reversible and yet the magnetic interaction can be treated in the absence of an electric field. This

```js
vnp3_2  = vnp1_2  + (q/m)(Δt/2) E
                    + (q/m)(Δt/2)( v1+ v3 ) × B
                    + (q/m)(Δt/2) E

```

with

```js
v1 := v1 + a v1 × B
v3 := v2 + b v2 × B

```

and

```js
a := tan( (q/m) abs(B)/c (Δt/2) ) / abs(B)
b := 2a / (1 + a² B²)

```

:::
