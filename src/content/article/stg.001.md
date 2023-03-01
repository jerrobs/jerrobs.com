---
pubDatetime: 2023-02-15T00:00:00.000+00:00
issue: strategy
version: "1.0 (unpublished)"
title: What is strategy?
subtitle: A multidisciplinary review
sectionNumber: STY.001
tags:
  - issue:strategy
  - topic:strategy/management-theory
  - topic:strategy/game-theory
  - topic:strategy/military
  - topic:strategy/software-engineering
description: >
  If you have many cooks, you can let them spoil the broth. Alternatively, you can orchestrate their talents to whip up a buffet for all to feast o
---

_Strategy_ is a dangerous term - physically due to its root in military planning, but also conceptionally since its wide use in management and planning theory made it even become part of everyday language.

it’s important to distinguish the abstract concept of strategy and concrete manifestations of strategy, example given when treatment states importance of forming coalitions for winning the battle then this is concrete strategy does not contribute to the objective of this article: do you understand what strategy is. fetuses on business strategy completely fallen short to this respect.

## Strategy in Military and politics

The word _strategy_ has its root in the Greek for the officer rank of a general, _strategos_. It was used as early as in Ancient Greece and is still employed in the modern Hellenic Army.

The oldest known military treatise is "The Art of War," by Chinese Sun Tzu written in around 500 B.C. It comprises hundreds of rules and recommendations. One of which is the distinction between strategy and tactics:

> All men can see the tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved.
> <cite><bib-ref cite-key="suntzu__2004__kunst" locator="Chapter VI, 27"/></cite>

> Thus it is that in war the victorious strategist only seeks battle after the victory has been won, whereas he who is destined to defeat first fights and afterwards looks for victory.
> <cite><bib-ref cite-key="suntzu__2004__kunst" locator="Chapter IV, 15"/></cite>

While Sun Tzu called for the use of minimum force with a greater emphasis on cunning, the father of Western modern strategic study, Carl von Clausewitz, recommended the use of maximum force whenever possible.

According to Clausewitz military strategy is

> the employment of battles to gain the end of war.
> <cite><bib-ref cite-key="clausewitz__1832__vom" locator=""/></cite>

> Die Kriegsführung nun ist also die Anordnung und Führung des Kampfes. Wäre dieser Kampf ein einzelner Akt, so würde kein Grund zu einer weiteren Einteilung sein; allein der Kampf besteht aus einer mehr oder weniger groBen Zahl einzelner, in sich geschlossener Akte, die wir Gefechte nennen [...] und die neue Einheiten bilden. Daraus entspringt nun die ganz verschiedene Tätigkeit, diese Gefechte in sich anzuordnen und zu führen und sie unter sich zum Zweck des Krieges zu verbinden. Das eine ist die Taktik, das andere die Strategie genannt worden. [...] Es ist also nach unserer Einteilung die Taktik die Lehre vom Gebrauch der Streitkräfte im Gefecht, die Strategie die Lehre vom Gebrauch der Gefechte zum Zweck des Krieges.
> <cite><bib-ref cite-key="clausewitz__1832__vom" locator="Zweites Buch, Erstes Kapitel"/></cite>

> [W]ar is not an exercise of the will directed at inanimate matter, as is the case with the mechanical arts, or at matter which is animate but passive and yielding, as is the case with the human mind and emotions in the fine arts. In war, the will is directed at an animate object that reacts.
> <cite><bib-ref cite-key="clausewitz__1832__vom" locator="Zweites Buch, Erstes Kapitel"/></cite>

## Management Theory

### Porter

Strategy is the set of long term choices that organisation makes to distinguish itself from competitors.

Strategy defines a company’s distinctive approach to competing, and the competitive advantages on which it will be based.

Strategy is not:

- Strategy is different from aspirations
  - <del>Our strategy is to be number 1 in our field / industry</del>
  - <del>Our strategy is to grow</del>
- Strategy is more than particular actions
  - <del>Our strategy is to merge</del>
  - <del>Our strategy is to cut costs</del>
- Strategy is not the same as mission / values
  - <del>Out strategy is to save our customers and communities while meeting the highest standards of integrity</del>
- Strategy is not operational excellence

Strategy is ...

- ... about unique value proposition
- ... about choice (what to do and what not to)
- ... about tradeoffs

