import React, { useEffect } from 'react';
import AdItem from '../ads/AdItem';
import { getAds, useAdState, useAdDispatch } from '../../context/ads/adContext';
import Spinner from '../layout/Spinner';

const ListAdItems = () => {
  const state = useAdState();
  const dispatch = useAdDispatch();

  useEffect(() => {
    getAds(dispatch);
  }, [dispatch]);

  const { ads, loading } = state;

  if (loading) return <Spinner />;

  return (
    <>
      <h3 className='ui header'>Ads</h3>
      <div className='ui container segment'>
        <div className='ui relaxed divided selection list'>
          {ads.map((ad) => (
            <AdItem key={ad._id} ad={ad} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListAdItems;
