import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count:1,
  hash:['/']
}



const mutations = {
  add() {
    // console.log(this.state)
    state.count++;
  },
  reduce(){
    state.count--;
  },
  forward(state,path){
    console.log(JSON.stringify(state))
    state.hash.push(path)
  },
  back(state,path){
    var index=state.hash.indexOf(path)
    var length=state.hash.length
    state.hash.splice(index+1,length+2-index)
    console.log(JSON.stringify(state.hash))
  }
}

export default new Vuex.Store({
  state,mutations

})
