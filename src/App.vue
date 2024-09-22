<template>
  <div id="app" :class="{ dark: isDarkMode }">
    <button @click="toggleDarkMode" class="theme-toggle-button">
      {{ isDarkMode ? 'Светлая тема' : 'Темная тема' }}
    </button>

    <div v-if="$route.path === '/'">
      <HeroSection :isDarkMode="isDarkMode" />
      <SkillsSection :isDarkMode="isDarkMode" />
      <LastPostSection :isDarkMode="isDarkMode" />
      <randomdogAPI :isDarkMode="isDarkMode" />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import LastPostSection from './components/LastPostSection.vue';
import randomdogAPI from './components/randomdogAPI.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    SkillsSection,
    LastPostSection,
    randomdogAPI,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style lang="scss">

body, html {
  font-family: Rubik;
}
#app {
  transition: background-color 0.3s, color 0.3s;
}

.theme-toggle-button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #6e38f7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: rubik;
  &:hover {
    background-color: #5a2ecc;
  }
}

.dark {
  background-color: #121212;
  color: #ffffff;

  .theme-toggle-button {
    background-color: #ffffff;
    color: #121212;

    &:hover {
      background-color: #dddddd;
    }
  }
}
</style>
