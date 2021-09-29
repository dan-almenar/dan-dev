<template>    
    <div class="container">
        <template v-if="showContent">
            <h3 class="title">{{ currentCard }}</h3>
            <template v-for="content in setContent"
            :key="content.id">
                <div class="subgrid">
                    <p class="subtitle">{{ content.title }}</p>                        
                    <template v-if="setContent!=langsAndTools">
                        <span class="description">{{ content.description }}</span>
                        <template v-if="content.url">
                            <br /><br /><a class="url" :href="content.url[0]">{{ content.url[1] }}</a>
                        </template>
                    </template>
                    <template v-else>
                        <ImagesGrid />
                    </template>          
                </div>
            </template>
        </template>
    </div>
</template>

<script>
//firebase related imports
import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore'

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
        const app = initializeApp(this.firebaseConfig)
        const db = getFirestore(app)
        const projectsSpanishData = collection(db, 'projects-spanish')
        const projectsEnglishData = collection(db, 'projects-english')
        const spanishBioData = collection(db, 'spanish')
        const englishBioData = collection(db, 'english');
        
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
        ...mapState({
            currentCard: 'currentCard',
            showContent: 'showContent',
            language: 'language',
            firebaseConfig: 'firebaseConfig'
        }),

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
                    case 'Projects':
                        return this.projectsSpanish
                }
            } else if (this.contentInfo.language !='english'){
                switch (this.contentInfo.currentCard){
                    case 'Bio':
                        return this.bio.english
                    case 'Projects':
                        return this.projectsEnglish
                    case 'Proyectos':
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
    grid-template-columns: 1fr 2fr;
    text-align: justify;
    margin-right: 100px;
}

.title {
    padding-right: 30px;
    color: blue;
    font-size: 2.2rem;
    border-right: 4px solid snow;
    min-height: 150px;
    align-self: start;
}

.subgrid {
    display: subgrid;
    grid-column: 2/3;
    grid-template-columns: 1fr 2fr;
    justify-self: start;
    margin-left: 10px;
}

.subtitle {
    text-align: left;
    color: blue;
    font-size: 1.7rem;
    font-weight: bold;
}

.description {
    color:snow;
    text-align: justify;
    font-size: 1.3rem;
    font-weight: 500;
}

.url {
    color: snow;
    font-weight: bold;
    font-size: 1.2rem;
}

@media (max-width: 480px) {
    .container {
        position: relative;
        top: 40px;
        left: 0px;
        margin-right: 0px;
    }

    .title {
        font-size: 1.4rem
    }

    .subtitle {
        font-size: 1.3rem;
    }

    .description {
        font-size: 1.1rem;
        line-height: 1.5rem;
        
    }

    .url{
        font-size: 1rem;
        font-weight:bold;
    }
    
}
</style>