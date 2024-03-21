/* eslint-disable react/prop-types */
const Item = ({ item, onChangeItem, onDeleteItem }) => {
  const { text, packed } = item || {};

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => onChangeItem(item.id)}
        />
        {text}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
