import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { expect, vi } from 'vitest';

global.fetch =vi.fn(); 

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'leanne@example.com',
    phone: '1-770-736-8031',
    address: {
      street: 'Kulas Light',
    },
  },
];

describe('App component', () => {
  beforeEach(() => {
    fetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockUsers),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders Jobcard components with fetched data', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Name : Leanne Graham')).toBeInTheDocument();
      expect(screen.getByText('Address: Kulas Light')).toBeInTheDocument();     

    });
  });
});
