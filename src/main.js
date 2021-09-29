import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
    state(){
        return {
            items: [],
            language: 'spanish',
            showContent: true,
            currentCard: 'Bio',
            previousCard: '',

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

            firebaseConfig: {
                apiKey: "AIzaSyAdUV2x85G-CPpPpZkoZghpXZiVoIdiwFA",
                authDomain: "dan-developer.firebaseapp.com",
                projectId: "dan-developer",
                storageBucket: "dan-developer.appspot.com",
                messagingSenderId: "770542344714",
                appId: "1:770542344714:web:ade353744386b5ac179df3"
            },
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
        getCurrentCard(state, payload){
            state.previousCard = state.currentCard
            state.currentCard = payload
        },
        switchShowContent(state){
            if (state.showContent === true && state.previousCard === state.currentCard){
                state.showContent = false
            } else {
                state.showContent = true
            }
        },
    },
    getters: {
        langCard: state => {
            return {
                language: state.language,
                currentCard: state.currentCard
            }
        }
    },

})

const app = createApp(App)

app.use(store)

app.mount('#app')
