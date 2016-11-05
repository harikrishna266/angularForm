import { Component, OnInit } from '@angular/core';
import {CaseService} from '../services/case.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(public _caseSerivce:CaseService) { }

  ngOnInit() {
  }
  onSubmit() {
      console.log('in');
      this._caseSerivce.get('http://facebook.com')
          .subscribe(res => {
              console.log('in');
          })
  }

}
