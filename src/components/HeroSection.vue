<template>
  <section class="hero-section" :class="{ 'dark-theme': isDarkMode }">
    <div class="container">
      <div class="header-title">
        <div class="menu-icon">
          <img src="@/assets/Logo.png" alt="Menu Icon" />
        </div>
        <nav class="nav-links">
          <a href="#about">About</a>
          <router-link to="/posts">Posts</router-link>
          <router-link to="/contact">Contact Us</router-link>
        </nav>
      </div>
    </div>
    <div class="content">
      <div class="maintext">
        <h1 class="title">I am Kotik</h1>
        <p class="subtitle">Frontend-developer</p>
        <p class="scroll-to-more">Scroll to more</p>
      </div>
      <div class="image-placeholder">
        <img src="@/assets/picture.jpg" alt="Placeholder Image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  padding: 0 50px;
  width: 1400px;
  max-height: auto;
  transition: background-color 0.3s, color 0.3s;
}

.dark-theme {
  background-color: #121212;
  color: #ffffff;
}

.header-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1400px;
  height: 76px;
}

.menu-icon {
  object-fit: cover;
  width: 36px;
  height: 36px;
  margin: 0 230px;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  margin: 230px;
  width: 230px;
  height: 20px;

  a {
    color: #6e38f7;
    text-decoration: none;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 2px;

    &:hover {
      text-decoration: underline;
    }
  }
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1400px;
  height: 724px;
}

.maintext {
  display: flex;
  align-items: left;
  flex-direction: column;
  margin: 0 230px;
  height: 400px;
}

.title {
  width: 120%;
  margin-bottom: 215px;
  font-size: 58px;
  font-weight: 500;
  line-height: 68px;
  color: inherit;
}

.subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: inherit;
  margin-top: -106px;
}

.scroll-to-more {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 2px;
  color: #6e38f7;
  margin-top: 213px;
}

.image-placeholder {
  max-width: 100%;
  height: auto;
  margin-right: 230px;

  img {
    width: 481px;
    height: 635px;
    object-fit: cover;
  }
}
</style>