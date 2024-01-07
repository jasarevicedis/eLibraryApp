import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Uploader, UploadWidgetConfig, UploadWidgetResult } from "uploader";
import { UploaderModule } from 'angular-uploader';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators,  ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-add-loan',
    templateUrl: './add-loan.component.html',
    styleUrls: ['./add-loan.component.scss'],
    standalone: true,
    imports:[
        RouterModule,
        MatSelectModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        UploaderModule,
        MatButtonModule,
        MatStepperModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
    ]
})
export class AddLoanComponent {
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
      height = "500px";
    
      firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
      isLinear = false;
    
      constructor(private _formBuilder: FormBuilder) {}
    
}
