<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col"class="text-center table-primary">제목 :</th>
            <td scope="col">{{ boardInfo.title }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">{{ boardInfo.created_date }}</td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
          </tr>
            <th scope="col" class="text-center table-primary">내용 : </th>
            <td scope="col" class="text-center">{{ boardInfo.content }}</td>
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
            <td colspan="6" class="text-center">
              <button
                class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.id)">
                수정
              </button>
             <button class="btn btn-xs btn-warining"@click="goToListForm()">목록</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 댓글 -->
    <div class="row">
      <CommentComp v-if="boardInfo.id" :bid="boardInfo.id" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CommentComp from "@/components/CommentComp.vue"

export default {
  components:{CommentComp},
  data() {
    return {
      searchNo: "",
      bid:"",
      boardInfo: {},
 
    };
  },
  created() {
    this.searchNo = this.$route.query.id || "";
    if(this. searchNo>0) {
      this.getBoardInfo();
   
    }
  },
  methods : {
    async getBoardInfo() {
      let board = await axios.get(`http://localhost:3000/board/${this.searchNo}`);
      this.boardInfo = board.data[0];
    },

    async saveBoard(no) {
      const url = "http://localhost:3000/board";
      let param = {
        title: this.boardInfo.title,
        content: this.boardInfo.content,
        writer: this.boardInfo.writer,
      };
      //수정
      if(id > 0) {
        const result = await axios.put(`${url}/${no}`, param);
          alert("정상적으로 수정")
          this.$router.push({ path: "/boardList"});
       } else {
        //등록
        const result = await axios.post(url, param);
        alert("정상등록")
        this.$router.push({ path: "/boardList"})
       }
    },
    goToUpdateForm(id) {
      this.$router.push({ path: "/boardForm", query: {id: id}});
    },
    goToListForm(id) {
      this.$router.push({ path: "/boardList" });
    }
  },
  mounted() {
    this.getBoardInfo();
  }
}

</script>
