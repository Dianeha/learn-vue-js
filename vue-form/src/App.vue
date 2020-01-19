<template>
  <!-- form 의 기본 동작이 새로고침이다. 
  보통 사용자로부터 받은 값을 제출하고 다음 페이지로 넘어가는 특정이 있기 때문.
  submit해보면 화면이 깜빡하면서 새로고침하는 것을 볼 수 있다. -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <!-- v-model을 아래와 같이 쓰면
      input에 어떤 값이 들어가면 그때마다 username 데이터가 갱신되고
      username 데이터가 갱신될때마다 브라우저 input 박스에 보여지는 값도 갱신됨. 양방향 데이터 바인딩 -->
      <input id="username" type="text" v-model="username">
    </div>

    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>

    <!-- 버튼 타입이 submit이면 form태그 내의 정보들이 전달됨 -->
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
    // submitForm: function(event) {
      // form의 이동 즉, 새로고침 막는 방법(vanilla.js와 jquery에서 폼 제한하던 방식이었음)
      // event.preventDefault(); => vue를 사용할때는 <form v-on:submit.prevent="submitForm">
      // 처럼 .prevent를 사용한다. evnetmodifier다
      
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password,
      }
      
      axios.post(url, data)
        // then catch 는 promise 구문
        .then(function(response) {
          console.log(response.data.id);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
};
</script>

<style></style>
