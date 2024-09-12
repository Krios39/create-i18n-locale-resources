# create-i18n-locale-resources

This package uses for create resources files for 118n with 1 simple command ([i18next version](https://www.npmjs.com/package/i18next))
## Installation
`npm i create-i18n-locale-resources`

## Usage
For the script to work, you need to have a `locales` directory in your project with subdirectories for languages that already contain files with localizations, for example like this _(the nesting level of files with localizations does not matter)_. For example like this:
```
├───locales
│   ├───en
│   │   ├───abac
│   │   │       role.json
│   │   ├───common
│   │   │       date.json
│   │   ├───components
│   │   │   │   filter.json
│   │   │   │   info-card.json
│   │   │   │   select.json
│   │   │   │   shared-filter.json
│   │   │   │   table.json
│   │   │   │   work-in-progress.json
│   │   │   │
│   │   │   └───modals
│   │   │           warning.json
│   │   ├───helpers
│   │   │       metric-prefix.json
│   │   └───pages
│   │           error-page.json
│   │           invite-page.json
│   │           login-page.json
│   │           not-found-page.json
│   │           reset-password-pages.json
│   └───ru
│       ├───abac
│       │       role.json
│       ├───common
│       │       date.json
│       ├───components
│       │   │   filter.json
│       │   │   info-card.json
│       │   │   select.json
│       │   │   shared-filter.json
│       │   │   table.json
│       │   │   work-in-progress.json
│       │   └───modals
│       │           warning.json
│       ├───helpers
│       │       metric-prefix.json
│       └───pages
│               error-page.json
│               invite-page.json
│               login-page.json
│               not-found-page.json
│               reset-password-pages.json
```
then you run the command

`create-i18n-locale-resources --path path-for-directory-with-locales-subdirectory`

you can also add a `-not-types` flag if you doesn't want to create NS types

and after this you get next directory structure
```
├───locales
│   ├───...
├───resources       // directory with all your languages
│       en.ts       // file with resources for each language
│       ru.ts
│   resource.ts     // file with object resources for yours i18n
│   types.ts        // file with your translation types
```
