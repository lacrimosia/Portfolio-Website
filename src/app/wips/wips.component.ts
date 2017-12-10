import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import { KeysPipe } from '../keys.pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-wips',
  templateUrl: './wips.component.html',
  styleUrls: ['./wips.component.scss'],
  providers: [DataService]
})
export class WipsComponent implements OnInit {

  data:any;
  wips: any;
  Progress:any;
  pageName:string;
  pageDesc:string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this.data = this._dataService.getData()
  		.subscribe(
  			data => {
  		  		this.wips = data;
          		this.pageName = this.wips.wipsPage.pageName;
          		this.pageDesc = this.wips.wipsPage.description;
  		  		this.Progress = this.wips.wips;
  			},
  			(err) => console.log(err),
  			() => console.log("WIPS data loaded.")
  		);
  }

   goTo(link){
    window.location.href= link;
  }

  getImage(image){
    return 'assets/img/thumbs/web/' + image;
  }

}
