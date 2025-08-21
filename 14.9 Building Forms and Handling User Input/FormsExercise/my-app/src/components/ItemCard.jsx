export default function ItemCard({ item }) {
    return (
      <div style={{ border: "1px solid gray", padding: "0.5rem" }}>
        <p><strong>Name:</strong> {item.name}</p>
        <p><strong>Quantity:</strong> {item.quantity}</p>
        <p><strong>Purpose:</strong> {item.purpose}</p>
      </div>
    );
  }
  