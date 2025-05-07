<template>
  email <input v-model="email">
  pw <input v-model="pw">
  <button type="button" @click="loginHandler">로그인</button>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email : "",
      pw : "",
    };
  },
  methods : {
    async loginHandler() {
      //this.$store.commit('increment');
      
      const data = {email : this.email, pw : this.pw};
      const url = "/api/users/login"
      await axios.post(url, data) // 밑에의 축약형
            //  axios({url:'', method:'', data:{}})
            const result = await axios.post(url,data)
            alert(result.data.code)
            //this.$store.commit('changeEmail', {email:this.email});
            this.$store.dispatch('login', {email:this.email})
            this.$router.push({path : "/"});
    }
  }
}
</script>