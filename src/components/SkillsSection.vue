<template>
  <section class="SkillsSection">
    <h1 class="SkillsTitle">Skills</h1>
    <div class="section" v-for="skill in skills" :key="skill.name">
      <button @click="toggleSection(skill.name)" class="toggle-button">
        {{ skill.name }}
        <span>{{ isSectionVisible(skill.name) ? '-' : '+' }}</span>
      </button>
      <div v-if="isSectionVisible(skill.name)" class="content-box" :class="{ 'dark-box': isDarkMode, 'light-box': !isDarkMode }">
        <p :class="{ 'dark-text': isDarkMode, 'light-text': !isDarkMode }">{{ skill.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      skills: [
        { name: 'HTML', content: 'HTML content goes here...' },
        { name: 'CSS', content: 'CSS content goes here...' },
        { name: 'JavaScript', content: 'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place.' },
        { name: 'Vue', content: 'Vue content goes here...' }
      ],
      sectionsVisibility: {}
    };
  },
  methods: {
    toggleSection(section) {
      this.$set(this.sectionsVisibility, section, !this.sectionsVisibility[section]);
    },
    isSectionVisible(section) {
      return this.sectionsVisibility[section];
    }
  }
};
</script>

<style lang="scss" scoped>
.SkillsSection {
  padding: 0 50px;
}

.SkillsTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1400px;
  height: 83px;
  color: inherit;
  font-size: 36px;
  font-weight: 500;
  line-height: 43px;
}

.section {
  margin: 50px auto;
  max-width: 900px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
}

.toggle-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #6e38f7;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }

  span {
    font-size: 24px;
    color: #6e38f7;
  }
}

.content-box {
  display: flex;
  align-items: left;
  padding: 20px;
  font-size: 16px;
  line-height: 22px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dark-box {
  background-color: #121212;
}

.light-box {
  background-color: #f9f9f9;
}

.dark-text {
  color: whitesmoke;
}

.light-text {
  color: #333;
}
</style>