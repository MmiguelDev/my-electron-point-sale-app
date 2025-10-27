import { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";

function Sidebar({ show, onClose }) {
  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { id: "home", icon: <HomeIcon />, label: "Home" },
    { id: "reportes", icon: <AssessmentIcon />, label: "Reportes" },
    { id: "compras", icon: <ShoppingBagIcon />, label: "Compras" },
    { id: "inventario", icon: <Inventory2Icon />, label: "Inventario" },
    { id: "pos", icon: <PointOfSaleIcon />, label: "Punto de Venta" },
    { id: "clientes", icon: <PeopleIcon />, label: "Clientes" },
    { id: "config", icon: <SettingsIcon />, label: "Configuración" },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    console.log(`Navegando a: ${itemId}`);
  };

  return (
    <Drawer
      anchor="left"
      open={show}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          backgroundColor: "#f8f9fa",
        },
      }}
    >
      {/* Header del Sidebar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          borderBottom: "1px solid #dee2e6",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h6" sx={{ color: "#000000" }}>
          Menú
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Lista de opciones */}
      <List sx={{ mt: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            selected={activeItem === item.id}
            onClick={() => handleItemClick(item.id)}
            sx={{
              mx: 1,
              borderRadius: "8px",
              color: activeItem === item.id ? "#155DFC" : "#495057",
              backgroundColor: activeItem === item.id ? "#1976d2" : "transparent",
              "&:hover": {
                backgroundColor:
                  activeItem === item.id ? "#1565c0" : "rgba(0,0,0,0.04)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ListItemIcon
              sx={{
                color: activeItem === item.id ? "#155DFC" : "#495057",
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
