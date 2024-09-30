import Vue from 'vue';
import Router from 'vue-router'; 

import ContactUs from '@/components/ContactUs.vue';
import PostList from '@/components/PostList.vue'; 
import SinglePost from '@/components/SinglePost.vue'; 

Vue.use(Router);

export default new Router({
  mode: 'history', 
  routes: [
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/posts',
      name: 'post-list', 
      component: PostList
    },
    {
      path: '/post/:id',
      name: 'single-post', 
      component: SinglePost
    }
  ]
});
