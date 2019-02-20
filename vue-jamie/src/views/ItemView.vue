<template>
    <div>
        <section>
            <!-- 질문 상세 영역 -->
            <div class="user-container">
                <div>
                    <i class="fas fa-user"></i>
                </div>

                <div class="user-description">
                    <!-- :to="" 와 동일-->
                    <router-link 
                    v-bind:to="`/user/${fetchedItem.user}`"
                    >
                    {{fetchedItem.user}}
                    </router-link>
                    <div class="time">
                        {{fetchedItem.time_ago}}
                    </div>
                </div>
            </div>
            <h2>
                {{fetchedItem.title}}
            </h2>
        </section>

        <section>
            <!-- 질문 댓글 영역 -->
            <div v-html="fetchedItem.content">
            </div>
        </section>
<!-- 
        <p>
            computed 로 만들어서 접근
            title : {{commentItem.title}} 
        </p>
        <p>
            store 에 다이렉트 접근하여 가져오기
            user : {{this.$store.state.item.user}} 
        </p>
        <p>
            time_ago : {{fetchedItem.time_ago}}
        </p>
        <div>
            mapState 에 item 가져오기
            content : {{item.content}}
        </div> -->

    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapState(['item']),
        ...mapGetters(['fetchedItem']),
        commentItem(){
            return this.$store.state.item;
        }
    },
    created() {
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch('FETCH_ITEM', itemId);
    },
}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left: 8px;
}
.time{
    font-size: 0.7rem;
}
</style>
