import React, { useEffect, useState } from 'react';
import ControlMenu from '../components/ControlMenu';
import DustItem from '../components/DustItem';
import { useSelector, useDispatch } from 'react-redux';
import { dataActions } from '../store/index';
import useDust from '../hooks/use-dust';
import Error from '../components/Error';
import Loading from '../components/Loading';

//export default function AllSidoList({ sido, setSido, sidos }) {
export default function AllSidoList() {
  const dustInfo = useSelector((state) => state.dusts);
  const [selectedSido, setSelectedSido] = useState(sidos[0].value);
  const [loading, error, dusts] = useDust({ sidoName: selectedSido });
  const dispatch = useDispatch();
  const filtered = getFilteredsido(dustInfo, selectedSido);
  console.log(dusts);

  useEffect(() => {
    dispatch(dataActions.addDusts(dusts));
  }, [dispatch, dusts]);

  // const emotions = ['(⊙x⊙;)', '＞﹏＜', 'இ௰இ', 'ᕦ(ò_óˇ)ᕤ'];

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  //   return (
  //     <div className='status-container'>
  //       <p className='emotion'>{emotions[Math.floor(Math.random() * 5)]}</p>
  //       <p className='error-message'>{error}</p>
  //     </div>
  //   );

  // if (loading)
  //   return (
  //     <div className='status-container'>
  //       <img
  //         className='loading-spinner'
  //         src='https://media.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'
  //         alt='Loading Spinner'
  //       />
  //     </div>
  //   );

  return (
    <main className='dust-info'>
      <div className='menu'>
        <ControlMenu
          list={sidos}
          value={selectedSido}
          onChange={setSelectedSido}
        />
      </div>
      {filtered.length !== 0 && (
        <section>
          {filtered.map((dust) => (
            <DustItem key={`${dust.stationName}`} {...dust} />
          ))}
        </section>
      )}
    </main>
  );
}

function getFilteredsido(dusts, sido) {
  if (sido === '전국') return dusts;
  return dusts.filter((dust) => dust.sidoName === sido);
}

/**
 * 상수는 따로 파일로 빼서 관리하는 것도 고려해보시면 좋을 것 같습니다.
 */
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
