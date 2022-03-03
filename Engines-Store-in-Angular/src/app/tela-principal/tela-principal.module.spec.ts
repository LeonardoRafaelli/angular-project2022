import { TelaPrincipalModule } from './tela-principal.module';

describe('TelaPrincipalModule', () => {
  let telaPrincipalModule: TelaPrincipalModule;

  beforeEach(() => {
    telaPrincipalModule = new TelaPrincipalModule();
  });

  it('should create an instance', () => {
    expect(telaPrincipalModule).toBeTruthy();
  });
});
