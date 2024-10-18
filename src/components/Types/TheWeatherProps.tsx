import './TheWeatherProps.css';

export interface TheWeatherProps {
    img?: string;
    count?: string;
    info?: string[];
}

export const TheWeather = ({ img, count, info }: TheWeatherProps) => {
  return (
    <div className='weather'>
      {img && <img src={img} alt="weather img" />}
      <p>{count}</p>
      <ul>
        {info && info.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};
