/* eslint-disable react/prop-types */
const Button = ({ text, type = "button", variant = "primary", onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${variant === "secondary" && "btn--secondary"}`}
    >
      {text}
    </button>
  );
};

export default Button;
