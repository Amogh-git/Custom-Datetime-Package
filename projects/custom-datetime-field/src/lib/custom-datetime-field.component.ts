import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-custom-datetime-field',
  templateUrl: './custom-datetime-field.component.html',
  styleUrls: ['./custom-datetime-field.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomDatetimeFieldComponent),
    multi: true
  }]
})
export class CustomDatetimeFieldComponent implements OnInit, ControlValueAccessor {

  dateTime: any;
  dateTimeDisplayString: any;
  hiddenDate: Date = new Date();
  asseturl = 'assets/';
  @Input() displayFormat: any = "dd-MMM-yyyy h:mm a";
  @Input() width: any = 20;
  @Input() isdisabled: boolean = false;
  @Input() maxDate: string = '';
  @Input() format: string = "datetime";
  onChange: (value: any) => any = (value: any) => { };
  onTouched: () => any = () => { };

  constructor(public datepipe: DatePipe) { }
  writeValue(obj: any): void {

    if (obj) {
      if (typeof (obj) != typeof (''))
        this.dateTime = this.datepipe.transform(obj, 'yyyy-MM-ddTHH:mm')
      else
        this.dateTime = obj;
      if (this.format.toLocaleLowerCase() === "date")
        this.dateTimeDisplayString = this.datepipe.transform(this.dateTime, this.displayFormat);
      else
        this.dateTimeDisplayString = this.datepipe.transform(this.dateTime, this.displayFormat);
    }
    else {
      this.dateTime = '';
      this.dateTimeDisplayString = '';
    }

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit() {

  }
  dateChanged(event: any) {
    this.dateTime = event;
    if (this.format.toLocaleLowerCase() === "date")
      this.dateTimeDisplayString = this.datepipe.transform(event, this.displayFormat);
    else
      this.dateTimeDisplayString = this.datepipe.transform(event, this.displayFormat);
    this.onChange(this.dateTime);
  }

}
