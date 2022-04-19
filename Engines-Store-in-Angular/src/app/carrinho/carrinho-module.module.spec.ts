import { CarrinhoModule } from './carrinho-module.module';

describe('CarrinhoModuleModule', () => {
  let carrinhoModule: CarrinhoModule;

  beforeEach(() => {
    carrinhoModule = new CarrinhoModule();
  });

  it('should create an instance', () => {
    expect(carrinhoModule).toBeTruthy();
  });
});
