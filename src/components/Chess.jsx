import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDivision } from '../store/slices/divisionSlice';
import ChessItems from './ChessItems';
import './scss/Chess.scss';

const Chess = ({ title, id }) => {
  const [isActive, setIsActive] = React.useState(false);
  const division = useSelector((state) => state.division.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchDivision(id));
  }, [id]);
  return (
    <div>
      <div className="dropdown">
        <h5 onClick={(e) => setIsActive(!isActive)}>{title}</h5>
      </div>
      {isActive && <ChessItems data={division} />}
    </div>
  );
};

export default Chess;
