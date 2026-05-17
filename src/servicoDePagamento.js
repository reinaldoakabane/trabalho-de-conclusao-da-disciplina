/*Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.
 Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos.
 Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor.
 Quando um pagamento for realizado e o valor for maior que 100.00,
 o pagamento também terá a propriedade 'categoria' preenchida pela função como 'cara',
 caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'.
 O método de consultar trará apenas o último pagamento.
  
  exemplo:
  const servicoDePagamento = new ServicoDePagamento();
  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
  console.log(servicoDePagamento.consultarUltimoPagamento());
  {
     codigoBarras: '0987-7656-3475',
     empresa: 'Samar',
     valor: 56.87,
     categoria: 'cara'
  }
  
  A entregua deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe
  dentro da pasta test usando Mocha e Node Assert.

  */

export default class ServicoDePagamento {
    #pagamentos

    constructor() {
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) {
        let categoria = 'padrão';

        if (valor > 100.00) {
            categoria = 'cara';
        }

        this.#pagamentos.push({
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        });

    }
    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}

const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar('0987-7656-3475', 'Samar', 55.99);
console.log(servicoDePagamento.consultarUltimoPagamento());