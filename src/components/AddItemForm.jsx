import { useRef, useState } from "react";
import Button from "./shared/Button";
import { useBearStore } from "../stores/itemsStore";

const AddItemForm = () => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef(null);
  const addItem = useBearStore((state) => state.addItem);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Field cannot be empty!");
      inputRef.current.focus();
      return;
    }

    addItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
        ref={inputRef}
      />
      <Button text="Add to list" type="submit" />
    </form>
  );
};

export default AddItemForm;
