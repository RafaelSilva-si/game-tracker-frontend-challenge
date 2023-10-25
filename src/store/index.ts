import { createStore } from 'vuex'
import deals from './modules/deals'


export const store = createStore({
    modules: {
        deals,
    },
})