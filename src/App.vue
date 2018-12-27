<template>
  <div id="app">
    <app-new @click1="handleClick1"></app-new>
    <div>
      <h1>{{getId(1)}}</h1>
      <!-- <div v-for="item in getId(1)" :key="item.id">{{item.id}} - {{item.text}} - {{item.done}}</div> -->
      <div v-for="item in todos" :key="item.id">{{item.id}} - {{item.text}} - {{item.done}}</div>
      <div>
        <button @click="handleClick">add</button>
      </div>
      <h1>{{count}}</h1>
      <h1>{{count2}}</h1>
      <h2>{{count1}}</h2>
      <h3>{{countPlusLocalState}}</h3>
      <button @click="add">add</button>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
var id = 100;
import { mapState, mapGetters } from "vuex";
import AppNew from './App1';
export default {
  components:{
    AppNew
  },
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState({
      count1: state => state.count,
      count2: "count",
      countPlusLocalState: function(state) {
        return state.count + this.count;
      },
      todos:'todos'
    }),
    ...mapGetters({
      getId: "getId"
    })
  },
  methods: {
    handleClick1:function(){
      console.log(111222);
    },
    add: function() {
      this.$store.commit("increment");
    },
    handleClick(){
      this.$store.commit('add',{
        id:id++,
        text:'text' + id,
        done:id%2 == 0
      });
    }
  },
  created() {
    console.log("this.$store.getters", this.$store.getters);
    console.log("this.$store.getters.getId", this.$store.getters.getId(2));
    this.$store.dispatch({
      type:'incrementAsync',
      name:10
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
