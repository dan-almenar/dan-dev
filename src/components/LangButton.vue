<template>
    <div class="container">
        <button class="lang-btn">{{ language }}</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'LangButton',
    computed: {
        ...mapState(['language'])
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
