import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChess } from './store/slices/chessSlice';
import Chess from './components/Chess';

function App() {
  const data = useSelector((state) => state.chess.data);
  const dispatch = useDispatch();

  const newDivision = {
    title: data?.map((i) => i.title),
    idd: data?.map((i) => i.id),
  };
  const id = newDivision.idd[0];
  const title = newDivision.title[0];

  React.useEffect(() => {
    dispatch(fetchChess());
  }, []);

  return (
    <div className="App">
      <Chess title={title} id={id} />
    </div>
  );
}

export default App;
