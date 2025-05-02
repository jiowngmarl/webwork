<template>
  댓글리스트
  <table>
    <thead>
      <tr>
        <td>번호</td>
        <td>작성자</td>
        <td>내용</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="comment in commentList">
        <td>{{ comment.content }}</td>    
        <td>{{ comment.content }}</td>
        <td>{{ comment.content }}</td>
      </tr>
    </tbody>
  </table>  
</template>
<script>
import axios  from 'axios';

export default {
  props : ["bid"],
  data() {
    return {
      commentList:[]
    }
  },
  methods : {
    async getCommentInfo() {
      let comment = await axios.get(`http://localhost:3000/comment/${this.bid}`);
      this.commentList = comment.data;
    },
  },
  mounted() {this.getCommentInfo();},
  watch : {}
}

</script>
<style>

</style>