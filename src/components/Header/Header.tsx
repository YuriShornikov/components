/**
 * @file Компонент шапки. Отвечает за отображение верхней части новостей.
 */

import NewsItem from '../NewsItem/NewsItem';
import NewsList from '../NewsList/NewList';
import './Header.css';

const Header = () => {
  const news = [
    { text: 'Сейчас в СМИ', link: '#' },
    { text: 'В Германии', link: '#' },
    { text: 'Рекомендуем', link: '#' },
  ];

  return (
    <header>
      <div className='top-blocks'>
        {news.map((item, index) => (
          <NewsItem key={index} text={item.text} link={item.link} />
        ))}
        <div className='data'>31 июля, среда 02:32</div>
      </div>
      <div className='news-blocks'>
        <NewsList />
      </div>
    </header>
    
  );
};
  
  export default Header;
  