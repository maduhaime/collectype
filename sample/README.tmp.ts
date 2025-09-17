// // This spec file validates all code examples from the README.md
// // It ensures that the documentation is always up-to-date and correct.

// import { describe, it, expect } from 'vitest';
// import { Collection, BaseFunctions, FullFunctions } from '../src';
// import { stringFactory, numberRangeFactory } from '../src/utils/factory';

// import { GenderEnum, Person, people } from './person';

// // Custom Functions for Person
// class PersonFunctions extends BaseFunctions<Person> {
//   male(): this {
//     return this.where((item) => item.gender === GenderEnum.MALE);
//   }
//   female(): this {
//     return this.where((item) => item.gender === GenderEnum.FEMALE);
//   }
//   adult(target: number = 18): this {
//     return this.where((item) => item.age >= target);
//   }
// }

// class PersonCollection extends Collection<Person, PersonFunctions> {
//   constructor(items: Person[]) {
//     super(items, PersonFunctions);
//   }
// }

// // Custom Functions with FullFunctions
// class PersonFullFunctions extends FullFunctions<Person> {
//   male(): this {
//     return this.stringEquals('gender', GenderEnum.MALE);
//   }
//   female(): this {
//     return this.stringEquals('gender', GenderEnum.FEMALE);
//   }
//   adult(target: number = 18): this {
//     return this.numberGreaterThanOrEquals('age', target);
//   }
//   isFisherman(): this {
//     return this.arrayIncludes('hobbies', 'fishing');
//   }
//   femaleAdultByAge(): this {
//     return this.female().adult().sort('age');
//   }
// }

// class PersonFullCollection extends Collection<Person, PersonFullFunctions> {
//   constructor(items: Person[]) {
//     super(items, PersonFullFunctions);
//   }
// }

// describe('README Examples', () => {
//   it('Basic Collection with BaseFunctions', () => {
//     const collection = new Collection(people, BaseFunctions);
//     expect(collection.items.length).toBe(30);
//     expect(collection.fn.where((p) => p.age > 20).items.map((p) => p.name)).toContain('George Clooney');
//   });

//   it('Collection with FullFunctions', () => {
//     const collection = new Collection(people, FullFunctions);
//     expect(collection.fn.numberGreaterThanOrEquals('age', 18).count).toBe(30);
//   });

//   it('Custom PersonFunctions', () => {
//     const collection = new Collection(people, PersonFunctions);
//     expect(collection.fn.adult().count).toBe(30);
//     expect(collection.fn.female().adult().count).toBe(16);
//     expect(collection.fn.female().adult().sort('age').items[0].name).toBe('Greta Thunberg');
//   });

//   it('Custom PersonCollection', () => {
//     const collection = new PersonCollection(people);
//     expect(collection.fn.male().count).toBe(14);
//     expect(collection.fn.female().count).toBe(16);
//     expect(collection.fn.adult().count).toBe(30);
//   });

//   it('Composition with stringFactory and numberRangeFactory', () => {
//     class PersonCompFunctions extends BaseFunctions<Person> {
//       stringEquals = stringFactory.equals<Person, this>(this);
//       numberInRange = numberRangeFactory.inRange<Person, this>(this);
//     }
//     class PersonCompCollection extends Collection<Person, PersonCompFunctions> {
//       constructor(items: Person[]) {
//         super(items, PersonCompFunctions);
//       }
//     }
//     const collection = new PersonCompCollection(people);
//     expect(collection.fn.stringEquals('name', 'David Beckham').count).toBe(1);
//     expect(collection.fn.numberInRange('age', 18, 65).count).toBe(26);
//   });

//   it('FullFunctions advanced usage', () => {
//     const collection = new PersonFullCollection(people);
//     expect(collection.fn.male().count).toBe(14);
//     expect(collection.fn.female().count).toBe(16);
//     expect(collection.fn.adult().count).toBe(30);
//     expect(collection.fn.isFisherman().count).toBe(1);
//     expect(collection.fn.femaleAdultByAge().items[0].name).toBe('Greta Thunberg');
//   });

//   it('Pipe method', () => {
//     const collection = new PersonFullCollection(people);
//     const men = collection.fn.pipe('adult(21) | male()').sort('age', 'desc');
//     expect(men.items[0].name).toBe('Bill Gates');
//     expect(men.items.length).toBe(14);
//   });
// });
