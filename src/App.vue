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

<!-- <template>

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
</style> -->

<!-- FIM TEMPLETE REFERENTE Á AULA 5 | v-for -->




<!--///////////////////////////////////////-->




<!-- ESTE É O TEMPLETE REFERENTE Á AULA 6 | v-bind -->


<!-- <template>

  <div>

    <div 
      v-for="(obj, index) in todos"
      v-bind:key="obj.id">

      <ul>
        <li>
          <img
          v-if="obj.img" 
          :src="obj.img">
          {{ index }} - {{ obj.title }}
        </li>
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
            "completed": false,
            "img": "https://via.placeholder.com/150",
          },
          {
            "img": "https://via.placeholder.com/150",
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

<s>
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
</style> -->

<!-- FIM TEMPLETE REFERENTE Á AULA 6 | v-bind -->




<!--///////////////////////////////////////-->




<!-- ESTE É O TEMPLETE REFERENTE Á AULA 7 | style bind -->


<!-- <template>

  <div>

    <h1 :class="{ 'title': true, 'title-home': isHome}">
      CURSO VUE 3
    </h1>


    <p :class="pClass">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos consectetur repudiandae odio. Sint mollitia odit quam sit illo praesentium laborum facere commodi, enim ratione molestiae qui tempore deleniti amet.
    </p>



    <p :style="styleClass">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laborum ad corporis iusto deserunt sed ducimus eveniet quibusdam eius omnis quos maiores in, blanditiis aliquam modi minus est iste rerum?
    </p>



    <div 
      v-for="(obj, index) in todos"
      v-bind:key="obj.id">

      <ul>
        <li>
          <img
          v-if="obj.img" 
          :src="obj.img">
          {{ index }} - {{ obj.title }}
        </li>
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
        classVar: 'title',
        isHome: true,
        pClass: ['text', 'text-home'],
        styleClass: { 'color': 'purple', 'fontSize': '21px', 'backgroundColor': 'black', 'opacity': '0.9'},
        todos: [{
          "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false,
            "img": "https://via.placeholder.com/150",
          },
          {
            "img": "https://via.placeholder.com/150",
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

  .text-home{
    color: yellow;
    font-size: 15px;
  }

  .text {
    color: blue;
  }
  .title{
    font-size: 23px;
    color: red;
  }

  .title-home{
    font-size: 43px;
    color: green;
  }

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
</style> -->

<!-- FIM TEMPLETE REFERENTE Á AULA 7 | style bind -->




<!--///////////////////////////////////////-->




<!-- ESTE É O TEMPLETE REFERENTE Á AULA 8 | v-model -->


<!-- <template>

  <div>

    <div>
      <label>NOME</label>
      <br>

      <input v-model="name" type="text">
      <br>

      {{ name }}
    </div>

<br><br>

    <div>
      <label>ESPORTES</label>
      <br>

      <select v-model="esportes">
        <option value="">Escolha</option>
        <option value="futebol">Futebol</option>
        <option value="basquete">Basquete</option>
        <option value="volei">Volei</option>
      </select>
      <br>

      {{ esportes }}
    </div>

    <br><br>

    <div>
      <label>NewsLatter</label>
      <br>
      <input 
      type="radio"
      v-model="newslatter" 
      value="Sim"  
      >SIM


  
      <input 
      type="radio"
      v-model="newslatter" 
      value="Nao"  
      >NAO

      <br>

      {{ newslatter }}
    </div>

    <br><br>

    <div>
      <label> Contrato</label>
      <br>
      <input
        type="checkbox"
        v-model="contrato"
        > Aceite os termos
        <br>
        {{ contrato }}
    </div>

      <br><br>

    <div>
      <label>Cores</label>
      <br>
      <input 
      type="checkbox"
      v-model="colors" 
      value="Azul"  
      >Azul


  
      <input 
      type="checkbox"
      v-model="colors" 
      value="Preto"  
      >Preto

      <br>

      {{ colors }}
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
        name: 'Paulo',
        esportes: 'futebol',
        newslatter: '',
        contrato: false,
        colors: [],
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

</style> -->

<!-- FIM TEMPLETE REFERENTE Á AULA 8 | v-model -->





<!--///////////////////////////////////////-->





<!-- ESTE É O TEMPLETE REFERENTE Á AULA 9 | events -->


<!-- <template>

  <div>

    <button @click="onClick">
      Enviar
    </button>

    <br>

    <div
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
    >
    mouse over

    </div>


    <br><br>

    <div>
      <form action="https://google.com"
        @submit.prevent="onSubmit"
        >
   
      <input 
        type="text"
        @keyup.enter="onKeyUp">

      <button @click="submit">
      Enviar
    </button>

  </form>
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
        
    }

  },

  methods: {
    onClick($evt){
      console.log('click', $evt)
    },
    onMouseOver($evt){
      console.log('mouse over', $evt)
    },
    onMouseOut($evt){
      console.log('mouse out', $evt)
    },
    onSubmit($evt){
      console.log('submit', $evt)
    },
    onKeyUp($evt){
      console.log('onKeyUp', $evt)
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

</style> -->

<!-- FIM TEMPLETE REFERENTE Á AULA 9 | events -->





<!--///////////////////////////////////////-->





<!-- ESTE É O TEMPLETE REFERENTE Á AULA 10 | computed -->


<template>

  <div>

    {{ fullName }}

    <br><br>

    <h2>TODOS ABERTAS</h2>
    <div 
      v-for="todo in uncompletedTodos"
      :key="todo.id">
      <ul>
        <li>{{ todo.title }} </li>
      </ul>
    </div>

    <br><br>

    <h2>TODOS COMPLETADAS</h2>
    <div 
      v-for="todo in completedTodos"
      :key="todo.id">
      <ul>
        <li>{{ todo.title }} </li>
      </ul>
    </div>

    <br><br><br>

    <h2>TODOS</h2>
    <div 
      v-for="todo in todos"
      :key="todo.id">

      <input
          v-model="todo.completed" 
          type="checkbox">
   
      {{ todo.title }} 
   
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
        user:{
          nome: 'Paulo',
          sobrenome: 'Pariz',
        },
        todos: [
                {
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

  },

  methods: {
  
  },

  computed: {
        fullName() {
          return `${this.user.nome} ${this.user.sobrenome}`
        },

        uncompletedTodos() {
          return this.todos.filter(todo => todo.completed);
        },

        completedTodos() {
          return this.todos.filter(todo => !todo.completed);
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
  li{
    list-style: none;
  }

</style>

<!-- FIM TEMPLETE REFERENTE Á AULA 10 | computed -->
