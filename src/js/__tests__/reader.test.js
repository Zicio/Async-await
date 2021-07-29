import read from '../reader';

jest.mock('../reader');

test('async test', async () => {
  read.mockRejectedValue(new Error('Async error'));
  expect(await read()).toThrow(new Error('Async error'));
});

test('async test', async () => {
  read.mockResolvedValue(1);
  expect(await read()).toBe(1);
});
