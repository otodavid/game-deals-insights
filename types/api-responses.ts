export interface ITADPrice {
  amount: number;
  currency: string;
}

export interface ITADShop {
  id: number;
  name: string;
}

export interface ITADDeal {
  shop: ITADShop;
  price: ITADPrice;
  regular: ITADPrice;
  cut: number;
  url: string;
}

export interface ITADAssets {
  boxart: string;
  banner400: string;
  banner600: string;
}

export interface ITADGame {
  id: string;
  title: string;
  type: string;
  assets: ITADAssets;
  deal: ITADDeal;
}

export interface ITADDealsResponse {
  list: ITADGame[];
  hasMore: boolean;
  nextOffset: number;
}

export interface ITADPriceHistory {
  all?: ITADPrice;
  y1?: ITADPrice;
  m3?: ITADPrice;
}

export interface ITADDealDetail {
  shop: ITADShop;
  expiry: string | null;
  url: string;
}
export interface ITADGameDealDetail {
  id: string;
  historyLow: ITADPriceHistory;
  deals: ITADDealDetail[];
}

export interface ITADShopDetail {
  id: number;
  name: string;
  deals: number;
}
