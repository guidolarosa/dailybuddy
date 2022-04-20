interface User {
    name: string,
    id: number,
  };

  type WindowStates = "closed" | "open";

  const user : User = {
    name: 'Guido',
    id: 8,
  }
  class CustomUser {
    name: string;
    id: number;
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

  const sum = (x: number, y: number) : number => {
    return (x + y);
  };

  // const sum = (x: [type], y: [type]) : [returnType] => {}

  const customUser : User = new CustomUser('Guido', 8);

  const printPoint = (pt: {x: number, y: number}, times?: number) => {
    if (!times) {
      
    }
  }
  // Union operators
  const returnStringOrNumber = (userInput: string | number) : string | number => {
    const result = userInput;
    return result;
  }

  type Building = {
    height: number,
    color: 'black' | 'gray' | 'blue',
    tenants?: string | string[]
  }

  const newBuilding : Building = {
    height: 100,
    color: 'black',
    tenants: ['Jenny', 'Carlos']
  };

  type Car = {
    weight: number, 
    color?: 'black' | 'white' | null
  }

  const myCar : Car = {
    weight: 100,
    color: null
  }