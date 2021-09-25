<template>
    <div class="container">
        <button
        @click="switchLanguage()"
        class="lang-btn">{{ language }}
        </button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    inject: ['mq'],
    name: 'LangButton',
    computed: {
        ...mapState(['language'])
    },
    methods: {
        ...mapMutations(['switchLanguage'])
    }
}
</script>

<style scoped>
.container {
    position: relative;
    margin: 0px 20px;
    height: 50px;
}
.lang-btn {
    position: absolute;
    right: 50px;
    background-color: blue;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
    height: 2.4rem;
    width: 6rem;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}

.lang-btn:hover {
    height: 2.6rem;
    width: 7.3rem;
}

</style>
