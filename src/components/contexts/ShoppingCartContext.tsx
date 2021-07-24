import { createContext, useEffect, useState } from "react";
import getProductsFree from "../service/productsFree";
import getProductsBelow from "../service/productsBelow10";

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export type ShoppingCartContextType = {
  items: Product[];
  loading: boolean;
  handleRemoveProduct: (product: Product) => void;
  changeApi: () => void;
};

export type Product = {
  imageUrl: string;
  price: number;
  sellingPrice: number;
  name: string;
  id: number;
};

export default function ShoppingCartProvider({ children }: any) {
  const [items, setItems] = useState<Product[]>([]);
  const [isBelow10, setIsBelow10] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsFree()
      .then((data) => {
        setItems(data.items);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  function handleRemoveProduct(product: Product) {
    setItems((prev) => prev.filter((p) => p.id !== product.id));
  }

  function getBelow() {
    getProductsBelow()
      .then((data) => {
        setItems(data.items);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function getFree() {
    getProductsFree()
      .then((data) => {
        setItems(data.items);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function changeApi() {
    setLoading(true);
    if (isBelow10) {
      getFree();
    } else {
      getBelow();
    }
    setIsBelow10((prev) => !prev);
  }

  useEffect(() => {
    if (items.length > 0) setLoading(false);
  }, [items]);

  return (
    <ShoppingCartContext.Provider
      value={{ items, loading, handleRemoveProduct, changeApi }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
