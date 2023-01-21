import { Button } from "@mui/material";

export default function ReusableButton({
  variant,
  color,
  size,
  disabled,
  content,
  handleButtonClick,
}) {
  return (
    <Button 
        variant={variant} 
        color={color} 
        size={size} 
        disabled={disabled}
        onClick={handleButtonClick}
        >
      {content}
    </Button>
  );
}
