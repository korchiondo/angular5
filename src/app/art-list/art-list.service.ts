import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArtListService {
  httpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getAll() {
    return this.httpClient.get('https://www.rijksmuseum.nl/api/en/collection', {
      params: {key: 'Py5hQWtD', format: 'json'}
    });
  }

}
