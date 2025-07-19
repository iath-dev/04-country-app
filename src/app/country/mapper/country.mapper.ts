import { Country, CountryDetail } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-country.interface';

export class CountryMapper {
  static mapToCountries(restCountries: RESTCountry[]): Country[] {
    return restCountries.map((restCountry) => this.mapToCountry(restCountry));
  }

  static mapToCountry(restCountry: RESTCountry): Country {
    return {
      cca2: restCountry.cca2,
      flag: restCountry.flags.png,
      flagSvg: restCountry.flag,
      name: restCountry.translations['spa'].common || restCountry.name.common,
      capital: restCountry.capital ? restCountry.capital[0] : 'N/A',
      population: restCountry.population,
    };
  }

  static mapToCountriesDetails(restCountries: RESTCountry[]): CountryDetail[] {
    return restCountries.map((restCountry) =>
      this.mapToCountryToDetail(restCountry)
    );
  }

  static mapToCountryToDetail(country: RESTCountry): CountryDetail {
    return {
      cca2: country.cca2,
      cca3: country.cca3,
      name: country.name.common,
      officialName: country.name.official,
      flag: country.flags.png,
      flagSvg: country.flags.svg,
      region: country.region,
      subregion: country.subregion,
      capital:
        country.capital && country.capital.length > 0 ? country.capital[0] : '',
      population: country.population,
      area: country.area,
      languages: country.languages,
      borders: country.borders,
      timezones: country.timezones,
      maps: {
        googleMaps: country.maps?.googleMaps || '',
        openStreetMaps: country.maps?.openStreetMaps || '',
      },
      currency: Object.keys(country.currencies)[0],
    };
  }
}
