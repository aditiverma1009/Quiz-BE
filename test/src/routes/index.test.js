const server = require('../../../server');

describe('Testcase for root server', () => {
  it('Should print On root. Go to login.', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.payload).toBe('On root. Go to login.');
      done();
    });
  });

  it('Testing for status code', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
