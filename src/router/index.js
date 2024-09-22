import Vue from 'vue';
import Router from 'vue-router'; 

import ContactUs from '@/components/ContactUs.vue';
import PostsAPI from '@/components/PostsAPI.vue';
import PostDetails from '@/components/PostDetails.vue';

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
      name: 'PostsAPI',
      component: PostsAPI
    },
    {
      path: '/post/:id',
      name: 'PostDetails',
      component: PostDetails
    }
  ]
});
