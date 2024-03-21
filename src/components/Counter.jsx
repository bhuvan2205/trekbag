import useItemContext from "../hooks/useItemContext";

const Counter = () => {
  const { itemsCount, packedItems } = useItemContext();
  return (
    <p>
      <b>{packedItems}</b> / {itemsCount} items packed
    </p>
  );
};

export default Counter;
