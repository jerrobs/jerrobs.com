import type { SocialObjects } from "./types"

export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "Dirk Rathje",
  desc: "Journal of Erratic Observations",
  title: "J.Err.Obs.",

  lightAndDarkMode: true,
  articlesPerPage: 10,
  issuesPerPage: 5,
  referencesPerPage: 50,
}

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
}

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jerrobs",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:jerrobs@dirk-rathje.de",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  // {
  //   name: "Twitter",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Twitter`,
  //   active: true,
  // },
]
