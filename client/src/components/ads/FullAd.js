import React, { useEffect } from 'react';
import { getAd, useAdState, useAdDispatch } from '../../context/ads/adContext';
import Spinner from '../layout/Spinner';

const FullAd = ({ match }) => {
  const AdState = useAdState();
  const AdDispatch = useAdDispatch();

  useEffect(() => {
    getAd(AdDispatch, match.params.id);
  }, [AdDispatch, match.params.id]);

  const { ad, loading } = AdState;

  if (loading) return <Spinner />;

  return (
    <div className='ui text container'>
      <h3 className='ui header'>{ad.title}</h3>
      <div className='ui text container segment'>
        <img className='ui large image' src={ad.img} alt='' />
        <p>{ad.desc}</p>
      </div>
    </div>
  );
};

export default FullAd;
