// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

const app2 = new Vue({
  el: '#app2',
  data: {
    message: `Вот когда вы загрузили эту страницу: ${new Date()}`
  }
})

const app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})

const app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      { text: 'Посадить дерево' },
      { text: 'Построить дом' },
      { text: 'Вырастить сына' }
    ]
  }
})
