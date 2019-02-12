import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() selected: Object;
  
  constructor() { }
  
  select = { action: 'none', data: {}};


  ngOnInit() {
  }

}
