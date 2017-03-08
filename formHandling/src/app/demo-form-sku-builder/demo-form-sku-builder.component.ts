import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-builder',
  templateUrl: './demo-form-sku-builder.component.html',
  styleUrls: ['./demo-form-sku-builder.component.css']
})
export class DemoFormSkuBuilderComponent{
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) { 
  	this.myForm = fb.group({
  		'sku': ['', Validators.required]
  	});

  	this.sku = this.myForm.controls['sku'];
  }

  onSubmit(value: string): void{
  	console.log('you submitted value', value);
  }

}
