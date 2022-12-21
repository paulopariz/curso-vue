<!-- ESTE É O TEMPLETE REFERENTE Á AULA 12 | ciclo -->


<!-- <template>
  <header class="header">header</header>
</template>

<script>
  export default {

    mounted() {
      window.addEventListener('resize', this.resize)
    },

    beforeUnmount() {
      console.log('beforeUnmount');
      window.removeEventListener('resize', this.resize)
    },
    unmounted() {
      console.log('unmounted');

    },

    methods: {
      resize($evt){
        console.log($evt);
      }
    },
  }
</script>

<style>
  .header {
    background-color: black;
    color: white;
  }
</style> -->

<!-- FIM TEMPLETE REFERENTE Á AULA 12 | ciclo -->





<!--///////////////////////////////////////-->





<!-- ESTE É O TEMPLETE REFERENTE Á AULA 13 | slot -->


<template>
  <header class="header">
    <h1
    v-if="$slots.title" 
      class="title">
      <slot name="title" />
    </h1>

    <div class="description">
      <slot name="description" />
    </div>

    <div class="content">
      <slot />
    </div>

  </header>
</template>

<script>
  export default {

    mounted() {
      console.log(this.$slots)
    },
 
    beforeUnmount() {
    
    },
    unmounted() {

    },

    methods: {
      

    },
  }
</script>

<style>
  .header {
    background-color: black;
    color: white;
  }
</style>

<!-- FIM TEMPLETE REFERENTE Á AULA 13 | slot -->
