import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} />

      <Box sx={{ flex: 1, p: 3, backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4" gutterBottom>
          Dashboard - Sistema POS
        </Typography>
        <Typography variant="body1">
          Haz clic en el menú hamburguesa para ver todas las opciones.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#1976d2", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Ventas del Día</Typography>
                <Typography variant="h4">$0.00</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#2e7d32", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Productos</Typography>
                <Typography variant="h4">0</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#ed6c02", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Clientes</Typography>
                <Typography variant="h4">0</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#0288d1", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Órdenes</Typography>
                <Typography variant="h4">0</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Layout;
