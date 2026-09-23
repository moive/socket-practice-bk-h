import { Injectable } from '@nestjs/common';
import { Band } from './entities/band.entity.js';

@Injectable()
export class BandsService {
  private bands: Band[] = [
    new Band('Coldplay'),
    new Band('The Beatles'),
    new Band('Queen'),
  ];

  addBand(name: string): Band {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return newBand;
  }

  getBands(): Band[] {
    return this.bands;
  }

  removeBand(id: string): void {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  increaseVotes(id: string) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.votes += 1;
      return band;
    });
  }

  changeName(id: string, newName: string) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.name = newName;
      return band;
    });
  }
}
