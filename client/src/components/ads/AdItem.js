import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const AdItem = ({ ad }) => {
  const { title, desc, img, type, date, _id } = ad;
  const minifiedDesc = desc.slice(0, 100) + ' ... ';

  return (
    <div className='item'>
      <img className='ui avatar image' src={img} alt='' />
      <div className='middle aligned content'>
        <div className='header'>
          {' '}
          <Link to={`/ads/${_id}`}> {title}</Link>
        </div>
        <div className='description'>
          {minifiedDesc}
          <div className='ui tiny label'>
            <Moment fromNow>{date}</Moment>
          </div>
          {type === 'Personal' ? (
            <div className='ui blue tiny label'>{type}</div>
          ) : (
            <div className='ui green tiny label'>{type}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AdItem);
