 
 /* eslint-env vitest */

 import '@testing-library/jest-dom';
import { beforeEach, afterEach } from 'vitest';

beforeEach(() => {
  global.fetch = vi.fn();
});

afterEach(() => {
  vi.restoreAllMocks();
});
