import { useGetAlbums } from '@api/getAlbums';
import { useAlbums } from '@hooks/useAlbums';
import { MOCK_ALBUMS } from '@mocks/album';
import { MOCK_USERS } from '@mocks/user';
import { renderHook } from '@testing-library/react';

const mockUseGetAlbums = useGetAlbums as jest.Mock;

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@api/getAlbums', () => ({
  useGetAlbums: jest.fn(),
}));

const USER_ID = 1;

describe('useAlbums', () => {
  beforeEach(() => {
    mockUseGetAlbums.mockReturnValue({ data: MOCK_ALBUMS, isLoading: false });
    localStorage.setItem('users', JSON.stringify(MOCK_USERS));
  });

  it('should return albums data', () => {
    const { result } = renderHook(() => useAlbums(USER_ID));

    expect(result.current.albums).toEqual(MOCK_ALBUMS);
    expect(result.current.isLoading).toBe(false);
  });

  it('should return current user', () => {
    const { result } = renderHook(() => useAlbums(USER_ID));

    expect(result.current.currentUser).toEqual(MOCK_USERS[0]);
  });

  it('columns quantity should be two', () => {
    const { result } = renderHook(() => useAlbums(USER_ID));

    const columns = result.current.columns;

    expect(columns.length).toBe(2);
  });
});
