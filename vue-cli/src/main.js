import Vue from 'vue'
// import App from './App.vue'
import myApp from './myApp.vue'

Vue.config.productionTip = false

// 만약 이렇게 생각하면 쉬울 것이다.
// 지금까지 해온 것처럼 컴포넌트를 밖에 정의하고 아래에 부착하는 방식
// var App = {
//   template: '<div>app</div>'
// }
// 지금은 inport로 컴포넌트 불러와서 뷰인스턴스에 등록한 것

new Vue({
  render: h => h(myApp), // components 부분
}).$mount('#app') // el 등록 부분

// new Vue({
//   el: '#app',
//   components: {
//     'app': App
//   },
// }) 
// 위 아래 같다.
