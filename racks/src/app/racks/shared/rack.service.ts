import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions , RequestMethod } from '@angular/http'
import {} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {RackInventory} from './rack-inventory.model'
import { RackComponent } from '../rack/rack.component';

@Injectable()
export class RackService {

  selectedRackInventory : RackInventory;
  rackList : RackInventory[];
  headers = ["Rack Code","Rack Description", "Rack Capacity", "Rack Status","Edit/Delete"];
  constructor(private http : Http) { }

  Postrack_inventory(rack : RackInventory){
    var body = JSON.stringify(rack);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:28450/api/rack',body,requestOptions).map(x => x.json());
  }

  getRackList(){
    this.http.get('http://localhost:28450/api/rack')
    .map((data : Response) =>{
      return data.json() as RackInventory[];
    }).toPromise().then(x => {
      this.rackList = x;
    })
  }

  deleteRack(id: number) {
    return this.http.delete('http://localhost:28450/api/rack/' + id).map(res => res.json());
}

  updateRack(id, rid) {
  var body = JSON.stringify(rid);
  var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  return this.http.put('http://localhost:28450/api/rack/' + id,
    body,
    requestOptions).map(res => res.json());
}
}
