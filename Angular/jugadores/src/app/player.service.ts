import { Injectable } from '@angular/core';
import { PlayerLocation } from './playerlocation';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url = 'http://localhost:3000/locations';

  async getAllPlayerLocations(): Promise<PlayerLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getPlayerLocationById(id: number): Promise<PlayerLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
  console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
}

  protected playerLocationList: PlayerLocation[] = [
    {
      id: 0,
      name: 'Lionel Messi',
      city: 'Rosario',
      country: 'Argentina',
      photo: `https://statsbomb.com/wp-content/uploads/2023/12/Lionel-Messi-celebrates-goal-for-Inter-Miami-FC-2023.png`,
      descrip: '36 años',
      equipo: 'Inter de Miami'
    },
    {
      id: 1,
      name: 'Neymar JR',
      city: 'Sao Paulo',
      country: 'Brasil',
      photo: `https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2023-1694521247-116480.jpg?lm=1694521259`,
      descrip: '32 años',
      equipo: 'Al-Hilal'
    },
    {
      id: 2,
      name: 'Antoine Griezmann',
      city: 'Marsella',
      country: 'France',
      photo: `https://estoesatleti.es/filesedc/uploads/image/post/antoine-griezmann-lesion-francia_1200_800.webp`,
      descrip: '33 años',
      equipo: 'Atlético de Madrid'
    },
    {
      id: 3,
      name: 'Kylian Mbappe',
      city: 'Paris',
      country: 'France',
      photo: `https://www.fifpro.org/media/cvglel2t/imago1020346080.jpg?rxy=0.47221054333764556,0.1990534726514335&width=1600&height=1024&rnd=133226681627000000`,
      descrip: '28 años',
      equipo: 'Paris Saint-Germain'
    },
    {
      id: 4,
      name: 'Jude Bellingham',
      city: 'London',
      country: 'England',
      photo: `https://s3.sportstatics.com/relevo/www/multimedia/202309/29/media/cortadas/jude-bellingham-celebracion-RqwsjflwqsDHYKqGC6DA8LJ-1200x648@Relevo.JPG`,
      descrip: '22 años',
      equipo: 'Real Madrid'
    },
    {
      id: 5,
      name: 'Lucas Paqueta',
      city: 'Sao Paulo',
      country: 'Brasil',
      photo: `https://laopinion.com/wp-content/uploads/sites/3/2023/08/GettyImages-1352791732.jpg?w=4096`,
      descrip: '26 años',
      equipo: 'West Ham United'
    },
    {
      id: 6,
      name: 'Luis Suarez',
      city: 'Montevideo',
      country: 'Uruguay',
      photo: `https://revistaindios.com/wp-content/uploads/2021/01/Suarez.jpg`,
      descrip: '35 años',
      equipo: 'Inter de Miami'
    },
    {
      id: 7,
      name: 'Phill Foden',
      city: 'London',
      country: 'England',
      photo: `https://assets-es.imgfoot.com/phil-foden-2223.jpg`,
      descrip: '24 años',
      equipo: 'Manchester City'
    },
    {
      id: 8,
      name: 'Vinicius JR',
      city: 'Rio de Janeiro',
      country: 'Brasil',
      photo: `https://www.fifpro.org/media/fhxkcocj/imago1036849243h.jpg?rxy=0.44248162845529576,0.28445632196454546&width=1600&height=1024&rnd=133554938083930000`,
      descrip: '24 años',
      equipo: 'Real Madrid'
    },
    {
      id: 9,
      name: 'Rodrigo de Paul',
      city: 'Buenos Aires',
      country: 'Argentina',
      photo: `https://media.tycsports.com/files/2021/12/06/368661/rodrigo-de-paul_862x485.jpg?v=1`,
      descrip: '29 años',
      equipo: 'Atlético de Madrid'
    }
  ];



}
