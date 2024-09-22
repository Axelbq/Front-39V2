<template>
  <section class="LastPostSection" :class="{ 'dark-text': isDarkMode }">
    <h1 class="LastPost-title">Last posts</h1>
    <div class="LastPost-baza">
      <h3 class="AllPost">All Posts</h3>
      <div class="post" v-for="(post, index) in posts" :key="index">
        <div class="post-image">
          <img src="@/assets/picture.jpg" alt="Post Image" />
        </div>
        <div class="post-content">
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-description">{{ post.description }}</p>
          <div class="post-footer">
            <span class="post-date">{{ post.date }}</span>
            <a href="#" class="read-more">Read more</a>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <p>Copyright © 2023. All rights reserved.</p>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'LastPostSection',
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      posts: [
        {
          title: "There are many reasons to get down",
          description: "The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.",
          date: "10 Oct 21",
        },
        {
          title: "Choosing The Right Path",
          description: "Although this is well intentioned and the goal certainly is to reduce the quantity of these bothersome thoughts, the technique is inherently flawed. Requiring the individual to remember what not to think of infers that they have already thought it. It is akin to telling them to not think of a blue banana.",
          date: "58 Oct 20",
        },
        {
          title: "Start your journey here",
          description: "The only moment, the only life we have is in the NOW. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we go on holidays is not here yet.",
          date: "29 Oct 18",
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.LastPostSection {
  padding: 0 50px;

  .LastPost-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1400px;
    max-height: auto;
    color: #363940;
    font-size: 36px;
    font-weight: 500;
    line-height: 43px;
    text-align: center;
  }

  .LastPost-baza {
    .AllPost {
      display: flex;
      align-items: right;
      width: 80px;
      height: 20px;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 2px;
      color: #6e38f7;
      margin-left: 1090px;
    }

    .post {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 940px;
      height: 270px;
      margin: 100px 230px;

      .post-image img {
        height: auto;
        display: block;
        object-fit: cover;
        width: 440px;
        height: 270px;
      }

      .read-more {
        color: #6a3bff;
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 2px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      .post-content {
        flex: 1;
        margin-left: 20px;
        padding-top: 100px;

        .post-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          margin-top: -80px;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          color: inherit;
        }

        .post-description {
          font-size: 1rem;
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          color: inherit;
        }

        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 95px;

          .post-date {
            color: inherit;
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 1400px;
    height: 64px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #95a1bb;
  }

  &.dark-text {
    color: whitesmoke !important;

    .LastPost-title,
    .AllPost,
    .post-title,
    .post-description,
    .post-date,
    .read-more,
    .footer {
      color: whitesmoke;
    }
  }
}
</style>
