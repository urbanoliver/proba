import { Component, OnInit, inject } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ParfumokService } from '../../service/parfum-service.service';
import { ParfumDTO } from '../../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parfumok',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './parfumok.component.html',
  styleUrl: './parfumok.component.css'
})
export class ParfumokComponent implements OnInit {

  parfumService = inject(ParfumokService);

  router = inject(Router);

  parfumok: ParfumDTO[] = [];

  ngOnInit(): void {
    this.parfumService.getAll().subscribe({
      next: (parfumok) => this.parfumok = parfumok,
      error: (err) => console.error(err)
    });
  }


  goToUserForm(id: number) {
    this.router.navigate(['edit-parfumok', id]);
  }



  deleteUser(parfum: ParfumDTO) {
    this.parfumService.delete(parfum.id).subscribe({
      next: () => {
        const index = this.parfumok.indexOf(parfum);
        if (index > -1) {
          this.parfumok.splice(index, 1);

        }

      },
      error: (err) => {
        //TODO notification
        console.error(err);
      }
    });

  }
}
