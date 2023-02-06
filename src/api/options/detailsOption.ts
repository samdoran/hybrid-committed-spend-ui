import axios from 'axios';

import type { Option, OptionData, OptionMeta } from './option';
import { OptionType } from './option';

export type DetailsOptionData = OptionData;

export interface DetailsOptionMeta extends OptionMeta {
  count?: string | number;
}

export interface DetailsOption extends Option {
  meta: DetailsOptionMeta;
  data: DetailsOptionData[];
}

export const OptionTypePaths: Partial<Record<OptionType, string>> = {
  [OptionType.all]: 'reports/dropdown',
};

export function runOption(reportType: OptionType, query: string) {
  const path = OptionTypePaths[reportType];
  const _query = query ? `?${query}` : '';
  return axios.get<DetailsOption>(`${path}${_query}`);
}
