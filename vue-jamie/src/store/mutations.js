export default{
    SET_NEWS(state, news){//mutations 에서 인자값으로 state, 와 받아온 값으로 state에 값 셋팅
        state.news = news
    },
    SET_JOBS(state, jobs){//mutations 에서 인자값으로 state, 와 받아온 값으로 state에 값 셋팅
        state.jobs = jobs
    },
    SET_ASK(state, ask){
        state.ask = ask
    },
    SET_USER(state, user){
        state.user = user
    },
    SET_ITEM(state, item){
        state.item = item
    },
}