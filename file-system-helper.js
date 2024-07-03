fs = require('fs');

class FileSystemHelper {
    static createFolderIfNotExist(folderName) {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
    }

    static writeFile(filePath, content) {
        try {
            fs.writeFileSync(filePath, content);
        } catch (err) {
            console.error(err);
        }
    }

    static readFile(path) {
        return fs.readdirSync(path);
    }
}

module.exports = FileSystemHelper;
