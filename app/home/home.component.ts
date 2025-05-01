import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousinglocationComponent],
  template: `
        <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section>
    <app-housinglocation *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housinglocation>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
housingLocationList: HousingLocation[] = [];
housingService: HousingService =inject(HousingService);
constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
}
}
