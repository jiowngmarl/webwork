<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, i) in boardList" :key="board.id" @click="goToDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
          <td>{{ board.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "/api/board";
export default{

  data() {
    return {
      boardList : []
    }
  },
  methods : {
    fetchList() {
      axios.get("").then(response => this.boardList = response.data);
    },
    goToDetail(id) {
      // query: ?id =1     param: boardInfo/1 두개 선택해서 사용하기
      this.$router.push({ path: "/boardinfo", query: {id: id}});
    },
  },
  mounted() {
    this.fetchList();
  }
}

</script>
<style scoped>
table * {
  text-align: center;
}
</style>









