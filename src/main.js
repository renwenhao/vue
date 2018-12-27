// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import store from './src/store'
var obj = {
  a:1,
  b:2,
  c:{
    d:{
      e:{
        f:{
          z:1000
        }
      }
    },
  }
}

//vue将属性全部转化为getter setter方法
function handleVue(data){
  Object.keys(data).forEach(item=>{
    if(typeof data[item] == 'object'){
      handleVue(data[item]);
    }else{
      var value = data[item];
      delete data[item];
      Object.defineProperty(data,item,{
        get(){
          return value;
        },
        set(valueargs){
          value = valueargs;
        }
      });
    }
  })
}
handleVue(obj);


window.obj = obj;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
