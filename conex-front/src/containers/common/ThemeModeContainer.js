import ThemeModeSwitch from '../../components/common/ThemeModeSwitch';
import { useSelector, useDispatch } from 'react-redux';
import { changeThemeMode } from '../../stores/common/theme';

const ThemeModeContainer = () => {
  const { darkMode } = useSelector(({ theme }) => ({
    darkMode: theme.darkMode,
  }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const darkMode = e.target.checked;

    localStorage.setItem('darkMode', darkMode.toString());
    dispatch(changeThemeMode(darkMode));
  };

  return (
    <>
      <ThemeModeSwitch darkMode={darkMode} onChange={onChange} />
    </>
  );
};

export default ThemeModeContainer;
