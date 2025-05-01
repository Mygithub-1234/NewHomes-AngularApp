import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url ="http://localhost:3000/locations"; 

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json()?? [];
  }

  async getHousingLocationbyId(id :Number): Promise<HousingLocation | undefined> {
    //const data1 = await fetch(this.url);
    const data1 = await fetch( `http://localhost:3000/locations/${id}`);
    return await data1.json()?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
