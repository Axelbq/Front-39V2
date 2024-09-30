<template>
  <div>
    <h1 v-if="!loading">{{ post.title }}</h1>
    <p v-if="!loading">{{ post.description }}</p>
    <p v-if="!loading"><strong>Дата создания:</strong> {{ post.created_at }}</p>
    <p v-if="!loading"><strong>Дата обновления:</strong> {{ post.updated_at }}</p>
    <p v-if="loading">Загрузка...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {},
      loading: true, 
    };
  },
  async created() {
    await this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const postId = this.$route.params.id; 
      try {
        console.log(`Запрос поста с ID: ${postId}`);
        const response = await axios.get(`http://vseverske.ru/blog/api/post/${postId}`);
        console.log("Полученные данные поста:", response.data); 
        this.post = response.data; 
      } catch (error) {
        console.error('Ошибка при получении поста:', error);
      } finally {
        this.loading = false; 
      }
    },
  },
};
</script>

