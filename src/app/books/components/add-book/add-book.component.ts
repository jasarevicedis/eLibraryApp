import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";
import { UploaderModule } from 'angular-uploader';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  standalone:true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    UploaderModule
  ]
})
export class AddBookComponent {
  uploader = Uploader({ 
    apiKey: "free" 
  });
  options: UploadWidgetConfig = {
    multi: false
  };
  
  onUpdate = (files: UploadWidgetResult[]) => {
    alert(files.map(x => x.fileUrl).join("\n"));
  };
  width = "450px";
  height = "600px";
}
