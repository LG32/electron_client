'use strict'

import { app, BrowserWindow, ipcMain } from 'electron'
const path = require('path')
const {resolve} = require('path')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

// 指定 flash 路径，假定它与 main.js 放在同一目录中。
// let pluginName
// switch (process.platform) {
//   case 'win32':
//     pluginName = 'pepflashplayer.dll'
//     break
//   // case 'darwin':
//   //   pluginName = 'PepperFlashPlayer.plugin'
//   //   break
//   // case 'linux':
//   //   pluginName = 'libpepflashplayer.so'
//   //   break
// }
// eslint-disable-next-line no-undef
const flashplayer = resolve(__dirname, 'pepflashplayer.dll')
app.commandLine.appendSwitch('ppapi-flash-path', flashplayer)
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.238')

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 850,
    useContentSize: true,
    width: 1200,
    frame: false,
    // fullscreen: true
    webPreferences: {
      plugins: true,
      webSecurity: false
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
ipcMain.on('min', e => mainWindow.minimize())
ipcMain.on('max', e => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow.maximize()
  }
})
ipcMain.on('close', e => mainWindow.close())
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
