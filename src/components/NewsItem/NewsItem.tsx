/**
 * @file Компонент новости. Отвечает за отображение одной новости с иконкой или без , текстом и ссылкой для списка новостей хедера.
 * @param {string} icon Иконка новости.
 * @param {string} text Текст новости.
 * @param {string} link Ссылка на новость.
 */
interface NewsItemProps {
    icon?: string;
    text: string;
    link: string;
    change?: string;
}

const NewsItem = ({ icon, text, link, change }: NewsItemProps) => {
    return (
        <div className="block">
            {icon && ( <span>{icon}</span>)}
            <a href={link}>{text}</a>
            <p>{change}</p>
        </div>
    );
};
  
export default NewsItem;

  