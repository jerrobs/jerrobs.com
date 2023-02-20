---
pubDatetime: 2023-02-21
title: Pathicles
subtitle: "Making **accelerator science** look @@ good"
color: "#2174a8"
description: |
  The _Pathicles Issue_ of the _Journal of Erratic Observations_ introduces an open-source visualization framework for the movement of charged particles in electromagnetic fields.
articles:
  - pth001
  - pth002
  - pth003
  - pth004
bibliographies:
  - title: Accelerator science
    tag: pathicles/accelerator_science
  - title: Numerical Integrators
    tag: pathicles/numerical_integrators
  - title: GPGPU
    tag: pathicles/gpgpu
  - title: Graphics programming
    tag: pathicles/graphics_programming
  - title: Educational Visualization
    tag: pathicles/educational_visualization
---

If you have ever had to visualise particle acceleration in an instructive, numerically accurate and visually appealing way that is also accessible as a still image on paper, a moving picture on screen or an interactive experience on smartphones and desktop computers, your options have been limited. With Pathicles, there might be a solution for you.

A **pathicle** is the visualization of the motion of a particle by sampling this trajectory in equidistant time steps. **Pathicles** is an open source project for creating those pathicles in a web browser by unleashing the parallel computational power of the available graphics processing unit in your device to solve the relativistic equations of motion numerically.

## Features

- **Works in all modern web browsers, even on your smartphone.** _Pathicles_ brings accelerator science to your web browser. No need for special hardware; no need to install special software for scientific computing like a FORTRAN compiler either. _Pathicles_ is designed to run on any modern desktop computer, tablet, or smartphone. However, some features may only work on better environments.
- **Small file size**<br>With _Pathicles_, you can create and explorer stunning interactive animations of particle systems without downloading dozens of megabytes of video files. _Pathicles_ was designed with low download times in mind: Its zipped size is less than 80 kilobytes.
- **Responsive real-time rendering**<br>_Pathicles_ aims to make users explore the science of acceleration by allowing them to play with parameters and see the result immediately. Unlike Hollywood, where rendering a single frame can take hours, _Pathicles'_ rendering must be done in real time, that is, @@ in less than \~10 @@ milliseconds per frame. To achieve responsive real-time rendering, Pathicles uses techniques such as _deferred rendering_, _screen space ambient occlusion_ for shadows, and _multiple X_ for antialiasing.

## Backlog for the future

- more test cases
- geometric ambient occlusion
- better shadows
- using OGL instead of regl? / How about WebGL @@ 2
- Pathicles - the game

## Key Observations

- You can make it work in all modern web browsers.
- Its gezipped size is less than 80 kilobytes (and it can be made even much smaller).
- On many mobile devices, you cannot write floating point numbers to textures. Therefore, expensive conversions from floating point numbers to integer representations and back are necessary.
- While there are many examples in the wild of how to use GPU parallism to solve the equation of motion of multi-particle systems, none could be found that is history aware and keeps track of previous values.
- While the propagation of rounding errors can be a real problem with all numerical approaches, special care must be taken to make it work with 16-bit precision.
- Due to the lack of good debugging tools, debugging WebGL programmes is no fun at all
