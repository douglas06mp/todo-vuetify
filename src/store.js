import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [],
    queryTodoList: [],
    showDialog: false,
    showSnackbar: false,
    isSubmitting: false
  },
  mutations: {
    setTodoList(state){
      const lists = []
      db.collection('todoList').onSnapshot(res => {
        const changes = res.docChanges()
        changes.forEach(change => {
          if (change.type === 'added') {
            lists.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        })
        state.todoList = lists
      })
    },
    queryTodoList(state, payload){
      state.queryTodoList =  db.collection('todoList').where('done', '==', payload)
    },
    addStart(state){
      state.isSubmitting = true
      state.showDialog = true
    },
    addFinish(state){
      state.showSnackbar = true
      state.showDialog = false
      state.isSubmitting = false
    }
  },
  actions: {
    setTodoList({commit}){
      commit('setTodoList')
    },
    queryTodoList({commit}, payload){
      commit('queryTodoList', payload)
    },
    addTodo({commit}, payload){
      db.collection('todoList').add(payload).then(() => {
        commit('setTodoList')
        commit('addFinish')
      })
    },
    addStart({commit}){
      commit('addStart')
    },
    deleteTodo({commit}, payload){
      db.collection('todoList').doc(payload).delete().then(() => commit('setTodoList'))
    },
    updateTodo({commit}, payload){
      db.collection('todoList').doc(payload.id).update({
        done: payload.value
      }).then(() => {
        commit('setTodoList')
      })
    }
  },
  getters: {
    todoList(state) { return state.todoList },
    queryTodoList(state){ return state.queryTodoList },
    showDialog(state){ return state.showDialog },
    showSnackbar(state){ return state.showSnackbar },
    isSubmitting(state){ return state.isSubmitting }
  }
})