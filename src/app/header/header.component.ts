import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule,BsDropdownModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  model:any={};
  isLoggedIn=false;
  currentUser$:Observable<User|null>=of(null)
  constructor(private  accountService:AccountService, private toastr:ToastrService,private router:Router){}
  ngOnInit(): void {
    this.currentUser$=this.accountService.currentUser$;
    
  }
  login(){
    this.accountService.login(this.model).subscribe({
      next:response=>{
        this.isLoggedIn=true;
        this.router.navigateByUrl('/_plantlist')
      },
      error:err=>{
        this.toastr.error(err.error);
      }
    }) 
  }

}
