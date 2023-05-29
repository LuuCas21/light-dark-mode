import { useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { myContext } from '../context/changeTheme';

const ButtonWrapper = () => {
    const { theme, changeTheme } = useContext(myContext);

    return (
        <div className='wrapper'>
            {(theme === 'light') ? <BiMoon onClick={() => changeTheme()} style={{ cursor: 'pointer', fontSize: '50px', color: 'black' }}/> : <BiSun onClick={() => changeTheme()} style={{ cursor: 'pointer', fontSize: '50px', color: 'white' }}/>}
        </div>
    );
};

export default ButtonWrapper;