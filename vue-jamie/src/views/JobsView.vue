<template>
    <div>
        <div v-for="item in this.$store.state.jobs"> {{item.domain}}</div>
    </div>
</template>

<script>
// import {fetchJobsList} from '../api/index'
export default {
    // data() {
    //     return {
    //         jobs:[],
    //     }
    // },
    created() {
        this.$store.dispatch('FETCH_JOBS');
        // fetchJobsList()
        //     .then(res => this.jobs = res.data)
        //     .catch(err => console.log(err))

    },

}
</script>

<style>

</style>
