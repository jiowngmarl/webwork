<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col"class="text-center table-primary">작성번호 : </th>
            <td scope="col" class="text-center">{{ book.id }}</td>
            <th scope="col" class="text-center table-primary">제목 : </th>
            <td scope="col" class="text-center">{{ book.bookName }}</td>
            <th scope="col" class="text-center table-primary">저자 : </th>
            <td scope="col" class="text-center">{{ book.author }}</td>
            <th scope="col" class="text-center table-primary">가격 : </th>
            <td scope="col" class="text-center">{{ book.price }}</td>
          </tr>
            <th scope="col" class="text-center table-primary">내용 : </th>
            <td scope="col" class="text-center">{{ book.bookInfo }}</td>
          <tr>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; "></pre>
            </td>
          </tr>
          <tr>
            <button class="btn btn-xs btn-info" @click="goUpdateBook(book.id)">수정</button>
            <button class="btn btn-xs btn-warining" @click="goBookList()">목록</button>
          </tr>
        </tbody>
      </table>
    </div>
</div>

</template>
<script>
import axios from "axios";

export default{
  data() {
    return{
      book : {}
    }
  },
  methods : {
    fetchList() {
      const id = this.$route.query.id;
      axios.get(`/api/book/${id}`).then(response => this.book = response.data[0])
    },
    goBookList() {
      this.$router.push({ path : "/bookList" })
    },
    goUpdateBook(id) {
      this.$router.push({ path : "/bookForm", query: {id: id}})
    }
  },
  mounted() {
    this.fetchList();
  }
}
</script>