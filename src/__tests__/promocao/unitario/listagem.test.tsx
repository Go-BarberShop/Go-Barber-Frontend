import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery, useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import ListaPromocoes from '@/components/Promocao/ListaPromocao';

// Mocks
jest.mock('react-query');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('ListaPromocoes Component', () => {
  const mockPush = jest.fn();
  const mockMutate = jest.fn();

  beforeEach(() => {
    // Mock do useQuery para retornar dados simulados
    (useQuery as jest.Mock).mockReturnValue({
      data: {
        content: [
          {
            id: '1',
            name: 'Promoção 1',
            totalPrice: '100.00',
            startDate: '2024-11-01',
            endDate: '2024-11-30',
            coupon: 'PROMO1',
          },
        ],
      },
      isLoading: false,
      error: null,
    });

    // Mock do useMutation para simular a mutação
    (useMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
    });

    // Mock do useRouter para a navegação
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });



  it('should navigate to the cadastrar promoção page when "Adicionar Promoção" button is clicked', () => {
    render(<ListaPromocoes />);

    const addButton = screen.getByText('Adicionar Promoção');
    fireEvent.click(addButton);

    expect(mockPush).toHaveBeenCalledWith('/promocoes/cadastrar-promocao');
  });

  it('should call the API and update the list when the page changes', async () => {
    render(<ListaPromocoes />);

    const nextPageButton = screen.getByText('Next');
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalled();
    });
  });
});
