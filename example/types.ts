// This file generated by create-i18n-locale-resources script

import { ResourceKey } from 'i18next';

export enum Language {
  EN = 'en',
  RU = 'ru',
}

export type TranslationNS ='role'|
'date'|
'filter'|
'info-card'|
'select'|
'shared-filter'|
'table'|
'work-in-progress'|
'warning'|
'metric-prefix'|
'error-page'|
'invite-page'|
'login-page'|
'not-found-page'|
'reset-password-pages';

export interface Translation {
  [key: string]: {
    [key in TranslationNS]: ResourceKey;
  };
}
