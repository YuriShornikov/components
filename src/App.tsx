/**
 * @file Главный компонент приложения. Отвечает за отрисовку всех дочерних компонентов.
 */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Section from './components/Section/Section';

import './App.css';

const App = () => {
  return (
    <div className='yandex'>
      <Header />
      <Main />
      <Section />
    </div>
  );
};

export default App;
