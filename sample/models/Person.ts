// ./models/Person.ts
export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

// export type Gender
export type Gender = GenderEnum | `${GenderEnum}`;

export type Person = {
  name: string;
  age: number;
  gender: Gender;
  single: boolean;
  country?: string;
  industry?: string;
  quote?: string;
  hobbies?: string[];
};
