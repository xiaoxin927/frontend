<template>
 
    <div>
        <h2 class='title'>{{message}}</h2>
    </div>
   
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: "Hello Webpack",
         };
    },

}
</script>

<style>

    .title {
        color: green;
    }


</style>