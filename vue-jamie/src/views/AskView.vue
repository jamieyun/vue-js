<template>
    <div>
        <div v-for="item in fetchedAsk">{{item.user}}</div>
        <!-- <div v-for="item in jobs">{{item.id}}</div> -->
    </div>
</template>

<script>
// import { fetchAskList } from '../api/index';
import { mapState, mapGetters } from 'vuex';

export default {
    // data: function() {//=data(){}
    //     return {
    //         asks:[]
    //     }
    // },
    computed: {
        //#5
        ...mapGetters([
            'fetchedAsk'
        ]),
        //# 4
        // ...mapGetters({
        //     askItems: 'fetchedAsk'
        // })

        // #3
        //...mapState(['ask','jobs'])
        
        // #2
        // ...mapState({
        //     ask: state => state.ask
        // })
        
        // #1
        // ask(){ //= this.$store.state.ask 를 template에서 쉽게 사용하기 위해서
        //     return this.$store.state.ask;
        // }
    },
    created:function() {// = created(){}
        this.$store.dispatch('FETCH_ASK');
        this.$store.dispatch('FETCH_JOBS');
        // fetchAskList()
        //     .then(res => this.asks = res.data)
        //     .catch(err => console.log(err))
    },

}
</script>

<style>

</style>
