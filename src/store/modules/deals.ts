import { Commit } from "vuex/types/index.js";
import { useRouter } from 'vue-router';

import deals from "../../services/deals";


export default {
    namespaced: true,
    state: {
        data: [],
        deal: false,
        loading: false,
    },
    mutations: {
        SET_DATA(state: any, data: any) {
            state.data = data;
        },
        SET_MORE_DATA(state: any, data: any) {
            state.data.push(...data);
        },
        SET_DEAL(state: any, deal: any) {
            state.deal = deal;
        },
        SET_LOADING(state: any, loading: any) {
            state.loading = loading;
        }
    },
    actions: {
        async fetchData({ commit }: { commit: Commit }, params: any) {
            const router = useRouter();
            try {
                commit('SET_LOADING', true);
                const response = await deals.fetchDeals(params);
                if (parseInt(params.page) > 1) {
                    commit('SET_MORE_DATA', response.data);
                } else {
                    commit('SET_DATA', response.data);
                }
                commit('SET_LOADING', false);
            } catch (error) {
                router.push('/error');
            }
        },
        async fetchDataById({ commit }: { commit: Commit }, params: any) {
            const router = useRouter();
            try {
                const router = useRouter();
                try {
                    commit('SET_LOADING', true);
                    const response = await deals.fetchDealsById(params);
                    console.log(response)
                    commit('SET_DEAL', response.data);
                    commit('SET_LOADING', false);
                } catch (error) {
                    router.push('/error');
                }
            } catch (error) {
                router.push('/error');
            }
        }
    },
};