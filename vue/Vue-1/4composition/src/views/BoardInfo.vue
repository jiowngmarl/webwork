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
<script setup>
import axios from "axios";
import {ref} from 'vue';
import { useRoute, useRouter} from "vue-router";

//  import CommentComp from "@/components/CommentComp.vue"

const router = useRouter();
const route = useRoute();
const boardInfo = ref([])

const getBoardInfo = async()=>{
  let result = await axios.get(`/api/comment`);
  boardInfo.value = result.data;
}

function goToListForm() {
  router.push('/boardList')
}



</script>
