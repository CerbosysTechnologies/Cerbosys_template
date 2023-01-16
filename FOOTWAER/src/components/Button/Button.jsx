

const Button = ({ titel, className }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: "#222222",
          color: "#FFF",
          padding: "10px 40px",
          borderRadius: "25px",
          border: "none",
        }}
        className={className}
      >
        {titel}
      </button>
    </>
  );
};
export default Button;
