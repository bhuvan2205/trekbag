import { useMemo, useState } from "react";
import Item from "./Item";
import EmptyView from "./ui/EmptyView";
import Select from "react-select";
import { useBearStore } from "../stores/itemsStore";

const ItemList = () => {
  const items = useBearStore((state) => state.items);

  const options = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Sort by packed" },
    { value: "unpacked", label: "Sort by unpacked" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const sortedItems = useMemo(() => {
    return [...items]?.sort((a, b) => {
      if (selectedOption === "packed") {
        return b.packed - a.packed;
      }

      if (selectedOption === "unpacked") {
        return a.packed - b.packed;
      }

      return;
    });
  }, [items, selectedOption]);
  return (
    <>
      <ul className="item-list">
        {items?.length > 0 && (
          <section className="sorting">
            <Select
              defaultValue={options?.at(0)?.value}
              onChange={(e) => setSelectedOption(e.value)}
              options={options}
            />
          </section>
        )}
        {items?.length ? (
          sortedItems?.map((item) => <Item item={item} key={item.id} />)
        ) : (
          <EmptyView />
        )}
      </ul>
    </>
  );
};

export default ItemList;
