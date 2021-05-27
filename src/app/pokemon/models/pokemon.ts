export class Pokemon {
  name: string;
  id: string;
  
  constructor(obj: {url: string, name: string}) {
    this.name = obj.name;
    const exec = /.*\/(\d+)/.exec(obj.url);
    if(exec != null) {
      this.id = exec[1];
    } else {
      this.id = '';
    }
  }
}

export interface PokemonData {
  name: string;
  base_experience: string;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    front_default: string;
  }
}