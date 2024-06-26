import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ParfumokService } from '../../service/parfum-service.service';
import { ParfumDTO } from '../../../../models';

@Component({
  selector: 'app-parfum-form',
  standalone: true,
  imports: [
    NavigationComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './parfum-form.component.html',
  styleUrl: './parfum-form.component.css'
})
export class ParfumFormComponent {

  formBuilder = inject(FormBuilder);

    parfumokService = inject(ParfumokService);

    router  = inject(Router);

    activetedRoute = inject(ActivatedRoute);

    parfumForm = this.formBuilder.group<ParfumDTO>({
      id: 0,
      name: '',
      brand: '',
      price: 0,
      quantity: 0
    });

    isNewParfum = true;
    saveParfum() {
      const parfum = this.parfumForm.value as ParfumDTO;

      if(this.isNewParfum){
        this.parfumokService.create(parfum).subscribe({
          next: (parfumCreated) => {
            // TODO notification
              this.router.navigateByUrl('/parfum');
          },
          error: (err) => {
            // TODO notification
  
            console.error(err);
          }
        });
      }
      else {
        this.parfumokService.update(parfum).subscribe({
          next: (parfumCreated) => {
            // TODO notification
              this.router.navigateByUrl('/parfum');
          },
          error: (err) => {
            //TODO notification
  
            console.error(err);
          }
        });

      }

      
    }

    ngOnInit(): void {
      const id = this.activetedRoute.snapshot.params['id'];

      if (id) {
        this.isNewParfum = false;

        this.parfumokService.getOne(id).subscribe({
          next: (parfum) => this.parfumForm.setValue(parfum),
          error: (err) => {
            //TODO notification

            console.error(err)
          }
        });
      }
    }

}
