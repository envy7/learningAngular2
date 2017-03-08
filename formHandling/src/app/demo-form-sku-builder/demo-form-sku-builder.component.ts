import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

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
  		'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
  	});

  	this.sku = this.myForm.controls['sku'];

  }

  onSubmit(value: string): void{
  	console.log('you submitted value', value);
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
	if (!control.value.match(/^123/)) {
		return {invalidSku: true};
	}
  }
}
