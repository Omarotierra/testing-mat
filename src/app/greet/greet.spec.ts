import { greet } from './greet';

describe('greet', () => {
  it('should include the name in the message', () => {
    const name = 'mosh';
    const greeting = greet(name);
    expect(greeting).toContain(name);
  });
});
