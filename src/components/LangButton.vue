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
    color: snow;
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

@media (max-width: 500px){
    .lang-btn {
        right: 20px;
        font-size: .8rem;
        height: 1.7rem;
        width: 4.2rem;
    }
    .lang-btn:hover{
        height: 1.9rem;
        width: 4.4rem;
    }
}

</style>
