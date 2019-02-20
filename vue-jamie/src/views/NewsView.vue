<template>
    <div>
        <p v-for="item in this.$store.state.news">

            <a v-bind:href="item.url" target="_blank">
                {{item.title}}
            </a>

            <small>
                {{ item.time_ago }} by 
                <router-link
                :to="`/user/${item.user}`"
                >
                {{ item.user }}
                </router-link>
            </small>
        </p>
    </div>
</template>

<script>

export default {
    // data() { //data는 store 에 state 에서 받아씀
    //     return{
    //         users:[]
    //     }
    // },
    created() {
        // fetchNewsList()
        //     .then(response=>{
        //         this.users = response.data
        //     })
        //     .catch(err => console.log(err))

        //store에서 생성한 actions 호출
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>

<style>

</style>
