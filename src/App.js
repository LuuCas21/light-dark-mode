import { useState, useEffect } from 'react';
import ButtonWrapper from './components/ButtonWrapper';
import { myContext, themes } from './context/changeTheme';
import './App.css';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
   (theme === themes.light) ? setTheme(themes.dark) : setTheme(themes.light);
  };

  useEffect(() => {
    const docBody = document.body;

    switch (theme) {
      case themes.light :
        docBody.classList.remove('dark');
        docBody.classList.add('light');
      break;
      case themes.dark :
        docBody.classList.remove('light');
        docBody.classList.add('dark');
      break;
      default :
        console.log('An error occurred');
    };

  }, [theme]);

  return (
    <div className='app'>
      <myContext.Provider value={{ theme, changeTheme }}>
        <ButtonWrapper />
      </myContext.Provider>
    </div>
  );
}

export default App;
