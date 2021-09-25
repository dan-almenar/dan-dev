<template>      
        <div :key="card.id" v-for="card in cards">
            <h3
            @mouseover="showExpandSpan(), getCurrentCard(getCard(card.text))"
            @mouseleave="showExpandSpan()"
            @click="switchShowContent(getCard(card.text))"
            class="card-title">{{ card.text }}
            <template
            v-if="showExpand">
                <br/><span
                    :class="showContent ? 'hidden' : ''">
                    {{language!='spanish' ? 'click para ampliar' : 'click to enlarge'}}
                    </span>
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
        ...mapState(['language', 'showExpand', 'showContent']),
    },
    methods: {
        ...mapMutations(['showExpandSpan', 'getCurrentCard', 'switchShowContent']),
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
    transition: .7s;
}

.card-title:hover {
    border-top: 5px solid blue;
    border-bottom: 5px solid blue;
    color: white;
    font-size: 2.5rem;
}

span {
    color: snow;
    font-size: 1rem;
}

.hidden {
    visibility: hidden;
}

</style>