// 싱글 파일 컴포넌트

// 기존방식
// var appHeader = {
//     template: '<div>Header</div>',
//     methods: {
//         addNum: function() {

//         }
//     },
// }


<template>
  <div>
    <!-- HTML -->
    <div>Header</div>
  </div>
</template>

<script>
    export default {
        // JS이면서 인스턴스 옵션(컴포넌트 안에 정의했던 것들 여기에 넣음)
        methods: {
            addNum: function() {

            }
        }
    }
</script>

<style>
/* CSS */
</style>