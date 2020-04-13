<template>
    <v-form @submit.prevent="login">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="form.email"
                        type="email"
                        label="E-mail"
                        required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="form.password"
                        type="password"
                        label="Password"
                        required>
                    </v-text-field>
                </v-col>

                <v-btn color="green" type="submit">Login</v-btn>

                <router-link to="/signup">
                    <v-btn color="blue">Sign Up</v-btn>
                </router-link>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default{
        data() {
            return{
                form:{
                    email:null,
                    password:null
                }
            }
        },
        created(){
            if(User.loggedIn()){
                this.$router.push({name:'forum'})
                //this will redirect to forum page
            }
        },
        methods:{
            login(){
               // alert('login')
               User.login(this.form)
                //this.$router.push({name:'forum'})
            }

          }
    }

</script>

<style>

</style>
