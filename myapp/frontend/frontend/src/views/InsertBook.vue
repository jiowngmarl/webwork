<template>
  <div class="container">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input  type="text" id="no" />

      <label for="title">제목</label>
      <input  type="text" id="title" />

      <label for="writer">작성자</label>
      <input  type="text" id="writer" />

      <label for="content">내용</label>
      <textarea
        id="content"
        style="height: 200px"
        
      ></textarea>
      <button
        type="button"
        class="btn btn-xs btn-info"
      >
        저장
      </button>
    </form>
  </div>
</template>
<script>


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