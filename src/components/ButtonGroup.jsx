import Button from "./shared/Button";
import useItemContext from "../hooks/useItemContext";

const ButtonGroup = () => {
  const { onRemoveAllItems, onReset, onMarkAllInComplete, onMarkAllComplete } =
    useItemContext();
  return (
    <div className="button-group">
      <Button
        variant="secondary"
        text="Mark all as complete"
        onClick={onMarkAllComplete}
      />
      <Button
        variant="secondary"
        text="Mark all as incomplete"
        onClick={onMarkAllInComplete}
      />
      <Button variant="secondary" text="Reset to initial" onClick={onReset} />
      <Button
        variant="secondary"
        text="Remove all items"
        onClick={onRemoveAllItems}
      />
    </div>
  );
};

export default ButtonGroup;
