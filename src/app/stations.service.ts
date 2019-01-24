import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Station } from './Station';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StationsService {
  Stations: Station[];
  constructor(private httpClient: HttpClient) { }

  getRainFallStations(): Observable<any>{

    return this.httpClient.get('https://apps.sepa.org.uk/rainfall/api/Sites');
       
 }

}
