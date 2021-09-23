<template>
    <div class="container">
        <template v-if="showContent">
            <h3 class="title">{{ currentCard }}</h3>
            <template v-for="content in setContent"
            :key="content.id">
            <div class="subgrid">
                <p class="subtitle">{{ content.title }}
                    
                    <template v-if="setContent!=langsAndTools">
                        <br /><span class="description">{{ content.description }}</span>
                        <template v-if="content.url">
                            <br /><a class="url" :href="content.url[0]">{{ content.url[1] }}</a>
                        </template>
                    </template>
                    <template v-else>
                        <ImagesGrid />
                    </template>
                </p>
            </div>
            </template>
        </template>
    </div>    
</template>

<script>
//firebase related imports, initializer and variables
import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAdUV2x85G-CPpPpZkoZghpXZiVoIdiwFA",
    authDomain: "dan-developer.firebaseapp.com",
    projectId: "dan-developer",
    storageBucket: "dan-developer.appspot.com",
    messagingSenderId: "770542344714",
    appId: "1:770542344714:web:ade353744386b5ac179df3"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const projectsSpanishData = collection(db, 'projects-spanish')
const projectsEnglishData = collection(db, 'projects-english')
const spanishBioData = collection(db, 'spanish')
const englishBioData = collection(db, 'english')

// component related code
import { mapState, mapGetters } from 'vuex'
import ImagesGrid from './ImagesGrid'


export default {
    name: 'ContentBody',
    data() {
        return {
            langsAndTools: {
                //placeholder is needed so the ImagesGrid component renders properly
                placeholder: ''
            },
            projectsSpanish: [],
            projectsEnglish: [],
            bio: {
                spanish: [],
                english: []
            },
        }
    },
    components: {
        ImagesGrid,
    },
    // fetch the data from Firebase/Firestore
    mounted() {
        (async () => {
            let res = await getDocs(spanishBioData)
            res.forEach(doc => this.bio.spanish.push(doc.data()))
        })();

        (async () => {
            let res = await getDocs(englishBioData)
            res.forEach(doc => this.bio.english.push(doc.data()))
        })();
                
        (async () => {
            this.projectsSpanish = []
            let res = await getDocs(projectsSpanishData)
            res.forEach(doc => this.projectsSpanish.push(doc.data()))
        })();

        (async () => {
            this.projectsEnglish = []
            let res = await getDocs(projectsEnglishData)
            res.forEach(doc => this.projectsEnglish.push(doc.data()))
        })();
    },
    computed: {
        ...mapState(['currentCard', 'showContent', 'language']),
        ...mapGetters({
            contentInfo: 'langCard'
        }),
        
        setContent(){
            if (this.contentInfo.language != 'spanish'){
                switch (this.contentInfo.currentCard){
                    case 'Bio':
                        return this.bio.spanish
                    case 'Proyectos':
                        return this.projectsSpanish
                }
            } else if (this.contentInfo.language !='english'){
                switch (this.contentInfo.currentCard){
                    case 'Bio':
                        return this.bio.english
                    case 'Projects':
                        return this.projectsEnglish
                }
            }
            return this.langsAndTools
        },
    }
}
</script>

<style scoped>
.container {
    padding: 30px;
    display: grid;
    max-width: 800px;
    grid-template-columns: 1fr 2fr;
}

.title {
    padding-right: 30px;
    color: blue;
    font-size: 2.5rem;
    border-right: 4px solid red;
    min-height: 150px;
    align-self: center;
}

.subgrid {
    display: subgrid;
    grid-column: 2/3;
    grid-template-columns: 1fr 2fr;
    justify-self: start;
    margin-left: 40px;
}

.subtitle {
    text-align: left;
    color: blue;
    font-size: 1.7rem;
    font-weight: bold;
}

.description {
    color: black;
    text-align: left;
    font-size: 1.3rem;
    font-weight: 500;
}

.url {
    font-weight: bold;
    font-size: 1rem;
}

</style>