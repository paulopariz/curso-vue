<template>
    <div>
        <pre>
            {{ product.name }} - {{ product.price }} <br>
        </pre>
        <button @click="addProduct">
            Adicionar
        </button>
        <button @click="removeProduct">
            Remover
        </button>

       
    </div>
</template>

<script>
export default{
    props: {
        product: Object
    },


    methods: {
        addProduct(){
            this.$store.commit('addProduct', this.product)
        },
        removeProduct(){
            this.$store.commit('removeProduct', this.product.id)
        },
    },
}
</script>

<style>

</style>