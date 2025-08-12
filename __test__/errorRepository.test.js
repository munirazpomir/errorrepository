import ErrorRepository from '../src/errorRepository.js';

describe('ErrorRepository', () => {
  test('constructor creates Map with predefined errors', () => {
    const repo = new ErrorRepository();
    expect(repo.errors instanceof Map).toBe(true);
    // Проверяем, что известные коды присутствуют
    expect(repo.errors.has(10)).toBe(true);
    expect(repo.errors.get(10)).toBe('Invalid user input');
  });

  test('translate returns correct message for known code', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(20)).toBe('Connection failed');
    expect(repo.translate(30)).toBe('Timeout exceeded');
  });

  test('translate returns "Unknown error" for unknown codes', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(999)).toBe('Unknown error');
    expect(repo.translate(undefined)).toBe('Unknown error');
    expect(repo.translate(null)).toBe('Unknown error');
  });
});