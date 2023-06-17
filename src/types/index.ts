export interface IItem {
  id: string;
  title: string;
  text: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
  cartQuantity: number;
}

export interface IStore {
  cartState: boolean;
  cartItems: IItem[] | [];
  cartTotalAmount: number;
  cartTotalQantity: number;
}

export type TGContext = {
  breakpoint?: number;
  isNavActive?: boolean;
  toggleCart?: () => void;
  addItem?: (value: IItem) => void;
  removeItem?: (value: IItem) => void;
  deleteItem?: (value: IItem) => void;
  clearCartItems?: () => void;
  state?: IStore;
};

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
