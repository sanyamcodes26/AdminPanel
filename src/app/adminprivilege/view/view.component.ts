import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data="";
  constructor() { 
    this.splitInitCapPrivilegeName();
  }

  ngOnInit(): void {
  }

  test="control grant revoke";
  splitInitCapPrivilegeName()
  {
    var splittext=this.test.trim().split(" ");
    var ap_name="";
    splittext.forEach(function (value) {
      //console.log(value);
      ap_name=ap_name+value.charAt(0).toUpperCase();
    });
    this.data=ap_name;
    console.log(this.data);
  }
}
