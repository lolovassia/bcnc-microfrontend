import { useGetUsers } from '@api/getUsers';
import { useUsers } from '@hooks/useUsers';
import { MOCK_USERS } from '@mocks/user';
import { renderHook } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@api/getUsers', () => ({
  useGetUsers: jest.fn(),
}));

jest.mock('@api/getUsers', () => ({
  useGetUsers: jest.fn(),
}));

const mockUseGetUsers = useGetUsers as jest.Mock;

describe('useUsers', () => {
  beforeEach(() => {
    mockUseGetUsers.mockReturnValue({ data: MOCK_USERS, isLoading: false });
    localStorage.setItem('users', JSON.stringify(MOCK_USERS));
  });

  it('should return users data', async () => {
    const { result } = renderHook(() => useUsers());

    expect(result.current.users).toEqual(MOCK_USERS);
    expect(result.current.isLoading).toBe(false);
  });

  it('columns quantity should be two', () => {
    const { result } = renderHook(() => useUsers());

    const columns = result.current.columns;

    expect(columns.length).toBe(6);
  });
});
