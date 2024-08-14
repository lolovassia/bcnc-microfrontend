import { useGetAlbums } from '@api/getAlbums';
import { useGetPhotos } from '@api/getPhotos';
import { usePhotos } from '@hooks/usePhotos';
import { MOCK_ALBUMS } from '@mocks/album';
import { MOCK_PHOTOS } from '@mocks/photos';
import { renderHook } from '@testing-library/react';

jest.mock('@api/getAlbums', () => ({
  useGetAlbums: jest.fn(),
}));

jest.mock('@api/getPhotos', () => ({
  useGetPhotos: jest.fn(),
}));

const mockUseGetPhotos = useGetPhotos as jest.Mock;
const mockUseGetAlbums = useGetAlbums as jest.Mock;

describe('usePhotos', () => {
  beforeEach(() => {
    mockUseGetPhotos.mockReturnValue({ data: MOCK_PHOTOS, isLoading: false });
    mockUseGetAlbums.mockReturnValue({ data: MOCK_ALBUMS, isLoading: false });
  });

  const ALBUM_ID = 1;
  const PAGE = 1;

  it('should return albums data', async () => {
    const { result } = renderHook(() => usePhotos(ALBUM_ID, PAGE));

    expect(result.current.hideSeeMore).toBe(false);
    expect(result.current.currentAlbum).toEqual(MOCK_ALBUMS);
  });

  it('should return photos data', async () => {
    const { result } = renderHook(() => usePhotos(ALBUM_ID, PAGE));

    expect(result.current.photos).toEqual(MOCK_PHOTOS);
    expect(result.current.isLoading).toBe(false);
  });

  it('should set hideSeeMore to true when no more photos', async () => {
    mockUseGetPhotos.mockReturnValue({ data: [], isLoading: false });

    const { result } = renderHook(() => usePhotos(ALBUM_ID, PAGE));

    expect(result.current.hideSeeMore).toBe(true);
  });

  it('should handle loading state', () => {
    mockUseGetPhotos.mockReturnValue({ data: null, isLoading: true });

    const { result } = renderHook(() => usePhotos(ALBUM_ID, PAGE));

    expect(result.current.isLoading).toBe(true);
  });
});
