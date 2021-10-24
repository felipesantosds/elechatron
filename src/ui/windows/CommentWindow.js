const electron = require("electron");
const { BrowserWindow } = electron;
const { paths } = require("../../utils/paths");

let commentWindow;

function create() {
    commentWindow = new BrowserWindow({
        width: 500,
        height: 300,
        title: "Adicionar comentário",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
}

function load() {
    commentWindow.loadFile(paths.commentPage);
}

function get() {
    return commentWindow;
}

function quit() {
    commentWindow.close();
}

module.exports.create = create;
module.exports.load = load;
module.exports.get = get;
module.exports.quit = quit;
