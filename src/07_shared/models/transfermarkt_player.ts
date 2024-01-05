export interface IPlayerTransfermarkt {
  age: number;
  foot: string;
  height: string;
  image: string;
  injury: any | null;
  isLoan: boolean | null;
  marketValue: {
    value: number;
  };
  name: string;
  nationalities: [
    {
      id: number;
      name: string;
      image: string;
    }
  ];
  positions: {
    first: {
      group: string;
      id: string;
      name: string;
      shortName: string;
    };
  };
}
