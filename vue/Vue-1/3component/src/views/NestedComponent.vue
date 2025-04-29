<template>
  <div>
    <PageTitle v-bind:title="title"></PageTitle>
    <BlogPost :likes="50" :isPublished="true" :commentIds="[100,103,200]"></BlogPost>
    <BlogPost v-bind="post"></BlogPost>
    <hr>
    <BlogPost v-for="post in posts" v-bind="post"></BlogPost>
    <!-- <BlogPost :title="post.title" :likes="post.likes" :isPublished="post.isShow" :commentIds="post.commentIds"></BlogPost> -->
  </div>
</template>
<script>
import PageTitle from '@/components/PageTitle.vue'; // ..(상대경로) , @(절대경로)
import BlogPost from'@/components/BlogPost.vue';
export default {
  components : {PageTitle, BlogPost}, // 컴포넌트 등록
  data() {
    return { title : '동적페이지이름',
            posts : [ {isPublished : false, title : "블로그1"},
                      {isPublished : true, title : "블로그2"},
                      {isPublished : false, title : "블로그3"}
            ],
             post : {
              commentIds : [10,11,12],
              isShow : false,
              likes : 100,
              title: "vue블로그"}
    }
  }
}
</script>