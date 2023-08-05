import React, { useEffect, useState } from 'react';
import ControlMenu from '../components/ControlMenu';
import DustItem from '../components/DustItem';
import { useSelector, useDispatch } from 'react-redux';
import { dataActions } from '../store/index';
import useAllSido from '../hooks/useAllSido';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { sidos } from '../utils/constants';

export default function Nationwide() {
  const dustInfo = useSelector((state) => state.dusts);
  const [selectedSido, setSelectedSido] = useState(sidos[0].value);
  const [loading, error, dusts] = useAllSido({ sidoName: selectedSido });
  const dispatch = useDispatch();
  const filtered = getFilteredsido(dustInfo, selectedSido);

  useEffect(() => {
    dispatch(dataActions.addDusts(dusts));
  }, [dispatch, dusts]);

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
      {filtered.length !== 0 && (
        <ul>
          {filtered.map((dust) => (
            <DustItem key={`${dust.stationName}`} {...dust} />
          ))}
        </ul>
      )}
    </main>
  );
}

function getFilteredsido(dusts, sido) {
  if (sido === '전국') return dusts;
  return dusts.filter((dust) => dust.sidoName === sido);
}
