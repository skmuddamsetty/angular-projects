export interface Product {
  title: string;
  price: number;
  id: number;
  seqNo: number;
}

export function compareProducts(c1: Product, c2: Product) {
  const compare = c1.seqNo - c2.seqNo;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}
