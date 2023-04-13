import { useSelector } from 'react-redux';
import RouterContainer from './router/index';
import { drakModeGlogbal } from './store/select';

function App() {
  const drakMode = useSelector(drakModeGlogbal);

  return (
    <div className={`App ${drakMode ? 'dark' : ''} `}>
      <RouterContainer />
    </div>
  );
}

export default App;
