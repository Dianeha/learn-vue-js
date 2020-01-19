<template>
  <div>
      <!-- 3. 등록한 컴포넌트를 컴포넌트 태그로 불러와 사용하기 -->
      <!-- <AppHeader/>  -->
      <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
      <!-- <app-header v-on:하위 컴포넌트에서 발생한 이벤트 이름="상위 컴포넌트에서 동작시킬 메서드 이름"></app-header> -->
      <app-header 
        v-bind:propsdata="str"
        v-on:renew="renewStr"></app-header>
      <!-- {{ str }} from myApp.vue -->
  </div>
</template>

<script>
// ■ AppHeader 컴포넌트 불러와 쓰기
// 1. import 하기
import AppHeader from './components/AppHeader.vue';


// ■ 싱글 파일 컴포넌트에서 data 쓰기
// 원래는 이런식이었다.
// new Vue({
//     data: {
//         str: 'hi'
//     }
// })

// cli를 통해서 .vue 파일로 오면 그 컴포넌트를 재사용하겠다는 뜻이므로
// 여러개의 컴포넌트에서 동일한 값을 참조하면 안되기 때문에
// data에서 function을 쓰고 return을 사용해야 한다.

export default {
    components: {
        // AppHeader // 2. 컴포넌트 등록하기(ES6버전)
        'app-header': AppHeader
    },
    data: function() {
        return {
            str: '나는 myApp(상위 컴포넌트)에 등록된 data지롱'
        }
    },
    methods: {
        renewStr: function() {
            this.str = 'AppHeader에서 event가 발생해서 myApp에서 받았어!';
        }
    },
}
</script>

<style>

</style>
