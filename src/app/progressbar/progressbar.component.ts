import { Component, OnInit } from '@angular/core';

import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import {ProgressbarService} from '../services/progressbar.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css'],
  providers: [NgbProgressbarConfig, ProgressbarService]
})
export class ProgressbarComponent implements OnInit {

  constructor(config: NgbProgressbarConfig, public progressbarService: ProgressbarService) {
    //config.max = 1000;
    config.striped = false;
    config.animated = true;
    config.type = 'success';
    config.height = '50px';
  }

  ngOnInit() {
    this.progressbarService.loadConfig();
  }

}