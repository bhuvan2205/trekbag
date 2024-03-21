import { useBearStore } from "../stores/itemsStore";
import Button from "./shared/Button";

const ButtonGroup = () => {
  const markAllComplete = useBearStore((state) => state.markAllComplete);
  const markAllInComplete = useBearStore((state) => state.markAllInComplete);
  const removeAllItems = useBearStore((state) => state.removeAllItems);
  const resetToInitial = useBearStore((state) => state.resetToInitial);

  return (
    <div className="button-group">
      <Button
        variant="secondary"
        text="Mark all as complete"
        onClick={markAllComplete}
      />
      <Button
        variant="secondary"
        text="Mark all as incomplete"
        onClick={markAllInComplete}
      />
      <Button
        variant="secondary"
        text="Reset to initial"
        onClick={resetToInitial}
      />
      <Button
        variant="secondary"
        text="Remove all items"
        onClick={removeAllItems}
      />
    </div>
  );
};

export default ButtonGroup;
