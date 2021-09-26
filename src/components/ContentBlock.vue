<template>
    <div class="container">      
        <div :key="card.id" v-for="card in cards">
            <h3
                      
            @click="getCurrentCard(getCard(card.text)), switchShowContent(getCard(card.text))" 
            class='card-title'>{{ card.text }}
            </h3>
        </div>
    </div> 
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'ContentBlock',
    props: {
        cards: {
            type: Array,
        },
    },
    computed: {
        ...mapState(['language', 'showExpand', 'showContent']),
    },
    methods: {
        ...mapMutations(['showExpandSpan', 'getCurrentCard', 'switchShowContent']),
        getCard(text){
            return text
        },
    }
}
</script>

<style scoped>
.container {
    display: grid;
    justify-items: left;
    grid-template-columns: repeat(3, 1fr);
}

.card-title {
    max-height: 150px;
    color: blue;
    font-size: 2rem;
    padding: 10px 0px;
    align-self: center;
    transition: .7s;
}

.card-title:hover {
    border-top: 5px solid blue;
    border-bottom: 5px solid blue;
    color: snow;
    font-size: 2.5rem;
}

@media (max-width: 480px) {
    .container{
        position: absolute;
        left: 0px;
        margin: 0px 50px;
        margin-bottom: 30px;
        gap: 15px;
    }

    .card-title {
        font-size: 1.2rem;
        align-self: start;
    }

    .card-title:hover {
        border-top: 3px solid blue;
        border-bottom: 3px solid blue;
        font-size: 1.4rem;
    }
}

</style>