import { BaseFunctions } from './dist/esm/BaseFunctions.js';

const items = [
  { name: 'Pikachu', age: 5, type: 'electric' },
  { name: 'Charizard', age: 10, type: 'fire' },
  { name: 'Blastoise', age: 8, type: 'water' },
];

console.log('=== Test de la méthode step ===');

// Test 1: Utilisation normale sans step
console.log('\n1. Sans step:');
const result1 = new BaseFunctions(items).where((item) => item.age > 6);
console.log('Filters:', result1.info.filters); // Devrait être ['_anonymous_']

// Test 2: Le bon usage de step
console.log('\n2. Usage correct de step:');
const base2 = new BaseFunctions(items);
base2._pendingStepName = 'adults'; // Simuler step
const result2 = base2.where((item) => item.age > 6);
console.log('Filters:', result2.info.filters); // Devrait être ['adults']

// Test 3: Avec fonction nommée
console.log('\n3. Avec fonction nommée:');
function isElectric(item) {
  return item.type === 'electric';
}
const result3 = new BaseFunctions(items).where(isElectric);
console.log('Filters:', result3.info.filters); // Devrait être ['isElectric']

console.log('\n=== Fin des tests ===');
