import { Button } from "@mui/material";

function SMButton(props) {
  const { label, onClick, disabled, variant } = props;
  return (
    <>
      <Button
        onClick={onClick}
        disabled={disabled}
        style={{background: "purple",border: "none", color: "white",padding: "15px 32px",textAlign: "center", textDecoration: "none", display: "inline-block",fontSize: "15px", borderRadius: "25px" , fontFamily: "Rowdies  cursive" }}
      >
        {label}
      </Button>
    </>
  );
}
export default SMButton;
