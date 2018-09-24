export interface Product {
  _id: string;
  name: string;
  storeId: string;
}

export const defaultProduct = <Product>{
  _id: '',
  name: '',
  storeId: '',
};
