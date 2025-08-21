export default function ItemAction({ id, deleteItem }) {
    return (
      <button
        onClick={() => deleteItem(id)}
        style={{ background: "red", color: "white", marginTop: "0.5rem" }}
      >
        Delete
      </button>
    );
  }
  