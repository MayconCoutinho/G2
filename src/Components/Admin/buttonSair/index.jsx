import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../../routes/coordinator";

export const ButtonSair = () => {
  const navigate = useNavigate();
  const Sair = () => {
    localStorage.removeItem("tokenPassword");
    localStorage.removeItem("tokenName");
    goToLogin(navigate);
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{
          background: "#5a5a5a",
          borderRadius: 1,
          marginTop: 0.8,
          marginBottom: 0.8,
          "&:hover": {
            backgroundColor: "#b4b4b44b",
          },
          fontSize: "14px",
          color: "#fff",
        }}
        onClick={() => {
          Sair();
        }}
      >
        Sair
      </Button>
    </>
  );
};
