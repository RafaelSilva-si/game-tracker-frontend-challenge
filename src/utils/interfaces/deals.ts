export interface GameDeal {
    internalName: string;
    title: string;
    dealID: string;
    salePrice: string;
    normalPrice: string;
    savings: string;
    thumb: string;
}


export interface Payload {
    title: string,
    page: number,
    sortBy: string
}
