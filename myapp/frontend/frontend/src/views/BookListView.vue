<template>
  <div class="container">
    <table class="table">
  <thead class="table-light">
    <tr>
      <th scope="col">NO.</th>
      <th scope="col">도서명</th>
      <th scope="col">도서소개</th>
      <th scope="col">저자</th>
      <th scope="col">도서가격</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="book in bookList" :key="book.id" @click="goBookDetail(book.id)" >
      <th scope="row">{{ book.id }}</th>
      <td>{{ book.bookName }}</td>
      <td>{{ book.bookInfo }}</td>
      <td>{{ book.author }}</td>
      <td>{{ book.price }}</td>
    </tr>
    </tbody>
    </table>
    <button class="btn btn-xs btn-info" @click="insertBookList()">등록</button>
  </div>
</template>
<script>
import axios from "axios";
//axios.default.baseURL = "/api/book"
export default{

  data() {
    return{
      bookList : []
    }
  },
  methods : {
    fetchList() {
      axios.get("/api/book").then(response => this.bookList = response.data)
    },
    goBookDetail(id) {
      this.$router.push({ path: "/bookInfo", query: {id: id}})
    },
    insertBookList() {
      this.$router.push({ path : "/insertBook"})
    }
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