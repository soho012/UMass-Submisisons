import { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

export default function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  // Add item to inventory
  const addItem = (item) => {
    setInventory((prev) => [...prev, { ...item, id: Date.now() }]);
  };

  // Delete item by ID
  const deleteItem = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🚀 Spacecraft Builder</h1>
      <ItemForm addItem={addItem} />
      <InventoryDisplay items={inventory} deleteItem={deleteItem} />
    </div>
  );
}
