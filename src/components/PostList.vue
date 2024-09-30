<template>
  <div>
    <h1>Список постов</h1>
    <p v-if="loading">Загрузка постов...</p>
    <ul v-else-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'single-post', params: { id: post.id }}">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>Нет постов для отображения.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      loading: true 
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        console.log("Запрос к API...");
        const response = await axios.get('http://vseverske.ru/blog/api/posts');
        console.log("Полученные данные:", response.data); 
        this.posts = response.data.data; 
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      } finally {
        this.loading = false; 
      }
    }
  }
};
</script>

<style scoped>

ul {
  list-style-type: none; 
  padding: 0; 
}

li {
  margin: 10px 0; 
}

a {
  text-decoration: none; 
  color: #0e643d; 
}

a:hover {
  text-decoration: underline; 
}
</style>
