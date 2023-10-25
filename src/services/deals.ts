import HTTPInstance from "../utils/http-client";
import { Payload } from "../utils/interfaces/deals";

export default {
    fetchDeals: ({ title, page, sortBy }: Payload) => {
        const queryParams = {
            title,
            pageNumber: page,
            sortBy: sortBy === 'higher-price' ? 'Price' : sortBy,
            desc: sortBy === 'higher-price' && '1'
        };

        return HTTPInstance.get('deals', { params: queryParams })
    },
    fetchDealsById: (params: { dealsID: string }) => {
        return HTTPInstance.get('deals', { params: { id: params.dealsID } })
    }
}