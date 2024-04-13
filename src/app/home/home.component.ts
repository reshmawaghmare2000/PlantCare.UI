import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerMode=false;
  registerToggle(){
    this.registerMode=!this.registerMode
  }

  cancelRegisterMode(event:boolean){
    this.registerMode=event;
  }

}
