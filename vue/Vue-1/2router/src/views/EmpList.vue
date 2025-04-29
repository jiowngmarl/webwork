<script>
import axios from 'axios'
export default {
  data(){
    return { emp : [] }
  },
  mounted() {
    axios.get("/dmpdata.json")
    .then(res=>this.emps = res.data)
  }
}
</script>

<template>
  <table>
    <tr>
      <td></td>
    </tr>
  </table>
</template>