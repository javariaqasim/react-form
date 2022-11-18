import { TextField } from "@mui/material";


function SMInput(props) {
  const { label, onChange, value, type, disabled, required, placeholder } = props;
  return (
    <TextField
      fullWidth={true}
      // variant="standard"
      disabled={disabled}
      placeholder={placeholder}
      label={label}
      value={value}
      type={type}
      required={required}
      onChange={onChange}
      style={{width: "70%", background:"white", borderRadius: "10px", boxSizing:" border-box",
      border: "none", height: "55px"}}
    
    />
  );
}
export default SMInput;
