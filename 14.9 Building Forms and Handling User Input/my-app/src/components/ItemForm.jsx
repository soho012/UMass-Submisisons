import { useState } from "react";

export default function ItemForm({ addItem }) {
  const [form, setForm] = useState({ name: "", quantity: "", purpose: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!form.name) newErrors.name = "Required";
    if (!form.quantity) newErrors.quantity = "Required";
    if (!form.purpose) newErrors.purpose = "Required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addItem(form);
      setForm({ name: "", quantity: "", purpose: "" }); // reset
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <div>
        <input
          name="name"
          placeholder="Item Name"
          value={form.name}
          onChange={handleChange}
          style={{ borderColor: errors.name ? "red" : "black" }}
        />
        {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
      </div>
      <div>
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          style={{ borderColor: errors.quantity ? "red" : "black" }}
        />
        {errors.quantity && <span style={{ color: "red" }}> {errors.quantity}</span>}
      </div>
      <div>
        <input
          name="purpose"
          placeholder="Purpose"
          value={form.purpose}
          onChange={handleChange}
          style={{ borderColor: errors.purpose ? "red" : "black" }}
        />
        {errors.purpose && <span style={{ color: "red" }}> {errors.purpose}</span>}
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}
