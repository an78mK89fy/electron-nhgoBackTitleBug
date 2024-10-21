const { app, BrowserWindow, Menu } = require('electron')

app.whenReady().then(() => {
    const window = new BrowserWindow({
        width: 800,
        height: 600
    })
    window.loadFile('index.html')

    const menu = Menu.buildFromTemplate([
        {
            label: 'goBack', click() {
                window.webContents.navigationHistory.goBack()
            }
        }
    ])
    Menu.setApplicationMenu(menu)

    window.on('ready-to-show', () => {
        window.setTitle('main.js set Title')
    })
})