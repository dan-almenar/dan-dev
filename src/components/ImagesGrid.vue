<template>
    <div v-for="(img, imgIndex) in langsAndTools" :key="imgIndex"
    class="images-grid">
        <div class="img-container">
            <img :title="img[1]" class="img" :src="require(`@/assets/langs/${img[0]}`)" :alt="img[1]">
        </div>
    </div>    
</template>

<script>
export default {
    name: 'ImagesGrid',
    data(){
        return {
            langsAndTools: [
                ['01 python.png', 'Python'],
                ['01 python - mathplotlib.png', 'Matplotlib'],
                ['01 python dash.png', 'Dash'],
                ['01 python django.png', 'Django'],
                ['01 python flask.png', 'Flask'],
                ['01 python jupyter notebook.png', 'Jupyter Notebook'],
                ['01 python pandas.png', 'pandas'],
                ['01 python plotly.png', 'Plotly'],
                ['01 python scikit learn.png', 'Scikit Learn'],
                ['02 golang.png', 'Golang'],
                ['02 golang - 01 gingonic.png', 'GinGonic'],
                ['03 javascript.png', 'JavaScript'],
                ['03 javascript - node.png', 'NodeJS'],
                ['03 javascript vue.png', 'Vue.js'],
                ['03 javascript vuex.png', 'Vuex'],
                ['04 html.png', 'HTML'],
                ['05 css.png', 'CSS'],
                ['tools bash.png', 'Bash / Terminal'],
                ['tools docker.png', 'Docker'],
                ['tools git.png', 'Git'],
                ['tools google colab.png', 'Google Colab'],
                ['tools google firebase.png', 'Firebase'],
                ['tools pycharm.png', 'PyCharm'],
                ['tools sql.png', 'SQL'],
                ['tools ubuntu.png', 'Ubuntu Linux'],
                ['tools vs code.png', 'VS Code'],
            ],
        }
    }
}
</script>

<style scoped>
.images-grid {
    display: inline-grid;
    gap: 65px;
}

.img-container {
    margin: 15px;
}

.img {
    max-height: 55px;
    transition: .5s
}

.img:hover{
    max-height: 70px;
}

</style>