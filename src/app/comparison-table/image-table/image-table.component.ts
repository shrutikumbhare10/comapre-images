import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.css']
})
export class ImageTableComponent implements OnInit {

  comparisionTableData: any[] = [];
  imgTableColumns: string[] = ['x', 'id', 'url', 'title']

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  getTableData(tableData) {
    this.cdr.detectChanges();
    this.comparisionTableData = tableData;
    this.comparisionTableData = [...this.comparisionTableData];
  }

}
