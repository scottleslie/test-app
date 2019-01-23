import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from '../Station';


@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  Stations: Station[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

 this.getRainFallStations();
   
  }

  getRainFallStations(){

     this.httpClient.get('https://apps.sepa.org.uk/rainfall/api/Sites').subscribe((data: Station[])=>{
        console.log(data);
        this.Stations= data;     
      });
      
  }

}
