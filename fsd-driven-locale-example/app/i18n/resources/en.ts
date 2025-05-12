import { contentEn } from '@/entities/content';
import { contentInSessionEn } from '@/entities/contentInSession';
import { headsetEn } from '@/entities/headset';
import { headsetInSessionEn } from '@/entities/headsetInSession';
import { sessionEn } from '@/entities/session';

import { accountEn } from '@/features/account';
import { authEn } from '@/features/auth';
import { headsetCommandsEn } from '@/features/headsetCommands';
import { sessionControlEn } from '@/features/sessionControl';

import { authLayoutEn } from '@/widgets/AuthLayout';
import { contentPlayerEn } from '@/widgets/ContentPlayer';
import { mainLayoutEn } from '@/widgets/MainLayout';
import { storageFreeSpaceEn } from '@/widgets/StorageFreeSpace';
import { uploadContentOnHeadsetsButtonEn } from '@/widgets/UploadContentOnHeadsetsButton';
import { userMenuEn } from '@/widgets/UserMenu';

import { accountPageEn } from '@/pages/account';
import { contentsPageEn } from '@/pages/contents';
import { errorPageEn } from '@/pages/error';
import { headsetsPageEn } from '@/pages/headsets';
import { loginPageEn } from '@/pages/login';
import { notFoundPageEn } from '@/pages/notFound';
import { registerPageEn } from '@/pages/register';
import { sessionPageEn } from '@/pages/session/ui/locales/en';
import { sessionsPageEn } from '@/pages/sessions';

import { headsetLinkingEn } from '@/fsd-driven-locale-example/features/headsetLinking';
import { uploadEn } from '@/fsd-driven-locale-example/features/upload';

import errorsEN from './en/errors.json';
import languagesEN from './en/languages.json';

export const resourcesEN = {
  languages: languagesEN,
  errors: errorsEN,
  upload: uploadEn,
  storageFreeSpace: storageFreeSpaceEn,
  headsetLinking: headsetLinkingEn,
  sessionPage: sessionPageEn,
  contentInSession: contentInSessionEn,
  content: contentEn,
  headsetCommands: headsetCommandsEn,
  contentPlayer: contentPlayerEn,
  headsetInSession: headsetInSessionEn,
  sessionControl: sessionControlEn,
  session: sessionEn,
  authLayout: authLayoutEn,
  mainLayout: mainLayoutEn,
  userMenu: userMenuEn,
  auth: authEn,
  headset: headsetEn,
  loginPage: loginPageEn,
  errorPage: errorPageEn,
  notFoundPage: notFoundPageEn,
  registerPage: registerPageEn,
  sessionsPage: sessionsPageEn,
  contentsPage: contentsPageEn,
  headsetsPage: headsetsPageEn,
  account: accountEn,
  accountPage: accountPageEn,
  uploadContentOnHeadsetsButton: uploadContentOnHeadsetsButtonEn,
};
