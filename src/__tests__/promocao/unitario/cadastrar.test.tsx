import { render, screen, fireEvent, act } from '@testing-library/react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import CadastroPromocao from '@/components/Promocao/CadastrarPromocao';

jest.mock('react-query', () => ({
  useMutation: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/api/promocoes/postPromocao');

describe('CadastroPromocao Component', () => {
  const mockPush = jest.fn();
  const mockMutate = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });

    (useMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
    });
  });

  it('should render the form inputs correctly', async () => {
    await act(async () => {
      render(<CadastroPromocao />);
    });

    expect(screen.getByLabelText(/Nome da Promoção/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Valor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data Inicio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data Fim/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Código do Cupom/i)).toBeInTheDocument();
  });

  it('should submit the form with correct data', async () => {
    await act(async () => {
      render(<CadastroPromocao />);
    });

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/Nome da Promoção/i), { target: { value: 'Promoção de Teste' } });
      fireEvent.change(screen.getByLabelText(/Valor/i), { target: { value: '100.00' } });
      fireEvent.change(screen.getByLabelText(/Data Inicio/i), { target: { value: '2024-12-01' } });
      fireEvent.change(screen.getByLabelText(/Data Fim/i), { target: { value: '2024-12-31' } });
      fireEvent.change(screen.getByLabelText(/Código do Cupom/i), { target: { value: 'PROMO2024' } });

      fireEvent.click(screen.getByText(/Finalizar/i));
    });

    expect(mockMutate).toHaveBeenCalledWith({
      name: 'Promoção de Teste',
      totalPrice: 100.00,
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      coupon: 'PROMO2024',
    });
  });
});
