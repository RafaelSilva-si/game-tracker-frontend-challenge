import { Commit } from "vuex/types/index.js";
import deals from "../../services/deals";

export default {
    namespaced: true,
    state: {
        data: [],
        error: false
    },
    mutations: {
        SET_DATA(state: any, data: any) {
            state.data = data;
        },
        SET_MORE_DATA(state: any, data: any) {
            state.data.push(...data);
            console.log(state.data)
        },
        SET_ERROR(state: any, error: any) {
            state.error = error;
        }
    },
    actions: {
        async fetchData({ commit }: { commit: Commit }, params: any) {
            try {
                const response = await deals.fetchDeals(params);
                if (parseInt(params.page) > 1) {
                    commit('SET_MORE_DATA', response.data);
                } else {
                    commit('SET_DATA', response.data);
                }
            } catch (error) {
                commit('SET_ERROR', error);
            }
        }
    },
};