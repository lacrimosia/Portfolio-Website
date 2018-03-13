import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import { KeysPipe } from '../keys.pipe';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-interactives',
  templateUrl: './interactives.component.html',
  styleUrls: ['./interactives.component.scss'],
  providers: [DataService]
})
export class InteractivesComponent implements OnInit {

   data:any;
   int:any;
   interactives:any;
   pageName:string;
   pageDesc:string;
   Index:number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  	this.data = this._dataService.getData()
  		.subscribe(
  			data => {
  				this.int = data;
          this.pageName = this.int.interactivesPage.pageName;
          this.pageDesc = this.int.interactivesPage.description;
  				this.interactives = this.int.interactives;
  			},
  			(err) => console.log(err),
  			() => console.log("Interactive data loaded.")
  		);
  }

  goTo(link){
    window.location.href= link;
  }

  getImage(image){
    return 'assets/img/thumbs/web/' + image;
  }

  getFullImage(image){
    return 'assets/img/graphics/full/' + image;
  }

}
