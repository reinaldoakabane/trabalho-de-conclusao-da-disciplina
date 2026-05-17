import ServicoDePagamento from '../src/servicoDePagamento.js';
import assert from 'node:assert';

describe('Testes da classe de Servico De Pagamento', () => {
    it('Validar que uma transferencia menor de R$100.00 é adicionada a lista de transferencias e sua categoria é padrão', () => {
        // Arrange (o que eu preciso para testar a função?)
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1234-4321-5678', 'SAAE', 99.99);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '1234-4321-5678');
        assert.equal(ultimoPagamento.empresa, 'SAAE');
        assert.equal(ultimoPagamento.valor, 99.99);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    })

    it('Validar que uma transferencia maior que R$100.00 é adicionada na lista de transferencias e sua categoria é cara', () => {
        // Arrange (o que eu preciso para testar a função?)
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('9999-4444-5550', 'Enel', 210.77);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '9999-4444-5550');
        assert.equal(ultimoPagamento.empresa, 'Enel');
        assert.equal(ultimoPagamento.valor, 210.77);
        assert.equal(ultimoPagamento.categoria, 'cara');
    })

    it('Validar que R$100.00 é limite da categoria padrão', () => {
        // Arrange (o que eu preciso para testar a função?)
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('0001-2223-4445', 'Sabesp', 100.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '0001-2223-4445');
        assert.equal(ultimoPagamento.empresa, 'Sabesp');
        assert.equal(ultimoPagamento.valor, 100.00);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    })

    it('Validar que somente o ultimo pagamento é retornado', () => {
        // Arrange (o que eu preciso para testar a função?)
        const servicoDePagamento = new ServicoDePagamento();

        // Act
        servicoDePagamento.pagar('1111-2222-3333', 'Sabesp', 100.00);
        servicoDePagamento.pagar('4444-5555-6666', 'Enel', 300.00);
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '4444-5555-6666');
        assert.equal(ultimoPagamento.empresa, 'Enel');
        assert.equal(ultimoPagamento.valor, 300.00);
        assert.equal(ultimoPagamento.categoria, 'cara');
    })

    it('Deve retornar undefined ao consultar sem pagamentos realizados', () => {
        const servicoDePagamento = new ServicoDePagamento();
        const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();
        assert.equal(ultimoPagamento, undefined);
    });
});