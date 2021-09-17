import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state(){
        return {
            language: 'spanish',
            currentCard: '',

            cardsSpanish: [
                {
                    id: 0,
                    text: 'Bio'
                },
                {
                    id: 1,
                    text: 'Proyectos'
                },
                {
                    id: 2,
                    text: 'Lenguajes y Herramientas'
                }
            ],
            cardsEnglish: [
                {
                    id: 0,
                    text: 'Bio'
                },
                {
                    id: 1,
                    text: 'Projects'
                },
                {
                    id: 2,
                    text: 'Languages and Tools'
                }
            ],
                       
            showExpand: false,
        }
    },
    mutations: {
        switchLanguage(state) {
            if (state.language === 'spanish') {
                state.language = 'english'
            } else {
                state.language = 'spanish'
            }
        },
        showExpandSpan(state){
            state.showExpand = !state.showExpand
        },
        getCurrentCard(state, text){
            state.currentCard = text
        }
    }

})

const app = createApp(App)

app.use(store)

app.mount('#app')
