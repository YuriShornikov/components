/**
 * @file Компонент списка новостей. Отвечает за отображение списка новостей в хедере.
 */
import NewsItem from '../NewsItem/NewsItem';
import './NewList.css';

const NewsList = () => {
  const news = [
    { icon: '📰', text: 'Путин упростил получение автомобильных номеров', link: '#' },
    { icon: '📰', text: 'В команде Зеленского раскрыли план реформ на Украине', link: '#' },
    { icon: '📰', text: '"Турпомощь" прокомментировала гибель десятков росссиян в Анталье', link: '#' },
    { icon: '📰', text: 'Суд закрыл дело Демпартии США против России', link: '#' },
    { icon: '📰', text: 'На украине призвали создать ракеты для удара по Москве', link: '#' },
  ];

  const rates = [
    {text: 'USD MOEX 63,52', link: '#', change: '+0,09'},
    {text: 'USD MOEX 63,52', link: '#', change: '+0,09'},
    {text: 'НЕФТЬ 64,90', link: '#', change: '+1,63'},
  ]

  return (
    <div className='news'>
        {news.map((item, index) => (
            <NewsItem key={index} icon={item.icon} text={item.text} link={item.link} />
        ))}
        <div className='rates'>
            {rates.map((itemRate, indexRate) => (
                <NewsItem key={indexRate} text={itemRate.text} link={itemRate.link} change={itemRate.change} />
            ))}
        </div>
    </div>
  );
};

export default NewsList;
