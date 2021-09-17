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
    display: grid;
    justify-items: end;
}
.lang-btn {
    background-color: blue;
    font-weight: bold;
    color: white;
    height: 2.3rem;
    width: 5rem;
    border: none;
    border-radius: 7px;
    cursor: pointer;
}

.lang-btn:hover {
    height: 2.5rem;
    width: 5.3rem;
}

</style>
