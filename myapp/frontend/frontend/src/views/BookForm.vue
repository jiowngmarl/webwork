<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No. {{ book.id }}</label>
      <input v-model="book.id" type="text"  readonly />

      <label for="title">제목</label>
      <input v-model="book.bookName" type="text"  />

      <label for="writer">작가</label>
      <input v-model="book.author"  type="text"  />

      <label for="content">내용</label>
      <textarea  style="height: 200px" v-model="book.bookInfo"></textarea>
      <button type="button" class="btn btn-xs btn-info" @click="saveBookList(book.id)">수정</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default{
  data() {
    return {
      book : {},
      id:"",
      bookName:"",
      author:"",
      bookInfo:""
    }
  },
  methods : {
    fetchList() {
      const id = this.$route.query.id;
      axios.get(`/api/book/${id}`).then(response => this.book = response.data[0])
    },
    async saveBookList(id) {
      const url = "http://localhost:3000/api/book"
      let param = {
        bookName : this.book.bookName,
        author : this.book.author,
        bookInfo : this.book.bookInfo
      };
      try {
      const result = await axios.put(`${url}/${id}`, param)
      alert("저장 완료");
      this.$router.push({ path : "/bookList" })
      } catch (e) {
        console.error(e)
        alert("저장 실패");
      }
    }
  },
  mounted() {
    this.fetchList();
  }
}
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
