<template>
  <div>
    <h1>Список постов</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    axios
      .get('http://vseverske.ru/blog/api/posts')
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }
};
</script>