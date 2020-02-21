import { CodeToStringPipe } from './code-to-string.pipe';

describe('CodeToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new CodeToStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "Une Attaque"', () => {
    const pipe = new CodeToStringPipe();
    expect(pipe.transform('une-attaque')).toEqual('Une Attaque');
  });
});
