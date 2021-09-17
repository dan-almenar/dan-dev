<template>
    <div
    :key="card.id" v-for="card in cards">
        <h3
        @mouseover="showExpandSpan()"
        @mouseleave="showExpandSpan()"
        @click="getCurrentCard(getCard(card.text))"
        class="card-title">{{ card.text }}
        <template
        v-if="showExpand">
            <br/><span>{{language!='spanish' ? 'click para ampliar' : 'click to enlarge'}}</span>
        </template>
        </h3>
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
        ...mapState(['language', 'showExpand']),
    },
    methods: {
        ...mapMutations(['showExpandSpan', 'getCurrentCard']),
        getCard(text){
            return text
        }
    }
}
</script>

<style scoped>
.card-title {
    max-height: 150px;
    padding: 30px 0px;
    color: blue;
    font-size: 2rem;
    align-self: center;
}

.card-title:hover {
    border-top: 5px solid red;
    border-bottom: 5px solid red;
}

span {
    color: gray;
    font-size: 1rem;
}

</style>