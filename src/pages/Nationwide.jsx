import { useState } from 'react';
import ControlMenu from '../components/ControlMenu';
import DustItem from '../components/DustItem';
import useAllSido from '../hooks/useAllSido';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Nationwide() {
  const [selectedSido, setSelectedSido] = useState(sidos[0].value);
  const [loading, error, dusts] = useAllSido(selectedSido);

  if (loading) return <Loading />;
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
      {dusts.length !== 0 && (
        <ul>
          {dusts.map((dust) => (
            <DustItem key={`${dust.stationName}`} {...dust} />
          ))}
        </ul>
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
