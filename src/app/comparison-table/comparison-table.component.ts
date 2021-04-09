import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ComparisonTableService } from '../services/comparison-table/comparison-table.service';
import * as _ from 'lodash';
import { ImageTableComponent } from './image-table/image-table.component';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.css']
})
export class ComparisonTableComponent implements OnInit {

  imageDetails: any[] = [];
  comparisionTableData: any[] = [];
  hideComapreBtn: boolean = false;
  @ViewChild('compareTable') private compareTable: ImageTableComponent;

  constructor(public comparisonTableService: ComparisonTableService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.comparisonTableService.getImageData().subscribe((res: any[]) => {
      this.imageDetails = res.slice(0, 200);
    })
  }

  onImgSelect(event) {
    if (event.btnClicked === 'COMPARE') {
      let selectedImg = _.find(this.imageDetails, { id: event.id });
      this.comparisionTableData.push(selectedImg);
    }
    else if (event.btnClicked === 'REMOVE') {
      this.comparisionTableData = this.comparisionTableData.filter(function (ele) {
        return ele.id != event.id
      })
    }
    this.cdr.detectChanges();
    this.compareTable.getTableData(this.comparisionTableData);
  }

}
