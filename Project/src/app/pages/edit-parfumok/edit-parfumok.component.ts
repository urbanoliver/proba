import { CommonModule, AsyncPipe } from '@angular/common';
import { Component, Input, inject, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../../navigation/navigation.component';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ParfumokService } from '../../service/parfum-service.service';
import { Parfum } from '../../../../backend/src/entity/Parfum';

@Component({
  selector: 'app-edit-parfumok',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule,
    AsyncPipe,
    FormsModule,],
  templateUrl: './edit-parfumok.component.html',
  styleUrl: './edit-parfumok.component.css'
})
export class EditParfumokComponent {

  @Input({ required: true, transform: numberAttribute}) id: number = 0;

  parfumService = inject(ParfumokService);

  parfum$: Observable<Parfum> = of(new Parfum());

  router = inject(Router);

  ngOnInit(): void {
    if(this.id){
      
      this.parfum$ = this.parfumService.getOne(this.id);
    }

  }

  onUpdate(parfum: Parfum): void{

    if(this.id){
      this.parfumService.update(parfum).subscribe(
        () => this.router.navigateByUrl('/home')
      );
    } 

  }

}
