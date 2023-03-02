import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


export interface form {

}
@Component({
  selector: 'app-dyanamic-form',
  templateUrl: './dyanamic-form.component.html',
  styleUrls: ['./dyanamic-form.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class DyanamicFormComponent implements OnInit {
  @Input() list:any[] = []; 
 
  json:any = [
    {
       label:"Name",
       type:"Text",
       mandatory:1,
       maxLength:50,
       minLength:2,
       maxValue:99,
       minValue:18,
       sorting:1,
       subItems:[
          
       ]
    },
    {
       label:"Age",
       type:"Numeric",
       mandatory:1,
       maxLength:2,
       minLength:2,
       maxValue:99,
       minValue:18,
       sorting:2,
       subItems:[
          
       ]
    },
    {
       label:"Gender",
       type:"RadioButton",
       mandatory:1,
       maxLength:null,
       minLength:null,
       maxValue:null,
       minValue:null,
       sorting:3,
       subItems:[
          {
             id:1,
             label:"Male"
          },
          {
             id:2,
             label:"Female"
          }
       ]
    },
    {
       label:"Education",
       type:"Single Choice",
       mandatory:1,
     
       sorting:3,
       subItems:[
          {
             id:1,
             label:"Class 12th"
          },
          {
             id:2,
             label:"Graduate"
          },
          {
             id:3,
             label:"Post-graduate and above"
          },
          {
             id:4,
             label:"Diploma/ITI"
          }
       ]
    },
    {
       label:"Mobile No.",
       type:"Numeric",
       mandatory:1,
       maxLength:10,
       minLength:10,
       maxValue:null,
       minValue:null,
       sorting:3,
       subItems:[
          
       ]
    }
 ]

 fields:any[]=[];
 form:any;
 listarray:any[]=[];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    const formGroupFields = this.getformcontrols();
    this.form = new FormGroup(formGroupFields);
  }



  getformcontrols(){
    const formGroupFields = <any>{};
    for(const field of this.json){
      const fieldProps = field;
      formGroupFields[field.label] = new FormControl('',this.mapValidators(fieldProps));
      this.fields.push({...fieldProps,fieldName:field.label})
    }
    return formGroupFields;
  }
  private mapValidators(validators:any) {
    const formValidators = [];
    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'mandatory') {
          formValidators.push(Validators.required);
        } else if (validation === 'minLength') {
          formValidators.push(Validators.minLength(validators[validation]));
        } else if (validation === 'maxLength') {
          formValidators.push(Validators.maxLength(validators[validation]));
        }
      }
    }

    return formValidators;
  }
 
  submit(){
    console.log(this.form.invalid)
    if(this.form.invalid){
      return
    }

    console.log(this.form.controls)
    this.listarray.push(this.form.value);
    this.form.reset();
  }

  onItemChange(value:any){
    
    console.log(value)
    console.log(" Value is : ", value.target.value );
 }

 editedList(eventData:any) {
  console.log(eventData)
  const formGroupFields = <any>{};
  for(const field of Object.keys(eventData)){
  
    const fieldProps = this.json[field];
    console.log(fieldProps)
    formGroupFields[field] = new FormControl(fieldProps || '',this.mapValidators(fieldProps));
    this.fields.push({...fieldProps,fieldName:field})
  }
  return formGroupFields;

}

}
