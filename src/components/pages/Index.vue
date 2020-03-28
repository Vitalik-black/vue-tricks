<template>
  <div id="app">
    <div id="nav">
      <h2>Общая панель</h2>
    </div>
    <p><router-link to="/pizza-times">eozubarev - pizza times</router-link></p>
    <p><router-link to="/weather">NatatkaValikowsky - weather</router-link></p>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class Main extends Vue {
/* === DATA === */
}

</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
