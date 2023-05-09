<template>
  <div class="table-container">
    <table class="md" id="strategy-aspects">
      <thead>
        <tr>
          <th class="md">
            <div>Author</div>
          </th>
          <th class="md">
            <div>year</div>
          </th>
          <th class="md">
            <div>domain</div>
          </th>
          <th class="md aspect" v-for="aspect in aspects.aspects">
            <div class="rotate">{{ aspect.label }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in aspects.entries">
          <td class="md">
            <div v-html="entry.author"></div>
          </td>
          <td class="md">
            <div v-html="entry.year"></div>
          </td>
          <td class="md">
            <div v-html="entry.domain"></div>
          </td>
          <td class="md aspect" v-for="aspect in Object.keys(aspects.aspects)">
            <div
              v-bind:class="{
                'icon-true': entry.aspects[aspect] + '' === 'true',
                'icon-false': entry.aspects[aspect] + '' === 'false',
              }"
            >
              &nbsp;
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const aspects = ref({
  aspects: {
    "hierarchical__top-level": {
      label: "top level",
    },
    "hierarchical__above-tactics": {
      label: "above tactics",
    },
    "temporal__long-term": {
      label: "long-term",
    },
    plan: {
      label: "plan",
    },
    choice: {
      label: "choice",
    },
    "autonomous-opponents": {
      label: "autonomous opponents",
    },
    "autonomous-allies": {
      label: "autonomous allies",
    },
    narrative: {
      label: "narrative",
    },
    "limited-resources": {
      label: "limited resources",
    },
  },
  entries: [
    {
      source: "suntzu__2008__sun",
      author: "Sun&nbsp;Tzu",
      year: "500&nbsp;BC",
      domain: "military/politics",
      aspects: {
        "hierarchical__above-tactics": true,
        "top-level": true,
        choice: true,
      },
    },
    {
      source: "clausewitz__1832__vom",
      author: "von&nbsp;Clausewitz",
      year: 1832,
      domain: "military/politics",
      aspects: {
        "strategy-vs-tactics": true,
        "hierarchical__top-level": true,
        "autonomous-opponents": true,
      },
    },
    {
      source: "freedman__2013__strategy",
      author: "Freedman",
      year: 2013,
      domain: "military/politics",
      aspects: {
        plan: false,
        "autonomous-opponents": true,
        narrative: true,
      },
    },
    {
      source: "vonneumannetal__1953__theory",
      domain: "game theory",
      author: "von&nbsp;Neumann&nbsp;et&nbsp;al.",
      year: 1943,
      aspects: {
        choice: true,
        plan: true,
        "autonomous-allies": true,
        "autonomous-opponents": true,
      },
    },
    {
      source: "gammaetal__1994__design",
      author: "Gamma et al.",
      year: 1994,
      domain: "software&nbsp;engineering",
      aspects: {
        choice: true,
        plan: true,
      },
    },
    {
      source: "muller-stewensetal__2018__strategie",
      author: "Gabler",
      year: 2018,
      domain: "business",
      aspects: {
        "temporal__long-term": true,
        plan: true,
      },
    },
    {
      source: "porter__1979__what",
      domain: "business",
      author: "Porter",
      year: 1979,
      aspects: {
        "hierarchical__top-level": false,
        "temporal__long-term": true,
        plan: true,
        choice: true,
      },
    },
  ],
})
</script>
