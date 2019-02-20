import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItemInfo } from '../api/index.js';
export default{
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
    },
    FETCH_USER({commit}, name){
        fetchUserInfo(name)
        .then(({data}) => commit('SET_USER',data))
        .catch(err => console.log('FETCH_USER error :', err))
    },
    FETCH_ITEM({commit}, id){
        fetchCommentItemInfo(id)
        .then(({data}) => commit('SET_ITEM',data))
        .catch(err => console.log('FETCH_ITEM error :', err))
    },

}