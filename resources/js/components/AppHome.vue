<template>
    <div id="app">
        <toolbar></toolbar>
<!--        <login></login>-->
      <!--  <router-link to="/login">Login</router-link> -->
        <router-view/>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import toolbar from './Toolbar'
    import AppFooter from './AppFooter'
    import Login from './login/Login'

    export default{
      components:{toolbar,AppFooter,Login}
    }
</script>

<style>

</style>
