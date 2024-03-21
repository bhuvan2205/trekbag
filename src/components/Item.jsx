import { useBearStore } from "../stores/itemsStore";

/* eslint-disable react/prop-types */
const Item = ({ item }) => {
  const deleteItem = useBearStore((state) => state.deleteItem);
  const toggleItem = useBearStore((state) => state.toggleItem);

  const { text, packed } = item || {};

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => toggleItem(item.id)}
        />
        {text}
      </label>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
