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
                ['01 python django.png', 'Django'],
                ['01 python flask.png', 'Flask'],
                ['01 python jupyter notebook.png', 'Jupyter Notebook'],
                ['02 golang.png', 'Golang'],
                ['02 golang - 01 gingonic.png', 'GinGonic'],
                ['03 javascript.png', 'JavaScript'],
                ['03 javascript - node.png', 'NodeJS'],
                ['04 html.png', 'HTML'],
                ['05 css.png', 'CSS'],
                ['tools bash.png', 'Bash / Terminal'],
                ['tools docker.png', 'Docker'],
                ['tools git.png', 'Git'],
                ['tools google firebase.png', 'Firebase'],
                ['tools sql.png', 'SQL'],
                ['tools ubuntu.png', 'Ubuntu Linux'],
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

@media (max-width: 480px) {
    .img-container {
        margin: 10px;
    }

    .img {
        max-height: 38px;
    }

    .img:hover {
        max-height: 45px;
    }
}

</style>