I18nManager = require('./i18n-manager');

const args = process.argv.slice(2);

const pathArgKey =  '--path'
const pathIndex = args.indexOf(pathArgKey)


const defaultBasePath = './example'

const basePath = pathIndex !== -1 && args.length > pathIndex ? args[pathIndex+1] : defaultBasePath;

const i18nManager = new I18nManager(basePath);
i18nManager.generateNSContent();
i18nManager.generateLanguageFiles();

