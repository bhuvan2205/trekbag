import { useContext } from "react";
import { ItemContext } from "../context/ItemContextProvider";

const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("Consumer should be wrapped inside the Provider!");
  }
  return context;
};

export default useItemContext;
