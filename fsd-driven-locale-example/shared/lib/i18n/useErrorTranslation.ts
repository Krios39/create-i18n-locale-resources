import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { InterpolationMap, ParseKeys, TFunctionReturn, TOptions } from 'i18next';

// TODO: CRUTCH
export function useErrorTranslation() {
  const { t, ...rest } = useTranslation('errors');

  const tError = useCallback(
    <
      const Key extends ParseKeys<'errors', TOpt> | TemplateStringsArray,
      const TOpt extends TOptions,
      Ret extends TFunctionReturn<'errors', Key, TOpt>,
      const ActualOptions extends InterpolationMap<Ret> & TOpt = InterpolationMap<Ret> & TOpt,
    >(
      key: any,
      options?: ActualOptions
    ) => {
      if (!key) return '';

      if (typeof key === 'object') {
        if ('key' in key) return t(key.key as ParseKeys<'errors'>, { ...key.options, ...options });
        if ('data' in key) return t(key.data.errorCode as ParseKeys<'errors'>, { ...key.options, ...options });
      }

      return t(key as ParseKeys<'errors'>, options);
    },
    [t]
  );

  return { ...rest, tError };
}
