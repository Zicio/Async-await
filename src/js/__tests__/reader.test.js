import read from '../reader';

jest.mock('../reader');

test('async test', async () => {
  const asyncMock = read.mockRejectedValue(new Error('Async error'));
  expect(await asyncMock()).toThrowError('Async error');
});
