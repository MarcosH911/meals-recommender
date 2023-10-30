type InitialFormValues = {
  units: string;
  weight: string;
  desiredWeight: string;
  speed: string;

  customizeMeals: string;
  mealTypes: { breakfast: boolean; lunch: boolean; dinner: boolean };
  maxCookingTime: string;
  excludeIngredients: string[];
  calorieDistribution: { breakfast: string; lunch: string; dinner: string };

  customizeExercises: string;
  includeExercises: string[];
  exerciseDistribution: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
};

export default InitialFormValues;
