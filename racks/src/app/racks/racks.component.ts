import { Component, OnInit } from '@angular/core';

import {RackService} from './shared/rack.service'

@Component({
  selector: 'app-racks',
  templateUrl: './racks.component.html',
  styleUrls: ['./racks.component.css'],
  providers: [RackService]
})
export class RacksComponent implements OnInit {

  constructor(private rackService : RackService) { }

  ngOnInit() {
  }

}
