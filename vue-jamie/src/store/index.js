import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({//vuex 는 상태관리 도구
    //state -> actions -> mutations
    state:{
        news:[],
        jobs:[],
        ask:[],
        user: {},
        item: {},
    },
    getters:{
        fetchedAsk(state){
            return state.ask;
        },
        fetchedUserInfo(state){
            return state.user;
        },
        fetchedItem(state){
            return state.item;
        }

    },
    actions,
    /*actions.js 로 이동
    actions:{
        
        FETCH_NEWS(context){//actions 에 context 가 항상 인자로 받을 수 있음
            fetchNewsList()
            .then(res => context.commit('SET_NEWS',res.data))//context.commit 으로 mutations 에 전달
            .catch(err => console.log('FETCH_NEWS error : ',err))
        },
        FETCH_JOBS({commit}){//actions 에 context 가 항상 인자로 받을 수 있음
            fetchJobsList()
            .then(({data})=>{
                commit('SET_JOBS',data);
                })//context.commit 으로 mutations 에 전달
            .catch(err => console.log('FETCH_JOBS error : ',err))
        },
        FETCH_ASK({commit}){//actions 에 context 가 항상 인자로 받을 수 있음
            fetchAskList()
            .then(({data}) => commit('SET_ASK',data))//context.commit 으로 mutations 에 전달
            .catch(err => console.log('FETCH_ASK error : ',err))
        }
       
    }, 
    */
    mutations,
    // mutations.js 로 이동
    /*
    mutations:{
        SET_NEWS(state, news){//mutations 에서 인자값으로 state, 와 받아온 값으로 state에 값 셋팅
            state.news = news
        },
        SET_JOBS(state, jobs){//mutations 에서 인자값으로 state, 와 받아온 값으로 state에 값 셋팅
            state.jobs = jobs
        },
        SET_ASK(state, ask){
            state.ask = ask
        }
    }
    */
    
})
