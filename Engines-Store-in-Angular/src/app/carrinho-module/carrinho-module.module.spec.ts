import { CarrinhoModuleModule } from './carrinho-module.module';

describe('CarrinhoModuleModule', () => {
  let carrinhoModuleModule: CarrinhoModuleModule;

  beforeEach(() => {
    carrinhoModuleModule = new CarrinhoModuleModule();
  });

  it('should create an instance', () => {
    expect(carrinhoModuleModule).toBeTruthy();
  });
});
