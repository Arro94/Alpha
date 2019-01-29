// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import VueResource from 'vue-resource' //todo is this needed?
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(Vuefire);
Vue.use(VueResource);  // todo this tooooo?

Vue.config.productionTip = true;

var config = {
  apiKey: "AIzaSyCjzLJ_mtrQifB6tLOQmO_xcmUXaR829tk",
  authDomain: "alphamated-6f938.firebaseapp.com",
  databaseURL: "https://alphamated-6f938.firebaseio.com",
  projectId: "alphamated-6f938",
  storageBucket: "alphamated-6f938.appspot.com",
  messagingSenderId: "218128329199"
}

firebase.initializeApp(config);
export const db = firebase.firestore()

/* eslint-disable no-new */
new Vue({
  el: '#app',

  router,
  template: '<App/>',
  components: { App }
})
