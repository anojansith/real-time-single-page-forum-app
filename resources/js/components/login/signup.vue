<template>
    <v-form @submit.prevent="signup">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="form.name"
                        type="text"
                        label="Name"
                        required>
                    </v-text-field>

                    <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

                    <v-text-field
                        v-model="form.email"
                        type="email"
                        label="E-mail"
                        required>
                    </v-text-field>
                    <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
                </v-col>


                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="form.password"
                        type="password"
                        label="Password"
                        required>
                    </v-text-field>
                    <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

                    <v-text-field
                        v-model="form.password_confirmation"
                        type="password"
                        label="Confirm Password"
                        required>
                    </v-text-field>
                    <span class="red--text" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</span>
                </v-col>

                <v-btn color="green" type="submit">Sign Up</v-btn>
                <router-link to="/login">
                    <v-btn color="blue">Login</v-btn>
                </router-link>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default{
        data(){
            return{
                form:{
                    name:null,
                    email:null,
                    password:null,
                    password_confirmation:null
                },
                errors:{

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
            signup(){
                axios.post('/api/auth/signup', this.form)
                .then(res=> {
                    User.responseAfterLogin(res)
                    this.$router.push({name:'forum'})
                })
                .catch(error => this.errors = error.response.data.errors)
            }
        }
    }
</script>
