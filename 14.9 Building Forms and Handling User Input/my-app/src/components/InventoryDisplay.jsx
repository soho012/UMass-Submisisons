import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

export default function InventoryDisplay({ items, deleteItem }) {
  if (items.length === 0) return <p>No items yet. Add something!</p>;

  return (
    <div>
      <h2>🛠 Inventory</h2>
      {items.map((item) => (
        <div key={item.id} style={{ margin: "1rem 0" }}>
          <ItemCard item={item} />
          <ItemAction id={item.id} deleteItem={deleteItem} />
        </div>
      ))}
    </div>
  );
}
