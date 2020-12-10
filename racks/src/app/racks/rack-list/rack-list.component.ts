import { Component, OnInit } from '@angular/core';

import {RackService} from '../shared/rack.service'
import {RackInventory} from '../shared/rack-inventory.model';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-rack-list',
  templateUrl: './rack-list.component.html',
  styleUrls: ['./rack-list.component.css']
})

export class RackListComponent implements OnInit {
   
  constructor(private rackService : RackService, private toastr: ToastrService) { }
  /*rack : RackInventory[] = [];
  searchid : any;
  */

  ngOnInit() {
    this.rackService.getRackList();
  }
  
  /*search(){
    if(this.searchid == " "){
      this.ngOnInit();
    }
    else{
      this.rack=this.rack.filter(res =>{
        return res.R_status.toLocaleLowerCase().match(this.searchid.toLocaleLowerCase());
      });
    }
  }*/



  showForEdit(rak : RackInventory){
    this.rackService.selectedRackInventory = Object.assign({}, rak );;
  }

  ondeleteRack(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.rackService.deleteRack(id)
      .subscribe(x => {
        this.rackService.getRackList();
        this.toastr.warning("Deleted Successfully"," Record Deleted");
      })
    }
  }
}
