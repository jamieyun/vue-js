<template>
    <div>
        <p>
            <!-- mapState 로 가져오기 -->
           name : {{user.id}}
        </p>
        <p>
            <!-- mapGetters 로 가져오기 -->
            karma : {{fetchedUserInfo.karma}}
        </p> 
        
        <p>
            <!-- store 에 다이렉트 접근하여 가져오기 -->
            created : {{this.$store.state.user.created}} 
        </p>
        
        <p>
            <!-- store 에 다이렉트 접근하여 가져오기 -->
            created_time : {{userInfo.created_time}} 
        </p>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    computed: {
        //mapState 로 가져오기
        ...mapState(['user']),
        //mapGetters 로 가져오기 store/index.js 에 getters 선언
        ...mapGetters([
            'fetchedUserInfo'
        ]),
        //computed 로 단순히 가져오기
        userInfo(){
            return this.$store.state.user;
        }
    },
    created() {
        // console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>

<style>

</style>
