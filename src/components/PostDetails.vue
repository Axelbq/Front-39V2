<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {}
    };
  },
  mounted() {
    const postId = this.$route.params.id;
    axios
      .get(`http://vseverske.ru/blog/api/post/${postId}`)
      .then(response => {
        this.post = response.data;
      })
      .catch(error => {
        console.error('Ошибка при получении поста:', error);
      });
  }
};
</script>