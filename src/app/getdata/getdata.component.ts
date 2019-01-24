import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from '../Station';
import { StationsService } from '../stations.service';
@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  Stations: Station[];

  constructor(private stationService: StationsService) { }

  ngOnInit() {
          this.getRainFallStations();
  }

  getRainFallStations() : void{
    this.stationService.getRainFallStations()
    .subscribe(stations =>this.Stations = stations);
  }

}
