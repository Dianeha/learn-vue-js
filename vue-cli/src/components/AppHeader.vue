<template>
    <header>
        <!-- 아래 속성에 정의된 프롭스데이터를 여기에 바인딩해서 보여줄것임 -->
        <h1>{{ propsdata }}</h1>

        <button v-on:click="sendEvent">send</button>
    </header>
</template>

<script>
export default {
    // myApp에 가보면 상위 컴포넌트에서 가져온 데이터를 props로 바인딩해 내려받는 코드가 있을 것임
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
            // 여기서 정의한 이벤트가 상위 컴포넌트인 myApp으로 전달될 것
        }
    },
};
</script>

<style>
</style>
