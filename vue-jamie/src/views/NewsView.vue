<template>
    <div>
        <div v-for="user in this.$store.state.news">{{user.id}}</div>
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
