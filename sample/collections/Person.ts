// ./collections/Person.ts
import { Collection, BaseFunctions, PredicateFn } from 'collectype';
import { GenderEnum, Person } from '../models/Person';

export class PersonFunctions extends BaseFunctions<Person> {
  male(): this {
    return this.where((item) => item.gender === GenderEnum.MALE);
  }

  // Alternative syntax with type for predicate function
  female(): this {
    const predicate: PredicateFn<Person> = (item) => item.gender === GenderEnum.FEMALE;
    return this.where(predicate);
  }

  adult(target: number = 18): this {
    return this.where((item) => item.age >= target);
  }
}

export class PersonCollection extends Collection<Person, PersonFunctions> {
  constructor(items: Person[]) {
    super(items, PersonFunctions);
  }
}
