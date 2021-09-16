<template>
    <div class="container">
        <img class="profile-pic" :src="require('@/assets/profile pic.png')" alt="Profile Pic">
        <div class="wrapper">
            <h1 class="title">Dan Developer</h1>
            <h2 class="subtitle">Daniel Almenar Williams</h2>
            <div></div>
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
    grid-template-columns: 1fr 1fr;
}

.wrapper {
    display: grid;
    justify-self: start;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 430px;
}

.profile-pic {
    width: 140px;
    height: 140px;
    margin: 25px;
    border: 4px solid blue;
    border-radius: 100%;
    justify-self: end;
}

.title {
    color: blue;
    font-size: 3rem;
    text-transform: uppercase;
    justify-self: start;
    text-align: end;
    align-self: start;
    grid-row: 2/3;
    grid-column: 2/3;
}

.subtitle {
    color: red;
    font-size: 3rem;
    text-transform: uppercase;
    text-align: start;
    font-weight: bold;
    grid-column: 1/3;
    grid-row: 1/3;
}

</style>