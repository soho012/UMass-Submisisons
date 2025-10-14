import NavigateBackButton from "../components/NavigateBackButton";

export default function ContentPage({ title, content }) {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <NavigateBackButton />
    </div>
  );
}
