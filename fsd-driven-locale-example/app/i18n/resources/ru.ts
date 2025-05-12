import { contentRu } from '@/entities/content';
import { contentInSessionRu } from '@/entities/contentInSession';
import { headsetRu } from '@/entities/headset';
import { headsetInSessionRu } from '@/entities/headsetInSession';
import { sessionRu } from '@/entities/session';

import { accountRu } from '@/features/account';
import { authRu } from '@/features/auth';
import { headsetCommandsRu } from '@/features/headsetCommands';
import { sessionControlRu } from '@/features/sessionControl';

import { authLayoutRu } from '@/widgets/AuthLayout';
import { contentPlayerRu } from '@/widgets/ContentPlayer';
import { mainLayoutRu } from '@/widgets/MainLayout';
import { storageFreeSpaceRu } from '@/widgets/StorageFreeSpace';
import { uploadContentOnHeadsetsButtonRu } from '@/widgets/UploadContentOnHeadsetsButton';
import { userMenuRu } from '@/widgets/UserMenu';

import { accountPageRu } from '@/pages/account';
import { contentsPageRu } from '@/pages/contents';
import { errorPageEn } from '@/pages/error';
import { headsetsPageRu } from '@/pages/headsets';
import { loginPageRu } from '@/pages/login';
import { notFoundPageRu } from '@/pages/notFound';
import { registerPageRu } from '@/pages/register';
import { sessionPageRu } from '@/pages/session';
import { sessionsPageRu } from '@/pages/sessions';

import { headsetLinkingRu } from '@/fsd-driven-locale-example/features/headsetLinking';
import { uploadRu } from '@/fsd-driven-locale-example/features/upload';

import errorsRU from './ru/errors.json';
import languagesRU from './ru/languages.json';

export const resourcesRU = {
  languages: languagesRU,
  errors: errorsRU,
  upload: uploadRu,
  storageFreeSpace: storageFreeSpaceRu,
  headsetLinking: headsetLinkingRu,
  sessionPage: sessionPageRu,
  contentInSession: contentInSessionRu,
  content: contentRu,
  headsetCommands: headsetCommandsRu,
  contentPlayer: contentPlayerRu,
  headsetInSession: headsetInSessionRu,
  sessionControl: sessionControlRu,
  session: sessionRu,
  authLayout: authLayoutRu,
  mainLayout: mainLayoutRu,
  userMenu: userMenuRu,
  auth: authRu,
  headset: headsetRu,
  loginPage: loginPageRu,
  errorPage: errorPageEn,
  notFoundPage: notFoundPageRu,
  registerPage: registerPageRu,
  sessionsPage: sessionsPageRu,
  contentsPage: contentsPageRu,
  headsetsPage: headsetsPageRu,
  account: accountRu,
  accountPage: accountPageRu,
  uploadContentOnHeadsetsButton: uploadContentOnHeadsetsButtonRu,
};
