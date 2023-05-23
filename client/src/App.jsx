import { useEffect } from 'react';

import fetchDataFromApi from './utils/api';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromApi('/movie/popular');
      console.log(data);
    };

    fetchData();
  }, []);

  return <div>App</div>;
};

export default App;
