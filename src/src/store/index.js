import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
      count:1,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    },
    mutations:{
      increment:function(state){
        state.count += 1;
      },
      add:function(state,y){
        console.log('state',state);
        console.log('y',y);
        state.todos.push(y)
      }
    },
    getters:{
      doneTodo:(state,getters)=>{
        return state.todos.filter(item=>item.done)
      },
      doneTodoCount:(state,getters)=>{
        return getters.doneTodo.length
      },
      getId: (state,getters) => (id) => {
        return state.todos.filter(item => item.id == id)
      }
    },
    actions:{
        incrementAsync({commit},payload){
            setTimeout(function(){
                console.log('payload',payload);
                commit('increment');
            },1000);
        }
    },
});