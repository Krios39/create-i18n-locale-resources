#!/usr/bin/env node

I18nManager = require('./i18n-manager');

const FLAGS = {
    notCreateTranslationNSTypes: "-not-types"
}

const args = process.argv.slice(2);

const pathArgKey = '--path'
const pathIndex = args.indexOf(pathArgKey)

const defaultBasePath = './example'
const path = args[pathIndex + 1]

if (pathIndex !== -1 && path === undefined) {
    throw new Error('Not Found Path!')
}

const basePath = pathIndex !== -1 && args.length > pathIndex ? args[pathIndex + 1] : defaultBasePath;

const createTranslationNSTypes = !args.some(arg => arg === FLAGS.notCreateTranslationNSTypes);

const i18nManager = new I18nManager(basePath);
i18nManager.generateNSContent(createTranslationNSTypes);
i18nManager.generateLanguageFiles();

