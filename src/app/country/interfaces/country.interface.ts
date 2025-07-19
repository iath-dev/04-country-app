import { Maps } from './rest-country.interface';

export interface Country {
  cca2: string;
  flag: string;
  flagSvg: string;
  name: string;
  capital: string;
  population: number;
}

// Interface para la página de detalles
export interface CountryDetail extends Country {
  cca3: string;
  officialName: string;
  region: string;
  subregion?: string;
  area?: number;
  languages?: Record<string, string>;
  borders?: string[];
  maps: Maps;
  timezones: string[];
  currency: string;
}
