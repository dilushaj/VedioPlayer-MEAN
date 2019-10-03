import { FIrstModuleModule } from './first-module.module';

describe('FIrstModuleModule', () => {
  let fIrstModuleModule: FIrstModuleModule;

  beforeEach(() => {
    fIrstModuleModule = new FIrstModuleModule();
  });

  it('should create an instance', () => {
    expect(fIrstModuleModule).toBeTruthy();
  });
});
