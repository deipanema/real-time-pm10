import { useEffect, useState } from 'react';
import ControlMenu from '../components/ControlMenu';
import DustCard from '../components/DustCard';
import useAllSido, { DUSTS_PER_PAGE } from '../hooks/useAllSido';
import Error from '../components/Error';
import SkeletonLoading from '../components/SkeletonLoading';
import { useDispatch } from 'react-redux';
import { loadBookmarks } from '../store/bookmarkSlice';

export default function Nationwide() {
  const [selectedSido, setSelectedSido] = useState(sidos[0].value);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, error, dusts] = useAllSido(selectedSido, currentPage);
  const maxPage = Math.ceil(Number(dusts.totalCount) / DUSTS_PER_PAGE);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedState = localStorage.getItem('bookmark');

    dispatch(loadBookmarks(storedState));
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSido]);

  const loadMoreDusts = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (error) return <Error error={error} />;

  return (
    <main className='dust-info'>
      <div className='menu'>
        <ControlMenu
          list={sidos}
          value={selectedSido}
          onChange={setSelectedSido}
        />
      </div>
      {loading && currentPage === 1 ? (
        <SkeletonLoading count={DUSTS_PER_PAGE} />
      ) : (
        <>
          {dusts.items.length !== 0 && (
            <ul>
              {dusts.items.map((dust, index) => (
                <DustCard key={`${dust.stationName}-${index}`} {...dust} />
              ))}
            </ul>
          )}
          {currentPage < maxPage && (
            <button className='view-more' onClick={loadMoreDusts}>
              {loading ? '로딩중...' : '더보기'}
            </button>
          )}
        </>
      )}
    </main>
  );
}

const sidos = [
  { name: '전국', value: '전국' },
  { name: '서울', value: '서울' },
  { name: '부산', value: '부산' },
  { name: '대구', value: '대구' },
  { name: '인천', value: '인천' },
  { name: '광주', value: '광주' },
  { name: '대전', value: '대전' },
  { name: '울산', value: '울산' },
  { name: '경기', value: '경기' },
  { name: '강원', value: '강원' },
  { name: '충북', value: '충북' },
  { name: '충남', value: '충남' },
  { name: '전북', value: '전북' },
  { name: '전남', value: '전남' },
  { name: '경북', value: '경북' },
  { name: '경남', value: '경남' },
  { name: '제주', value: '제주' },
  { name: '세종', value: '세종' },
];
