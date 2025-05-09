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

</script>