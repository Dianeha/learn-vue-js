<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <!-- 컴포넌트 태그 네이밍 컨벤션 종류 -->

    <!-- ■ <hello-world></hello-world> vscode는 스타일가이드에서 이것을 추천 -->
    <!-- <HelloWord></HelloWord> -->
    <!-- <HelloWord/>  -->

    <!-- ## 컴포넌트 태그는 두 단어 이상의 조합으로 설정하는데 그 이유는
    한단어(ex. main)로 할 경우 HTML 표준태그인지 컴포넌트 태그인지 브라우저는 분별할 수 없다. -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
    // ■ 'hello-world': HelloWorld, 원래는 이렇게. 컴포넌트 이름: 컴포넌트 내용
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
