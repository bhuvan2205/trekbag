import { useBearStore } from "../stores/itemsStore";

const Counter = () => {
  const items = useBearStore((state) => state.items);
  const itemsCount = items.length;
  const packedItems = items?.filter((item) => !!item.packed).length;
  return (
    <p>
      <b>{packedItems}</b> / {itemsCount} items packed
    </p>
  );
};

export default Counter;
