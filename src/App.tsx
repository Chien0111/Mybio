import { useEffect } from 'react';
import RouterContainer from './router/index';

function App() {
  const darkToggle = localStorage.getItem('dark');
  useEffect(() => {
    console.log('chiennx', darkToggle);
  }, [darkToggle]);
  return (
    <div className={`App ${darkToggle ? 'dark' : ''} `}>
      <RouterContainer />
    </div>
  );
}

export default App;
