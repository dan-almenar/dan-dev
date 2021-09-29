<template>  
    <div class="container">
      <LangButton />
      <Header />
    </div>
    <div class="content-block">
      <ContentBlock
      :cards="language != 'spanish' ? cardsSpanish : cardsEnglish"
      />
    </div>
    <div class="content-body">
      <ContentBody />
    </div>
    <div class="contact-form">
      <ContactForm />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ContactForm from './components/ContactForm'
import ContentBody from './components/ContentBody'
import ContentBlock from './components/ContentBlock'
import Header from './components/Header'
import LangButton from './components/LangButton'
export default {
  name: 'App',
  components: {
    LangButton,
    Header,
    ContentBlock,
    ContentBody,
    ContactForm,
  },
  computed: {
    ...mapState(['language', 'cardsSpanish', 'cardsEnglish', 'currentCard'])
  }
}
console.log('Welcome to Dan Dev\'s WebApp!')
</script>

<style>
* {

  background-color: #212121;
}
#app {
  justify-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  justify-self: center;
  justify-items: center;
}

.content-block {
  display: inline-flex;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin: 0 150px;
}

.content-body {
  justify-self:normal;
}

@media (max-width: 480px){
  .content-body {
    margin-top: 60px;
  }
}
</style>
