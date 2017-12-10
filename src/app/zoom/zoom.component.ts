import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import { KeysPipe } from '../keys.pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss'],
  providers: [DataService]
})
export class ZoomComponent implements OnInit {

	@Input() image;
	@Input() title;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getImage(image){
    return 'assets/img/graphics/full/' + image;
  }

}
