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


export interface GameInfo {
    storeID: string;
    name: string;
    salePrice: string;
    retailPrice: string;
    steamRatingText: string;
    steamRatingPercent: string;
    steamRatingCount: string;
    releaseDate: number;
    thumb: string;
    dealId: string;
}

export interface CheaperStore {
    dealID: string;
    storeID: string;
    salePrice: string;
    retailPrice: string;
}

export interface CheapestPrice {
    price: string;
    date: number;
}

export interface GameData {
    gameInfo: GameInfo;
    cheaperStores: CheaperStore[];
    cheapestPrice: CheapestPrice;
}