<template>

    <v-container class="grey lighten-5">
        <v-layout row wrap>
            <v-flex xs8>
                <h1>Forum</h1>
                <question
                v-for="question in questions"
                    :key="question.path"
                :data=question
                >
                </question>
            </v-flex>

            sidebar
        </v-layout>
    </v-container>

</template>



<script>
    import question from './question'
    export default{
        data(){
          return{
              questions:{}
          }
        },
     components:{question},
        created(){
         axios.get('/api/question')
            .then(res=>this.questions = res.data.data)
            .catch(error=>console.log(error.response.data))
        }
    }

</script>

<style>

</style>
