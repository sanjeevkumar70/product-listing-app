import "./ErrorMessage.css";

export default function ErrorMessage({
  message = "Something went wrong. Please try again."
}) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>

      <h3>Oops!</h3>

      <p>{message}</p>
    </div>
  );
}