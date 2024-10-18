/**
 * @file Компонент шапки. Отвечает за отображение панели поиска и самого поисковика.
 */

import NewsItem from '../NewsItem/NewsItem';
import './Main.css';



const Main = () => {

  const searchList = [
    {text: 'Видео', link: '#' },
    {text: 'Картинки', link: '#' },
    {text: 'Новости', link: '#' },
    {text: 'Карты', link: '#' },
    {text: 'Маркет', link: '#' },
    {text: 'Переводчик', link: '#' },
    {text: 'Эфир', link: '#' },
    {text: 'ещё', link: '#' },
  ]

  return (
    <main>
      <nav className='search-menu'>
        {searchList.map((item, index) => (
          <NewsItem key={index} text={item.text} link={item.link}/>
        ))}
      </nav>
      <div className='search-block'>
        <img src="###" alt="Яндекс" />
        <div className='search'>
            <input type="text" name="" id="" />
            <button className='search-btn'>Найти</button>
            <p>Найдется все. Например, фаза луны сегодня</p>
        </div>
    </div>
    <aside className='banner'>
        <img src="###" alt="Тут типа форсаж +100500" />
    </aside>
    </main>
    
  );
};
  
  export default Main;
  