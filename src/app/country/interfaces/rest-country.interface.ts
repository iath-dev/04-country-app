export interface RESTCountry {
  name: CountryName;
  cca2: string;
  cca3: string;
  region: string;
  latlng: [number, number];
  population: number;
  flags: Flags;
  capital: string[];
  maps: Maps;
  cioc: string;
  ccn3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: Idd;
  altSpellings: string[];
  subregion: string;
  languages: Record<string, string>;
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  translations: Record<string, Translation>;
  flag: string;
  gini: Record<string, number>;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface CapitalInfo {
  latlng: [number, number];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currency {
  symbol: string;
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: Record<string, Translation>;
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string | null;
  regex: string | null;
}
