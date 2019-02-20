<template>
    <div>
        <ul class="news-list">
            <li v-for="item in this.$store.state.jobs" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{item.points || 0}}
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <!-- <a v-bind:href="item.url" target="_blank">
                            {{item.title}}
                        </a> -->
                        <!-- <router-link
                        :to="`/item/${item.id}`"
                        >
                            {{ item.title }}
                        </router-link> -->
                        <a :href="item.url" target="_blank">
                            {{item.title}}
                        </a>
                    </p>
                    <small class="line-text">
                        {{item.time_ago}} by 
                        
                        <!-- <router-link
                        :to="`/user/${item.user}`"
                        class="line-text">
                        {{ item.domain }}
                        </router-link>
                         -->
                         <a :href="item.url">
                             {{ item.domain }}
                         </a>
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
        <!-- <p v-for="item in this.$store.state.jobs"> 
            <a :href="item.url" target="_blank">
                {{item.title}}
            </a>
            <small>
              {{item.time_ago}} by {{item.domain}}
            </small>
        </p> -->
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
