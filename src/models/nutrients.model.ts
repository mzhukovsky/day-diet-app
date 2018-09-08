export class Nutrients {
  constructor(public kcal: number, 
              public fat: number, 
              public carbs: number,
              public protein: number){
  }

  public add(nutrients: Nutrients) {
    this.kcal += nutrients.kcal;
    this.fat += nutrients.fat;
    this.carbs += nutrients.carbs;
    this.protein += nutrients.protein;
  }
}