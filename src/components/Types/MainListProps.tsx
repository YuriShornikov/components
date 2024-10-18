import { TheWeatherProps, TheWeather } from './TheWeatherProps';
import { ArticlesProps, Articles } from './ArticlesProps';

export interface MainListProps {
    topic: string;
    link: string;
    topImg?: string;
    altImg?: string;
    text: (TheWeatherProps | ArticlesProps)[];
}

export const MainList = ({ topic, link, topImg, altImg, text }: MainListProps) => {
    return (
        <div>
            <a href={link}>{topic}</a>
            {topImg && <img src={topImg} alt={altImg || 'main image'} />}
            
            {/* Рендерим элементы в зависимости от их типа */}

            {text.map((item, index) => {

            // Проверка на тип TheWeatherProps
            if ('info' in item) {
                return <TheWeather key={index} {...item} />;
            }

            // Проверка на тип ArticlesProps
            if ('title' in item) {
                return <Articles key={index} {...item} />;
            }
            return null;
            })}
        </div>
    );
};