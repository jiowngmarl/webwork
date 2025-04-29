<script>
export default {
      data(){
        return{
          targetDt : '20250423',
          movies : []
        }
      },
      methods : {
        getMovie() {
        fetch('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=' + this.targetDt)
        .then(response => response.json())
        .then(response => this.movies = response.boxOfficeResult.dailyBoxOfficeList)
        }
      },
      mounted() {
        this.getMovie();
      }
    }
</script>

<template>
<input v-model="targetDt"><button @click="getMovie">조회</button>
    <table>
      <tr v-for="movie in movies">
        <td>{{movie.rank}}</td>
        <td>{{movie.movieNm}}</td>
        <td>{{movie.salesShare}}</td>
      </tr>
    </table>
</template>

<style></style>