export interface IStoreItem {
  id: string;
  title: string;
  text: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
  cartQuantity: number;
}

export interface IInitialState {
  cartState: boolean;
  cartItems: IStoreItem[] | [];
  cartTotalAmount: number;
  cartTotalQantity: number;
}

export interface IReducerAction {
  type: string;
  payload: IStoreItem;
}

export interface IGlobalContext {
  breakpoint: number;
  isNavActive: boolean;
  storeState: IInitialState;
  toggleCart: () => void;
  addItem: (value: IStoreItem) => void;
  removeItem: (value: IStoreItem) => void;
  deleteItem: (value: IStoreItem) => void;
  clearCartItems: () => void;
}

export interface IHeroapi {
  title: string;
  subtitle: string;
  img: string;
  btntext: string;
  videos: {
    imgsrc: string;
    clip: string;
  }[];
  sociallinks: {
    icon: string;
    link: string;
    name: string;
  }[];
}

export interface ISales {
  title: string;
  items: {
    id: string;
    title: string;
    text: string;
    rating: string;
    btn: string;
    img: string;
    price: string;
    color: string;
    shadow: string;
  }[];
}

export interface IHighlight {
  heading: string;
  title: string;
  text: string;
  btn: string;
  url: string;
  img: string;
}

export interface INews {
  title: string;
  text: string;
  img: string;
  url: string;
  like: string;
  time: string;
  by: string;
  btn: string;
}

export interface IStory {
  title: string;
  news: INews[];
}

export interface IFooterAPI {
  titles: {
    title: string;
  }[];
  links: {
    link: string;
  }[][];
}
