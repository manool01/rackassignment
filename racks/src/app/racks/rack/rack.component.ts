import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {RackService} from '../shared/rack.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.css']
})
export class RackComponent implements OnInit {

  constructor(private rackService : RackService , private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

    resetForm(form? : NgForm){
      if(form !=null)
      form.reset();
      this.rackService.selectedRackInventory = {
        R_id : null,
        R_desc : '',
        R_capacity : null,
        R_status : ''
      }
    }

    onSubmit(form : NgForm){
      this.rackService.Postrack_inventory(form.value)
      .subscribe( data =>{
        this.resetForm(form);
        this.rackService.getRackList();
        this.toastr.success('New Record Added Succcessfully', 'Rack Added');
      })
    }

    onUpdate(form : NgForm){
      this.rackService.updateRack(form.value.R_id,form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.rackService.getRackList();
        this.toastr.info('Record Updated Successfully!', 'Rack Updated');
      });
    }
}
