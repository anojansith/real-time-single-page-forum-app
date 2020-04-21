<template>
    <v-card
        class="mt-2"
        max-width="800"
    >
        <v-card-text class="text--primary">
            <div>
            <router-link :to="data.path">
                {{data.title}}
            </router-link>
            </div>
            <div class="grey--text">{{data.user}} said {{data.created_at}} </div>


        </v-card-text>

        <v-card-text>
        {{data.body}}
        </v-card-text>

    </v-card>
</template>

<script>
    export default{
        props:['data']
    }
</script>
