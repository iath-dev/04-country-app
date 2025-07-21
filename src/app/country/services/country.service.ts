import { catchError, delay, map, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-country.interface';
import { Region } from '../interfaces/regions.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<string, Country[]>();

  searchByCapital(query: string) {
    const _query = query.trim().toLowerCase();

    if (this.queryCacheCapital.has(_query))
      return of(this.queryCacheCapital.get(_query) ?? []);

    return this.http
      .get<RESTCountry[]>(`${environment.countryApiUrl}/capital/${_query}`)
      .pipe(
        map((restCountries) => CountryMapper.mapToCountries(restCountries)),
        delay(3000), // Simulate a delay for better UX
        tap((countries) => this.queryCacheCapital.set(query, countries)),
        catchError((error) => {
          console.log('Error fetching countries by capital:', error);
          return throwError(
            () => new Error('Failed to fetch countries by capital')
          );
        })
      );
  }

  searchByCountry(query: string) {
    const _query = query.trim().toLowerCase();

    if (this.queryCacheCountry.has(_query))
      return of(this.queryCacheCountry.get(_query) ?? []);

    return this.http
      .get<RESTCountry[]>(`${environment.countryApiUrl}/name/${_query}`)
      .pipe(
        map((restCountries) => CountryMapper.mapToCountries(restCountries)),
        delay(3000), // Simulate a delay for better UX
        tap((countries) => this.queryCacheCountry.set(_query, countries)),
        catchError((error) => {
          console.log('Error fetching countries:', error);
          return throwError(() => new Error('Failed to fetch countries'));
        })
      );
  }

  searchByRegion(region: Region) {
    if (this.queryCacheRegion.has(region))
      return of(this.queryCacheRegion.get(region) ?? []);

    return this.http
      .get<RESTCountry[]>(`${environment.countryApiUrl}/region/${region}`)
      .pipe(
        map((restCountries) => CountryMapper.mapToCountries(restCountries)),
        delay(3000), // Simulate a delay for better UX
        tap((countries) => this.queryCacheRegion.set(region, countries)),
        catchError((error) => {
          console.log('Error fetching countries:', error);
          return throwError(() => new Error('Failed to fetch countries'));
        })
      );
  }

  searchCountryByAlpha(code: string) {
    const _query = code.trim().toLowerCase();
    return this.http
      .get<RESTCountry[]>(`${environment.countryApiUrl}/alpha/${_query}`)
      .pipe(
        map((restCountries) =>
          CountryMapper.mapToCountriesDetails(restCountries)
        ),
        map((countries) => countries[0]), // Assuming the API returns an array, we take the first country
        delay(3000), // Simulate a delay for better UX
        catchError((error) => {
          console.log('Could not fetch country by alpha code:', error);
          return throwError(
            () => new Error('Could not fetch country by alpha code')
          );
        })
      );
  }
}
