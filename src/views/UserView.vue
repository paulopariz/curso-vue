<template>
    <div>
        {{ $route.query.page }}
        Usuario
        <br>

        <button @click="login()"> Login </button>
    </div>
</template>


<script>
export default {
    created(){
        console.log(this.$router);
    },

    methods: {
        login(){
            this.$router.push({ name: 'about'})
        }
    },
}
</script>