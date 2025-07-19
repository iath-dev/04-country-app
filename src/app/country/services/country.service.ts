import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';
import type { RESTCountry } from '../interfaces/rest-country.interface';
import { catchError, delay, map, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string) {
    const _query = query.trim().toLowerCase();
    return this.http
      .get<RESTCountry[]>(`${environment.countryApiUrl}/capital/${_query}`)
      .pipe(
        map((restCountries) => CountryMapper.mapToCountries(restCountries)),
        delay(3000), // Simulate a delay for better UX
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
    return this.http
      .get<RESTCountry[]>(`${environment.countryApiUrl}/name/${_query}`)
      .pipe(
        map((restCountries) => CountryMapper.mapToCountries(restCountries)),
        delay(3000), // Simulate a delay for better UX
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
