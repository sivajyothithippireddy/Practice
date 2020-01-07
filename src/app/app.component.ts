import { FetchService } from './fetch.service';
import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalgetData: any;
  rowData: any;
  tableData: any;

  ngOnInit(): void {
    this.tabledata();
  }

  constructor(private service: FetchService) {
    setInterval(() => {
      this.tableData = cloneDeep(this.tableData);
      console.log(this.tableData, "data");
    }, 10000);
  }

  columnDefs = [
    { headerName: 'TITLE', field: 'title', width: 300},
    { headerName: 'URL', field: 'url', width: 300 },
    { headerName: 'CREATED AT', field: 'created_at', width: 300 },
    { headerName: 'AUTHOR', field: 'author', width: 200 }

  ];

  tabledata() {
    this.service.gettabldata().subscribe(
      resp => {
        console.log(resp, "table data");
        this.tableData = resp;
        this.rowData = this.tableData.hits;
        console.log(this.rowData, "Table Data");
      }
    )
  }

  modalData(event, r) {
    console.log(event.data, "event");
    this.modalgetData = event.data;
  }
}
