import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import { KeysPipe } from '../keys.pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

   data:any;
   home:any;
   pageName:string;
   pageDesc:string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this.data = this._dataService.getData()
  		.subscribe(
  			data => {
  				this.home = data;
  				this.pageName = this.home.homePage.pageName;
          		this.pageDesc = this.home.homePage.description;
  			},
  			(err) => console.log(err),
  			() => console.log("Interactive data loaded.")
  		);
  }

  getImage(image){
    return 'assets/img/' + image;
  }

}
