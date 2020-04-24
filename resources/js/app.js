/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//window.Vue = require('vue');
import Vue from 'vue'
import App from './app'
import Vuetify from 'vuetify'
import router from './Router/router.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use (Vuetify)

import VueSimplemde from 'vue-simplemde'

Vue.use(VueSimplemde)

Vue.component('vue-simplemde', VueSimplemde)


import md from 'marked'
window.md = md

import User from './Helpers/User'
window.User = User

import Exception from './Helpers/Exception'
window.Exception = Exception

//User.logout()
//console.log(User.loggedIn())

//console.log(User.id())

window.EventBus = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))





/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



Vue.config.productionTip = false
//Vue.use(Vuetify)

Vue.component('AppHome', require('./components/AppHome.vue').default);


export default new Vuetify({  })


/* eslint-disable no-new */
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
});
