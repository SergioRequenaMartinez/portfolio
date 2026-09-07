const test = require('node:test');
const assert = require('node:assert/strict');
const { getCurrentYear, getMenuState } = require('../script.js');

test('getCurrentYear devuelve el año de la fecha recibida', () => {
  assert.equal(getCurrentYear(new Date('2026-09-07T00:00:00Z')), '2026');
});

test('getMenuState crea el estado accesible del menú abierto', () => {
  assert.deepEqual(getMenuState(true), { expanded: 'true', label: 'Cerrar menú' });
});

test('getMenuState crea el estado accesible del menú cerrado', () => {
  assert.deepEqual(getMenuState(false), { expanded: 'false', label: 'Abrir menú' });
});
