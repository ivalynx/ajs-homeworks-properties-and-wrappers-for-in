import object from '../obj';
import orderByProps from '../app';

test('Должен сортировать объект, сначала должны выводиться name & level', () => {
  const result = orderByProps(object, ['name', 'level']);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ]);
});

test('Должен сортировать объект, сначала должны выводиться health & name', () => {
  const result = orderByProps(object, ['health', 'name']);

  expect(result).toEqual([
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
  ]);
});
