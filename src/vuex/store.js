import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const state={
  count:1,
  hash:['/']
}



const mutations={
  add(state){
    state.count++;
  },
  reduce(state){
    state.count--;
  },
  forward(hash,path){
    state.hash.push(path)
  },
  back(hash,path){
    var index=state.hash.indexOf(path)
    var length=state.hash.length
    state.hash.splice(index+1,length+2-index)
  }
}

export default new Vuex.Store({
  state,mutations

})
