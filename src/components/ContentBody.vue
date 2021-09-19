<template>
    <div class="container">
        <template v-if="showContent">
        <h3 class="title">{{ currentCard }}</h3>
        <div class="subgrid">
            <p class="subtitle">subtitle
                <br /><span class="description">description</span>
                <br /><a class="url" href="google.com">link here</a>
            </p>
            <p class="subtitle">subtitle
                <br /><span class="description">description</span>
                <br /><a class="url" href="google.com">link here</a>
            </p>
            <p class="subtitle">subtitle
                <br /><span class="description">description</span>
                <br /><a class="url" href="google.com">link here</a>
            </p>
        </div>
        </template>
    </div>    
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
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

import { mapState } from 'vuex'


export default {
    name: 'ContentBody',
    data() {
        return {
            langsAndTools: [],            
            projectsSpanish: [],
            projectsEnglish: [],
            bio: [],
        }
    },
    mounted() {
        (async () => {
            this.langsAndTools = []
            let res = await getDocs(collection(db, 'langs-spanish'))
            res.forEach(doc => {
                this.langsAndTools.push(doc.data())
            })
        })();
        (async () => {
            this.projectsSpanish = []
            let res = await getDocs(collection(db, 'projects-spanish'))
            res.forEach(doc => {
                this.projectsSpanish.push(doc.data())
            })
        })();
        (async () => {
            this.projectsEnglish = []
            let res = await getDocs(collection(db, 'projects-english'))
            res.forEach(doc => this.projectsEnglish.push(doc.data()))
        })();
        (async () => {
            this.bio = []
            let res = await getDocs(collection(db, 'bio'))
            res.forEach(doc => this.bio.push(doc.data()))
        })();
    },
    computed: {
        ...mapState(['currentCard', 'showContent'])
    }
}

/*
TO DO NEXT:
Populate the component with the data fetched from Firebase accordingly.
*/

</script>

<style scoped>
.container {
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
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
    display: grid;
    grid-template-columns: 1fr;
    justify-self: start;
    margin-left: 20px;
}

.subtitle {
    text-align: left;
    color: blue;
    font-size: 1.7rem;
    font-weight: bold;
    padding-top: 30px;
}

.description {
    color: black;
    text-align: left;
    font-size: 1.3rem;
    font-weight: 500;
    margin-left: 40px;
}

.url {
    font-weight: 400;
    font-size: 1rem;
    margin-left: 40px;
}


</style>