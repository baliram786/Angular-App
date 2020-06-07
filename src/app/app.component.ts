import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from "@angular/forms"; 

declare const DisplayMessage: any;
declare const hello: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'React App';
  public persondata = [];
  public testUrl = '';
  public returnUrl = '';
  public tempData = '';
  // public textData='Processed URL';
  private Headers: HttpHeaders;

  onClick() {
    let self = this;
    
    console.log(this.testUrl.split('//',1).toString());
    this.tempData=this.testUrl.split('//',1).toString()+'//';
    var data = JSON.stringify({ "destination": `${this.testUrl}`} );
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        let retData = JSON.parse(this.responseText);
        self.returnUrl = retData.shortUrl;
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "https://api.rebrandly.com/v1/links");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("apikey", "5ae4ce81fde9431a851e38abbc9fd752");
    
    xhr.send(data);

    
    
  }
  constructor(private m_xHttpClient: HttpClient) {

  }
  ngOnInit() {

  }
}
