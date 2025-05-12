import { useTranslation } from 'react-i18next';

const BYTES_IN_KILOBYTE = 1024;

const byteUnits: { threshold: number; unit: string }[] = [
  { unit: 'byte', threshold: 1 },
  { unit: 'kilobyte', threshold: BYTES_IN_KILOBYTE },
  { unit: 'megabyte', threshold: BYTES_IN_KILOBYTE ** 2 },
  { unit: 'gigabyte', threshold: BYTES_IN_KILOBYTE ** 3 },
] as const;

export const useNumberFormat = () => {
  const { i18n } = useTranslation();

  const getLocaleBytes = (bytes: number): string => {
    let value = bytes;
    let unit = 'byte';

    for (const { unit: byteUnit, threshold } of byteUnits) {
      if (bytes >= threshold) {
        value = bytes / threshold;
        unit = byteUnit;
      } else {
        break;
      }
    }

    return value.toLocaleString(i18n.language, { style: 'unit', unit, unitDisplay: 'narrow' });
  };

  return { getLocaleBytes };
};
