const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    title: 'Punto de Venta - Sistema de Inventario',
    backgroundColor: '#ffffff',
    show: false // No mostrar hasta que esté listo
  });

  // Mostrar ventana cuando esté lista
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // IMPORTANTE: Determinar si estamos en desarrollo o producción
  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

  if (isDev) {
    // En desarrollo: carga desde Vite dev server
    console.log('Modo desarrollo - Cargando desde http://localhost:5173');
    mainWindow.loadURL('http://localhost:5173').catch(err => {
      console.error('Error al cargar URL:', err);
      // Si falla, mostrar un mensaje
      mainWindow.loadURL(`data:text/html,<h1>Error: No se pudo conectar al servidor de desarrollo</h1><p>Asegúrate de que Vite esté corriendo en http://localhost:5173</p><p>Ejecuta: npm run dev</p>`);
    });
    
    // Abrir DevTools automáticamente en desarrollo
    mainWindow.webContents.openDevTools();
  } else {
    // En producción: carga desde archivos compilados
    console.log('Modo producción - Cargando desde archivos locales');
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    mainWindow.loadFile(indexPath).catch(err => {
      console.error('Error al cargar archivo:', err);
    });
  }

  // Logging útil para debugging
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Fallo al cargar:', errorCode, errorDescription);
  });

  mainWindow.webContents.on('did-finish-load', () => {
    console.log('Página cargada correctamente');
  });

  // Evento cuando la ventana se cierra
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Ejecutar cuando Electron esté listo
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Cerrar la aplicación cuando todas las ventanas estén cerradas
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Manejar errores
process.on('uncaughtException', (error) => {
  console.error('Error no capturado:', error);
});