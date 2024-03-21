import { createContext, useEffect, useState } from "react";
import { initialList } from "../lib/constants";

export const ItemContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialList
  );

  const handleAddItem = (itemText) =>
    setItems((prevState) => [
      ...prevState,
      {
        text: itemText,
        packed: false,
        id: new Date()?.getTime(),
      },
    ]);

  const handleDeleteItem = (id) =>
    setItems((prevState) => prevState.filter((item) => item.id !== id));

  const handleToggleItem = (id) =>
    setItems((items) =>
      items?.map((item) =>
        item?.id === id ? { ...item, packed: !item?.packed } : item
      )
    );

  const handleMarkAllComplete = () =>
    setItems((prevState) =>
      prevState.map((item) => ({ ...item, packed: true }))
    );

  const handleMarkAllInComplete = () =>
    setItems((prevState) =>
      prevState.map((item) => ({ ...item, packed: false }))
    );

  const handleReset = () => setItems(initialList);

  const handleRemoveAll = () => setItems([]);

  const itemsCount = items?.length;

  const packedItems = items.filter((item) => item.packed)?.length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider
      value={{
        items,
        itemsCount,
        handleAddItem,
        handleDeleteItem,
        handleMarkAllComplete,
        handleMarkAllInComplete,
        handleRemoveAll,
        handleReset,
        handleToggleItem,
        packedItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
