<template>
    <div>
        <ul class="news-list">
            <li v-for="item in fetchedAsk" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{item.points}}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <!-- <a v-bind:href="item.url" target="_blank">
                            {{item.title}}
                        </a> -->
                        <router-link
                        :to="`/item/${item.id}`"
                        >
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="line-text">
                        {{item.time_ago}} by 
                        <router-link
                        :to="`/user/${item.user}`"
                        class="line-text">
                        {{ item.user }}
                        </router-link>
                    </small>
                    <!-- <a v-bind:href="item.url" target="_blank">
                    {{item.title}}
                    </a>

                    <small>
                        {{ item.time_ago }} by 
                        <router-link
                        :to="`/user/${item.user}`"
                        >
                        {{ item.user }}
                        </router-link>
                    </small> -->
                </div>
            </li>
        </ul>
<!-- 
        <p v-for="item in fetchedAsk">
            <a :href="item.url">
                {{item.title}}
            </a>
            <router-link
            :to="`/item/${item.id}`"
            >
            {{ item.title }}
            </router-link>
            <small>
                {{item.time_ago}} by {{item.user}}
            </small>
        </p> -->
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
        // this.$store.dispatch('FETCH_JOBS');
        // fetchAskList()
        //     .then(res => this.asks = res.data)
        //     .catch(err => console.log(err))
    },

}
</script>

<style scoped>

.news-list{
    margin: 0;
    padding: 0;
}
.post{
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title{
    margin: 0;
}
.line-text{
    color: #828282;
}
</style>
