<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input v-model="boardInfo.id" type="text" id="no" readonly />

      <label for="title">제목</label>
      <input v-model="boardInfo.title" type="text" id="title" />

      <label for="writer">작성자</label>
      <input v-model="boardInfo.writer" type="text" id="writer" />

      <label for="content">내용</label>
      <textarea
        id="content"
        style="height: 200px"
        v-model="boardInfo.content"
      ></textarea>
      <div v-if="this.searchNo > 0">
        <label for="regdate">작성일자</label>
        <input v-bind="dateFormat" type="text" readonly />
      </div>
      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="saveBoard(boardInfo.id)"
      >
        저장
      </button>
    </form>
  </div>
</template>
<script>

import axios from "axios";

export default {
  data() {
    return {
      searchNo: "",
      boardInfo: {},
    };
  },
  created() {
    this.searchNo = this.$route.query.id || "";
    if(this. searchNo>0) {
      this.getBoardInfo();
    }
  },
  computed: {
    dateFormat() {
      // 날짜 포맷 date로 바꿔서 년도 달 일 로 나타나게 만들기 (미완성)
      this.boardInfo.created_date
    }
  },  
  methods : {
    async getBoardInfo() {
      let board = await axios.get(`http://localhost:3000/board/${this.searchNo}`);
      this.boardInfo = board.data[0];
    },
    async saveBoard(id) {
      const url = "http://localhost:3000/board";
      let param = {
        title: this.boardInfo.title,
        content: this.boardInfo.content,
        writer: this.boardInfo.writer,
      };
      //수정
      if(id > 0) {
        const result = await axios.put(`${url}/${id}`, param);
          alert("정상적으로 수정")
          this.$router.push({ path: "/boardList"});
       } else {
        //등록
        const result = await axios.post(url, param);
        alert("정상등록")
        this.$router.push({ path: "/boardList"})
       }
    }
  },
  mounted() {
    this.getBoardInfo();
  }
}


// import axios from "axios";
// axios.defaults.baseURL="http://localhost:3000/board";
// export default {
//   data() {
//     return {
//       searchNo : "",
//       board:{}
//     };
//   },
//   methods : {
//     async FormInfo() {
//       this.board = await axios.get("http://localhost:3000/board")
//       .then(response => this.board = response.data)
//     },
//     async saveInfo() {
//       this.board = await axios.get(`http://localhost:3000/board/${this.searchNo}`)
//       .then(response => this.board = response.data)
//     }
//   },
//   mounted() {
//     this.searchNo = this.$router.query.id;
//     if(this.searchNo>0) {
//       this.saveInfo();
//     } else {
//       this.FormInfo();
//     }
//   }
// }
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
