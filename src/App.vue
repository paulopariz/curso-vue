<!-- ESTE É O TEMPLETE REFERENTE Á AULA 4 | v-if & v-show -->

<!-- <template>
    <TheHeader
    v-if="showHeader"
    ></TheHeader>

  <div v-show="showNme">
    nome: {{ name }} <br> 
    sobrenome: {{ sobreNome }}
  </div>


  <div v-if="accessLevel === 'admin'">Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Marketing</div>
  <div v-else>User</div>



  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/aula4/TheHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },

data() {
  return {
    showHeader: true,
    name: 'PAULO',
    sobreNome: 'PARIZ',
    showNme: false,
    accessLevel: 'marketing'
  }
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<!-- FIM TEMPLETE REFERENTE Á AULA 4 | v-if & v-show -->



<!--///////////////////////////////////////-->



<!-- ESTE É O TEMPLETE REFERENTE Á AULA 5 | v-for -->

<template>

  <div>

    <div v-for="(obj, index) in todos" v-bind:key="obj.id">
      <ul>
        <li>{{ index }} - {{ obj.title }}</li>
      </ul>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'App',
    components: {

    },

    data() {
      return {
        todos: [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          }
        ]
      }
    }

  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

  li {
    list-style: none;
    color: black;
    font-weight: 700;
  }
</style>

<!-- FIM TEMPLETE REFERENTE Á AULA 5 | v-for -->