#### Five forces

In 1979, Porter identified five forces to be considered when analysing competition in a particular industry and thus to be considered when developing a strategic response <bib-ref cite-key="porter__1979__what" /> <bib-ref cite-key="porter__2008__five" />.

- Threat of new entrants
- Bargaining power of suppliers
- Bargaining power of buyers
- Threat of substitute products or services
- Rivalry among existing competitors

#### Three generic strategies

In 1985, Porter introduced the concept of _generic strategies_

- The Cost Leadership Strategy
- The Differentiation Strategy
- The Focus Strategy

---

<bib-ref cite-key="mintzberg__1978__patterns" />

## Game Theory

The game is simply the totality of the rules which describe it. Every particular instance at which the game is played – in a particular way – from beginning to end, is a play. Elements of a game are moves which are occasions of choice between various alternatives, to be made either by one of the players, or by some device subject to chance, under conditions precisely prescribed by the rules of the game. The specific alternative chosen in a concrete instance i.e. in a concrete play is the choice. Thus the moves are related to the choices in the same way as the game is to the play. The game consists
of a sequence of moves, and the play of a sequence of choices. 2

> Imagine now that each player _k_ = 1, ... , n, instead of making each decision as the necessity for it arises, makes up his mind in advance for all possible contingencies; i. @ e. that the player _k_ begins to play with a complete plan: a plan which specifies what choices he will make in every possible situation, for every possible actual information which he may possess at that moment in conformity with the pattern of information which the rules of the game provide for him for that case. We call such a plan a _strategy_.
> <cite><bib-ref cite-key="vonneumannetal__1953__theory" locator="p. 79"/></cite>

## Strategy in software engineering

Closely related to the strategy concept in game theory is the _strategy design pattern_ in software engineering. Design patterns are reusable templates for solving general problems, introduced by architect Christopher Alexander (<bib-ref cite-key="alexanderetal__1977__pattern" />) and first applied to software engineering in 1994 (<bib-ref cite-key="gammaetal__1994__design" />).

The strategy pattern can be used when different algorithms are available to solve a problem. Instead of hard-coding a single algorithm directly, the code receives instructions at runtime as to which algorithm from a family of algorithms to use.

Gamma et al. illustrate the strategy pattern with the line breaking problem. To break a long string into lines, one has a couple of different algorithms to choose from: The simplest is one that greedily fills line after line with as many words as possible; more sophisticated is the Knuth-Plaas method used in the typesetting software TeX, which minimizes the variation in line lengths per paragraph (<bib-ref cite-key="knuthetal__1981__breaking" />). In Adobe InDesign, the user can choose between the two strategies at runtime.

## Summary

<StrategyAspects :data="$page.frontmatter.aspects" />

#

aspects:
aspects:
hierarchical**top-level:
label: top level
hierarchical**above-tactics:
label: above tactics
temporal**long-term:
label: long-term
plan:
label: plan
choice:
label: choice
autonomous-opponents:
label: autonomous opponents
autonomous-allies:
label: autonomous allies
narrative:
label: narrative
limited-resources:
label: limited resources
entries: - source: suntzu**2008**sun
author: Sun Tzu
year: 500 BC
domain: military/politics
aspects:
hierarchical**above-tactics: true
top-level: true
choice: true - source: clausewitz**1832**vom
author: von Clausewitz
year: 1832
domain: military/politics
aspects:
strategy-vs-tactics: true
hierarchical**top-level: true
autonomous-opponents: true - source: freedman**2013**strategy
author: Freedman
year: 2013
domain: military/politics
aspects:
plan: false
autonomous-opponents: true
narrative: true - source: vonneumannetal**1953**theory
domain: game theory
author: von Neumann, Morgenstern
year: 1943
aspects:
choice: true
plan: true
autonomous-allies: true
autonomous-opponents: true - source: gammaetal**1994**design
author: Gamma et al
year: 1994
domain: software pattern
aspects:
choice: true
plan: true - source: muller-stewensetal**2018**strategie
author: Gabler
year: 2018
domain: business
aspects:
temporal**long-term: true
plan: true - source: porter**1979**what
domain: business
author: Porter
year: 1979
aspects:
hierarchical**top-level: false
temporal**long-term: true
plan: true
choice: true
