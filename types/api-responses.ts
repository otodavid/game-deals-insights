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
