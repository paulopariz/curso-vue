<template>
    <div :class="baseClass">
        {{ text }}
    </div>
</template>

<script>
    export default{
        props: ['variant', 'text'],

        computed: {
            baseClass(){
                return [
                    'alert',
                    this.variant ? `alert-${this.variant}` : ''
                ]
            },

            methods: {
                
            },
        }
    }
</script>


<style scoped>
    .alert{
        padding:  5px;
        border-radius: 5px;
        color: gray;
        background: #ddd;
        display: flex;
        justify-content: space-between;
    }

    .alert-success{
        background: #42b983;
    }

    .alert-danger{
        background: red;
    }
</style>
