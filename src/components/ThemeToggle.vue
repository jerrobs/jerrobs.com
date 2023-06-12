<template>
  <button
    @click="toggleTheme"
    :title="
      activeTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    "
  >
    <SunIcon v-if="activeTheme === 'dark'" />
    <MoonIcon v-else />
  </button>
</template>

<script lang="ts">
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid/index.js"

export default {
  components: {
    SunIcon,
    MoonIcon,
  },
  data() {
    return {
      // OS color mode
      systemTheme: null,
      // Whatever’s saved in localStorage, if anything
      savedTheme: null,
      // Whatever our UI is reflecting
      activeTheme: null,
    }
  },
  mounted() {
    this.savedTheme = localStorage.getItem("theme")

    this.systemTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"

    // Honor the saved preference or system preference in that order
    this.activeTheme = this.savedTheme ?? this.systemTheme

    // Listen for system-level color mode changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", event => {
        const newColorScheme = event.matches ? "dark" : "light"
        // Keep system preference up to date
        this.systemTheme = newColorScheme

        if (!this.savedTheme) {
          // If we don’t have a saved theme and this one is new, update!
          this.activeTheme = this.systemTheme
          this.updateRootClass()
        }
      })
  },
  methods: {
    toggleTheme() {
      this.activeTheme = this.activeTheme === "light" ? "dark" : "light"

      if (this.systemTheme !== this.activeTheme) {
        // Save explicit setting to local storage
        localStorage.setItem("theme", this.activeTheme)
      } else {
        // Remove saved preference if it matches system default
        localStorage.removeItem("theme")
      }

      this.updateRootClass()
    },
    updateRootClass() {
      if (this.activeTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    },
  },
}
</script>
