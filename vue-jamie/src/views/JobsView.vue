<template>
    <div>
        <p v-for="item in this.$store.state.jobs"> 
            <a :href="item.url" target="_blank">
                {{item.title}}
            </a>
            <small>
              {{item.time_ago}} by {{item.domain}}
            </small>
        </p>
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
