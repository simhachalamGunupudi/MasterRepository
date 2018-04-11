import {
  Component,
  OnInit
} from '@angular/core';
import {SharedModel} from './shared-model';

@Component({
  selector: 'app-shared-module',
  templateUrl: './shared-module.component.html',
  styleUrls: ['./shared-module.component.css']
})
export class SharedModuleComponent implements OnInit {
  name: string;

  constructor() {
  }

  ngOnInit() {
    const obj: SharedModel = SharedModel.fromJson({firstName: 'simha'});
    console.log(obj);
    this.name = obj.firstName;
  }

}
