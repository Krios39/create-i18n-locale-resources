FileSystemHelper = require('./file-system-helper');

class I18nManager {
    constructor(basePath) {
        this.basePath = basePath;
    }

    #thisFileGenerateTitle = '// This file generated by create-locale-resources script\n\n';

    #getAllFilesInDirectory(directoryPath) {
        const files = FileSystemHelper.readFile(directoryPath);

        const jsonFiles = files
            .filter((file) => file.includes('.json'))
            .map((file) => ({ name: file, fullPath: `${directoryPath}/${file}` }));
        const directories = files.filter((file) => !file.includes('.'));

        if (directories.length > 0) {
            return jsonFiles.concat(
                directories.map((directory) => this.#getAllFilesInDirectory(`${directoryPath}/${directory}`)).flat()
            );
        }

        return jsonFiles;
    }

    getAllLocales() {
        const filesAndDirectories = FileSystemHelper.readFile(`${this.basePath}/locales`);

        return filesAndDirectories.filter((fileOrDirectory) => !fileOrDirectory.includes('.'));
    }

    #getFileNameWithoutExtension(file) {
        return file.replace('.json', '');
    }

    #camelize(s) {
        return s.replace(/-./g, (x) => x[1].toUpperCase());
    }

    #modifyPath(path, newLanguage) {
        const basePath = path.replace(this.basePath, '..');

        const regex = /\/([a-z]{2})\//;

        const match = basePath.match(regex);

        if (match) {
            const oldLanguage = match[1];
            return basePath.replace(`/${oldLanguage}/`, `/${newLanguage}/`);
        } else {
            return basePath;
        }
    }

    #getResourcesContent = (locales) => {
        const typesImports = "import { Language, Translation } from './types.ts';\n";

        const getResourcesImports = (locales) =>
            locales.map((locale) => `import { resources${locale.toUpperCase()} } from './resources/${locale}';\n`).join('');

        const getResources = () =>
            '\nexport const resources: Translation = {\n' +
            locales.map((locale) => `  [Language.${locale.toUpperCase()}]: resources${locale.toUpperCase()},\n`).join('') +
            '}\n';
        return this.#thisFileGenerateTitle + typesImports + getResourcesImports(locales) + getResources();
    };

    #getNSContent(localeFiles, allLocales) {
        const i18nImports = "import { ResourceKey } from 'i18next';\n";

        const getLanguageEnum = (locales) =>
            `\nexport enum Language {\n${locales
                .map((locale) => `  ${locale.toUpperCase()} = '${locale}',\n`)
                .join('')}}\n\n`;

        const getTranslationNS = (localeFiles) =>
            'export type TranslationNS =' +
            localeFiles
                .map(
                    (file, index) =>
                        `'${this.#getFileNameWithoutExtension(file.name)}'${index === localeFiles.length - 1 ? ';' : '|\n'}`
                )
                .join('');

        const translationInterface =
            '\n\nexport interface Translation {\n' +
            '  [key: string]: {\n' +
            '    [key in TranslationNS]: ResourceKey;\n' +
            '  };\n' +
            '}\n';

        return (
            this.#thisFileGenerateTitle +
            i18nImports +
            getLanguageEnum(allLocales) +
            getTranslationNS(localeFiles) +
            translationInterface
        );
    }

    #getLanguageContent(locale, allLocalFiles) {
        return (
            this.#thisFileGenerateTitle +
            allLocalFiles
                .map(
                    (file) =>
                        `import ${this.#camelize(
                            this.#getFileNameWithoutExtension(file.name)
                        )}${locale.toUpperCase()} from '${this.#modifyPath(file.fullPath, locale)}';`
                )
                .join('\n') +
            `\n\nexport const resources${locale.toUpperCase()} = {\n\t` +
            allLocalFiles
                .map(
                    (file, index) =>
                        `'${this.#getFileNameWithoutExtension(file.name)}': ${this.#camelize(
                            this.#getFileNameWithoutExtension(file.name)
                        )}${locale.toUpperCase()},${index !== allLocalFiles.length - 1 ? '\n\t' : '\n'}`
                )
                .join('') +
            '}\n'
        );
    }

    generateNSContent() {
        const allLocales = this.getAllLocales();
        const allLocalFiles = this.#getAllFilesInDirectory(`${this.basePath}/locales/${allLocales[0]}`);
        const folderName = this.basePath;

        FileSystemHelper.createFolderIfNotExist(folderName);
        FileSystemHelper.writeFile(`${folderName}/resource.ts`, this.#getResourcesContent(allLocales));
        FileSystemHelper.writeFile(`${folderName}/types.ts`, this.#getNSContent(allLocalFiles, allLocales));
    }

    generateLanguageFiles() {
        const allLocales = this.getAllLocales();
        const allLocalFiles = this.#getAllFilesInDirectory(`${this.basePath}/locales/${allLocales[0]}`);

        allLocales.forEach((locale) => {
            const resourcesFolder = `${this.basePath}/resources/`;
            FileSystemHelper.createFolderIfNotExist(resourcesFolder);
            FileSystemHelper.writeFile(`${resourcesFolder}${locale}.ts`, this.#getLanguageContent(locale, allLocalFiles));
        });
    }
}

module.exports = I18nManager;
