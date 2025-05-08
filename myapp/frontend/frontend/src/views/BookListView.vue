<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>NO.</th>
          <th>도서명</th>
          <th>도서소개</th>
          <th>저자</th>
          <th>도서가격</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book,i) in bookList" :key="book.id" @click="goBookDetail(book.id)" >
          <td>{{ book.id }}</td>
          <td>{{ book.bookName }}</td>
          <td>{{ book.bookInfo }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.price }}</td>
        </tr>
      </tbody>
    </table>
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