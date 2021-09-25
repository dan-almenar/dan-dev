<template>    
    <div class="container">
        <img class="profile-pic" :src="require('@/assets/profile pic.png')" alt="Profile Pic">
        <div class="wrapper">
            <h1 class="title">Dan Developer</h1>
            <h2 class="subtitle">Daniel Almenar Williams</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.wrapper {
    justify-self: start;
}

.profile-pic {
    width: 140px;
    height: 140px;
    margin: 40px;
    border: 5px solid blue;
    border-radius: 100%;
    justify-self: end;
    transition: 1s;
}

.profile-pic:hover{
    width: 160px;
    height: 160px;
}

.title {
    color: blue;
    font-size: 3rem;
    text-transform: uppercase;
    justify-self: start;
    text-align: left;
    margin-top: 40px;
}

.subtitle {
    color: snow;
    font-size: 2rem;
    text-align: left;
    text-transform:lowercase;
    margin-top: -20px;
}

@media (max-width: 500px){
    .container{
        grid-template-columns: 1fr 1fr;
        margin-right: 40px;
    }

    .title{
        font-size: 1.6rem;
    }

    .subtitle {
        font-size: 1.1rem;
        text-align: left;
        margin-top: 0px;
    }

    .profile-pic{
        height: 90px;
        width: 90px;
    }

    .profile-pic:hover{
        height: 100px;
        width: 100px;
    }

}

</style>