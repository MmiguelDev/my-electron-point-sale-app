import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar({ toggleSidebar }) {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#ffffff",
        color: "#000000",
        borderBottom: "1px solid #dee2e6",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          onClick={toggleSidebar}
          aria-label="menu"
          sx={{ mr: 2, color: "#000000" }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" noWrap>
            Punto de Venta y Gestión de Inventario
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
