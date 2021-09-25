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
</template>

<script>
import { mapState } from 'vuex'
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
  },
  computed: {
    ...mapState(['language', 'cardsSpanish', 'cardsEnglish', 'currentCard'])
  }
}
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
  margin: 0 200px;
}
</style>
