<template>
  <div id="app">
    <h1 class="dogname">Random Dog Images</h1>
    <button @click="fetchDogImage" class="fetchDogbutton">Get Random Dog Image</button>
    <div v-if="dogImage">
      <img :src="dogImage" alt="Random Dog" class="dog-image" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dogImage: null,
    };
  },
  methods: {
    async fetchDogImage() {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        this.dogImage = response.data.message;
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

.dogname{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1400px;
  height: 83px;
  color: inherit;
  font-size: 36px;
  font-weight: 500;
  line-height: 43px;
  text-align: center;
}

.dog-image {
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  margin-top: 20px;
}
.fetchDogbutton{
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

</style>