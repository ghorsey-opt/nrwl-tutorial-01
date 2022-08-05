import { ApiResponse, API_URL } from './api-interface';

describe('API_URL', () => {
  it('should work', () => {
    expect(API_URL).toEqual('/api/message');
  });
});
