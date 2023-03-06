---
pubDatetime: 2023-02-15T00:00:00.000+00:00
issue: space
version: "1.0 (unpublished)"
title: Space Space
subtitle: Vaster than you might @@ have @@ thought
sectionNumber: SPC.003
tags:
  - issue:space
  - topic:space/space_space
description: >
  Decent typography relies heavily on the proper use of space characters. Neverthess, many type designers simply don't care (or know) to implement the 15 different shades of space. Even worse: The Unicode Consortium and Adobe treat typographic properties of spaces quite differently.
---

While every typewriter knows the standard word separator <kbd>SPACE</kbd>, it is only one of an infinite number of distinguishable spaces in the typesetting universe. What they all have in common is that they are not directly visible. They can, however, differ in the dimensions of **width**, **breakability** or **elasticity**.

But a one-dimensional characterization would not do justice to interword spaces. To make the typographer's life a happier one, spaces can differ with respect to two other properties. While the normal interword space is also a hint where an automatic line-breaking can occur, there are also non-breaking spaces where line-breaking is not allowed (**breakiness**).

resulting in huge gaps when not used properly.

## Dimension Width

### Font-dependance

The width of the interword <span class="unicode_name">space (SP)</span> is font-dependant for the wider the letters, the wider the interword separation has to be. Equally wide is the <span class="unicode_name">no-break space (NBSP)</span>. The width of the <span class="unicode_name">narrow no-break space (NNBSP)</span> is font-dependant, too, and about half the width of the <span class="unicode_name">space (SP)</span>.

Also font-dependant are the widths of two rather exotic space characters which used to be used for typesetting tabular data.
The <span class="unicode_name">punctuation space (PSP)</span> is as wide as the <span class="unicode_name">full stop</span>; while the width of the <span class="unicode_name">figure space (FSP)</span> equals the widths of the tabular figures like the <span class="unicode_name">digital zero</span>.

### Font-independant widths

The second groups comprises the space separators with widths that are nominally defined relative to the font size. Them _em_ is the relative unit for the font-size: 1 @ em = `font-size`?

Unicode knows the <span class="unicode_name">em space (ENSP)</span>, the <span class="unicode_name">en space (ENSP)</span>,

## Dimension Elasticity

> If text is set ragged right, the word space (the space between words) can be fixed and unchanging. If the text is justified (set flush left and right), the word space must be elastic. In either case the size of the ideal word space varies from one circumstance to another, depending on factors such as letterfit, type color, and size. A loosely fitted or bold face will need a larger interval between the words. At larger sizes, when letterfit is tightened, the spacing of words can be tightened as well.

  <footer><bib-ref format="full" cite-key="bringhurst__2008__elements" /></footer>

Paragraph justification aligns the text to the left margin and adjusts the spacing between words (and sometimes between letters) so that the text is also aligned to the right margin. This only affects the <span class="unicode_name">spacing (SP)</span>, whose width can be reduced by up to 50 per cent and increased by up to 150 per cent.

And followers of the typesetting god Gutenburg (who not only gave us the printing press, metallic letters and the commandment "Thou shalt set thy text in justification") know that the width of some spaces is fixed, while others have a **stretchability**.

## Dimension Breakability

Typesetting is the task of mapping one-dimensional character sequences onto two-dimensional page areas. In Western languages, characters are grouped into horizontal lines that are combined vertically. Possible values for this dimension are **breaking** and **non-breaking**.

## The white spaces of Unicode

The Unicode project was conceived in 1988 (<bib-ref key-ref="becker__1988__unicode" />) to end the Babylonian

It includes white space characters with different line breaking properties, different ligating properties, and different widths. I

> The fixed-width space characters (U+2000..U+200A) are derived from conventional (hot lead) typography. Algorithmic kerning and justification in computerized typography do not use these characters. However, where they are used (for example, in typesetting mathematical formulae), their width is generally font-specified, and they typically do not expand during justification. The exception is U+2009 thin space, which sometimes gets adjusted.

  <footer><bib-ref format="full" cite-key="unicodeconsortium__2020__unicode"  location="268f"/></footer>

> U+202F narrow no-break space (NNBSP) is a narrow version of U+00A0 no-break space, which except for its display width behaves exactly the same in its line breaking behavior. It is regularly used in Mongolian in certain grammatical contexts (before a particle), where it also influences the shaping of the glyphs for the particle. In Mongolian text, the NNBSP is typically displayed with 1/3 the width of a normal space character. The NNBSP can be used to represent the narrow space occurring around punc- tuation characters in French typography, which is called an "espace fine insécable.”

  <footer><bib-ref format="full" cite-key="unicodeconsortium__2020__unicode"  location="269"/></footer>

The _lingua franca_ of text documents is Unicode, a technical specification for the encoding, representation, and handling of text (<bib-ref cite-key="unicodeconsortium__2020__unicodea" />). The aim of Unicode is to provide a unique number for every character, no matter what the language. The progress has been impressive: Version 10 of the standard comprises 136,690 characters. Among these 136,690 characters, you find a total of 18 different spaces, 15 of which have typographical meaning.

The most commonly used space character is U+0020. The other space characters can be different in two dimensions: their widths, their expandability (in justified setting) and their lin-breaking behaviour. The widths are determined by the font designer. The expandability and line-breaking behaviour is given by the Unicode Specification.

<WhiteSpaceDB />
