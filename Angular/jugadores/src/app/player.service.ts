import { Injectable } from '@angular/core';
import { PlayerLocation } from './playerlocation';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  protected playerLocationList: PlayerLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `https://statsbomb.com/wp-content/uploads/2023/12/Lionel-Messi-celebrates-goal-for-Inter-Miami-FC-2023.png`
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2023-1694521247-116480.jpg?lm=1694521259`
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `https://estoesatleti.es/filesedc/uploads/image/post/antoine-griezmann-lesion-francia_1200_800.webp`
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `https://www.fifpro.org/media/cvglel2t/imago1020346080.jpg?rxy=0.47221054333764556,0.1990534726514335&width=1600&height=1024&rnd=133226681627000000`
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `https://s3.sportstatics.com/relevo/www/multimedia/202309/29/media/cortadas/jude-bellingham-celebracion-RqwsjflwqsDHYKqGC6DA8LJ-1200x648@Relevo.JPG`
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `https://laopinion.com/wp-content/uploads/sites/3/2023/08/GettyImages-1352791732.jpg?w=4096`
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `https://revistaindios.com/wp-content/uploads/2021/01/Suarez.jpg`
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `https://assets-es.imgfoot.com/phil-foden-2223.jpg`
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `https://www.fifpro.org/media/fhxkcocj/imago1036849243h.jpg?rxy=0.44248162845529576,0.28445632196454546&width=1600&height=1024&rnd=133554938083930000`
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `https://media.tycsports.com/files/2021/12/06/368661/rodrigo-de-paul_862x485.jpg?v=1`
    }
  ];

  getAllPlayerLocations(): PlayerLocation[] {
    return this.playerLocationList;
  }

  getPlayerLocationById(id: number): PlayerLocation | undefined {
    return this.playerLocationList.find(playerLocation => playerLocation.id === id);
  }
}
