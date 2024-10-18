/**
 * @file Компонент секция. Отвечает за отображение рекламы ниже поисковика.
 */

import { MainList } from '../Types/MainListProps';
import './Section.css';


const Section = () => {

  const otherList = [
    {topic: 'Погода', link: '#', text: [{img: '###', count: '+17', info: ['Sunny', 'Clear'] }]  },
    {topic: 'Карта германии', link: '#', text: [{title: 'Расписание', link: '#' }]  },
    {topic: 'Эфир', link: '#', text: [{img: '###', title: 'Управление как искусство', link: '#', text: 'Успех' }, {img: '###', title: 'Ночь, мир в это время', link: '#', text: 'erthTV' }, {img: '###', title: 'Андрей Возн...', link: '#', text: 'Совершенно секретно' }]  },
    {topic: 'Посещаемое', link: '#', text: [{title: 'Недвижимость', link: '#', text: '-о сталинках' },{title: 'Маркет', link: '#', text: '-Люстры и светильники' }, {title: 'Авто.ру', link: '#', text: '-привод 4х4 до 500 000' }]  },
    {topic: 'Телепрограмма', link: '#',img: '###', text: [{count: '02:00', title: 'ТНТ. Best', link: '#', text: 'THT International' }, {count: '02:15', title: 'Джинглики', link: '#', text: 'Карусель INT' }, {count: '02:25', title: 'Наедине со всеми', link: '#', text: 'Первый' }]  },
  ]

  return (
    <section>
        {otherList.map((item, index) => (
            <MainList key={index} topic={item.topic} link={item.link} text={item.text}  />
        ))}
    </section>
  );
};
  
  export default Section;
  