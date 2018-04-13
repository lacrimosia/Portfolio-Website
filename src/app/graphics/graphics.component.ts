import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs/Rx';
import { KeysPipe } from '../keys.pipe';
import 'rxjs/add/operator/map';
//import '../../../node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
  providers: [DataService]
})
export class GraphicsComponent implements OnInit {

  data:any;
   gr:any;
   graphics:any;
   pageName:string;
   pageDesc:string;
   myIndex:number;
   @ViewChild('video') video:any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.myIndex = 0;
  	this.data = this._dataService.getData()
  		.subscribe(
  			data => {
  				    this.gr = data;
          		this.pageName = this.gr.graphicsPage.pageName;
          		this.pageDesc = this.gr.graphicsPage.description;
  				this.graphics = this.gr.graphics;
  			},
  			(err) => console.log(err),
  			() => console.log("Graphics data loaded.")
  		);

 /*     $('#modal').on('hidden', function() {
        $(this).data('modal').$element.removeData();
    });*/
  }

  goTo(link){
    window.location.href= link;
  }

  getImage(image){
    return 'assets/img/graphics/thumbs/' + image;
  }


  getFullImage(image){
    return 'assets/img/graphics/full/' + image;
  }

  getValue(i){
    this.myIndex = i;
    console.log(this.myIndex);
  }

  stopVideo(event: any){
    this.video.nativeElement.pause();
  }
}
