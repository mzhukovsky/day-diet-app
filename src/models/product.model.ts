export class Product {
  constructor(public id: number, 
              public name: string,
              public unit: string,
              public quantity: number,
              public kcal: number,
              public fat: number,
              public carbs: number,
              public protein: number) { }
}