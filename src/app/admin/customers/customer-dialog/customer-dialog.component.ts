import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {
  public form!: FormGroup;
  @Input('showFullscreenIcon') showFullscreenIcon: boolean = true;
  public isFullScreen: boolean = false;
  constructor(public dialogRef: MatDialogRef<CustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: 0,
      username: ['', Validators.required],
      email: null,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: null,
      storeId: null,
      walletBalance: null,
      revenue: null,
      billing: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        middleName: '',
        company: '',
        email: ['', Validators.required],
        phone: ['', Validators.required],
        country: ['', Validators.required],
        city: ['', Validators.required],
        state: '',
        zip: ['', Validators.required],
        address: ['', Validators.required]
      })
    });

    if (this.data.customer) {
      this.form.patchValue(this.data.customer);
    };
  }

  public onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  public compareFunction(o1: any, o2: any) {
    return (o1.name == o2.name && o1.code == o2.code);
  }

  public toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      this.dialogRef.addPanelClass('fullscreen');
      document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }
    else {
      this.dialogRef.removePanelClass('fullscreen');
      (document.getElementsByTagName('html')[0] as any).style.overflowY = null;
    }
  }

  public close() {
    this.dialogRef.close();
    (document.getElementsByTagName('html')[0] as any).style.overflowY = null;
  }

}
