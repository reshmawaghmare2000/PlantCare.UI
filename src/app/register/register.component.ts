import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { response } from 'express';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() registerFromHome:any; 
  @Output() cancelRegister:EventEmitter<any>=new EventEmitter()
  model:any={};
  constructor(private accountService:AccountService,private toastrService:ToastrService){}
  register(){
    this.accountService.register(this.model).subscribe({
      next:response=>{
        this.toastrService.success('User Registered succesfully')
        
      },
      error:err=>{
        this.toastrService.error(err.error.text)
      }
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }

}
