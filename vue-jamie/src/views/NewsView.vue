<template>
    <div>
        <!-- 
            뉴스 리스트 스타일링
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
        </p> -->
        <ul class="news-list">
            <li v-for="item in this.$store.state.news" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{item.points}}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url" target="_blank">
                            {{item.title}}
                        </a>
                    </p>
                    <small class="line-text">
                        by 
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
