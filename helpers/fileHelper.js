let HelperBase = require('./HelperBase'),
    fs = require('fs');

class FileHelper extends HelperBase {
    constructor() {
        super();
    }

    getFileByExtension(extension) {
        this.logger.debug('Searching file by extension: ', extension);
        this.sleep.call(this, 2);
        let files = fs.readdirSync(this.downloadsFolder).filter(function (file) {
            return file.split(".")[file.split(".").length - 1] === extension;
        });
        if (files.length != 0) return files[0];
        else throw "File " + extension + " hasn't been downloaded"
    }

    getFileCreationDate(filename) {
        return this.getFileProperty(filename, 'ctime');
    };

    getFileSizeInBytes(filename) {
        return this.getFileProperty(filename, 'size');
    };

    /** Returns specified file property. Will return undefined is property doesn`t exist.
     *
     * @param filename{String} - Full path to the file + name + extension
     * @param propertyName{String} - Property name. See nodejs.org/api/fs.html#fs_class_fs_stats
     * @returns {*}
     */
    getFileProperty(filename, propertyName) {
        let properties = fs.statSync(this.downloadsFolder + filename),
            property = properties[propertyName];

        this.logger.debug(propertyName + ' : ' + property + ', File: [' + filename + ']');
        return property;
    };

    deleteFolderRecursively(pathway) {
        this.logger.debug('Removing folder: ', pathway);
        if (fs.existsSync(pathway)) {
            fs.readdirSync(pathway).forEach(function (file, index) {
                var curPath = pathway + "/" + file;
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                    this.deleteFolderRecursively(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            }.bind(this));
            fs.rmdirSync(pathway);
        }
    };

    /** Returns array of file names with specified extension from specified folder.
     *
     * @param pathway{String} - Full path to the folder + folder name
     * @param type{String} - File extension: png, svg, pdf etc. With no dot.
     * @returns {Array<String>} - Array of file names only.
     */
    getFilesOfSpecificTypeFromFolder(pathway, type) {
        this.logger.debug('Looking for .' + type + ' files in ' + pathway);
        return this.getArrayOfFileNamesInFolder(pathway).filter(function (number) {
            return number.split(".")[1] === type.toLowerCase();
        });
    };

    getArrayOfFileNamesInFolder(pathway) {
        return fs.readdirSync(pathway);
    };

    isFileDownloaded(file) {
        this.sleep.call(this, 2);
        return this.getArrayOfFileNamesInFolder(this.downloadsFolder).filter(function (name) {
                this.logger.trace("File present in folder: " + name);
                return name === file;
            }.bind(this)).length === 1;
    };

    /**
     * Hash objects cannot be reused therefore module 'crypto' is required inside function;
     * @param file
     * @returns {String | Md5 hash}
     */
    checkSum(file) {
        this.logger.debug('Generating md5 hash for File: ' + file);
        var data = fs.readFileSync(this.downloadsFolder + file);
        return require('crypto').createHash('md5').update(data, 'utf8').digest('hex');
    };
}

module.exports = new FileHelper();