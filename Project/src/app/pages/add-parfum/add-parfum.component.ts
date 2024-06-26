import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ParfumokService } from '../../service/parfum-service.service';
import { Parfum } from '../../../../backend/src/entity/Parfum';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-add-parfum',
  standalone: true,
  imports: [ 
    NavigationComponent,
    AsyncPipe,
    FormsModule,
    CommonModule,],
  templateUrl: './add-parfum.component.html',
  styleUrl: './add-parfum.component.css'
})
export class AddParfumComponent implements OnInit{
  
  @Input({ required: true, transform: numberAttribute})

  parfumokService = inject(ParfumokService);

  parfum$: Observable<Parfum> = of(new Parfum());

  router = inject(Router);

  ngOnInit(): void {

  
  }

  onCreate(parfum: Parfum): void{
  
    this.parfumokService.create(parfum).subscribe(
      (response) => {
        console.log('Parfume created successfully:', response);
        
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.error('Error creating parfume:', error);
        
      }
    );

  }

}
