import MeinMenu from './components/MainMenu/MainMenu'
import HomePage from './components/Page/HomePage/HomePage'
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     {loading ? <MeinMenu/>: <HomePage/>}
    </>
  )
}

export default App
