import { render, screen, fireEvent, act } from '@testing-library/react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import DetalharPromocao from '@/components/Promocao/DetalharPromocao';

jest.mock('react-query', () => ({
  useMutation: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('DetalharPromocao Component', () => {
  const mockPush = jest.fn();
  const mockMutate = jest.fn();

  const mockPromocao = {
    id: '1',
    name: 'Promoção Teste',
    totalPrice: '100.00',
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    coupon: 'PROMO24',
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (useMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
    });
  });

  it('should allow editing the promotion details', async () => {
    await act(async () => {
      render(
        <DetalharPromocao
          promocao={mockPromocao}
          backDetalhamento={() => {}}
          hrefAnterior="/"
          diretorioAtual="Detalhes"
          dirAnt="Promoções"
          hrefAtual="/"
        />
      );
    });

    // Clicar no botão "Editar" para habilitar os campos para edição
    const editButton = screen.getByText(/Editar/i);
    await act(async () => {
      fireEvent.click(editButton);
    });

    // Verificar se os campos foram habilitados para edição
    const nameInput = screen.getByLabelText('Nome');
    expect(nameInput).not.toBeDisabled();

    // Atualizar o valor do campo "Nome"
    await act(async () => {
      fireEvent.change(nameInput, { target: { value: 'Promoção Editada' } });
    });

    // Clicar no botão "Salvar" para salvar as mudanças
    await act(async () => {
      fireEvent.click(screen.getByText(/Salvar/i));
    });

    // Verificar se o método `mutate` foi chamado com os dados corretos
    expect(mockMutate).toHaveBeenCalledWith({
      id: '1',
      name: 'Promoção Editada',
      totalPrice: '100.00',
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      coupon: 'PROMO24',
    });
  });
});
