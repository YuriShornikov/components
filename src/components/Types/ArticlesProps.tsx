import './ArticlesProps.css';

export interface ArticlesProps {
    img?: string;
    count?: string;
    title: string;
    link: string;
    text?: string;
}

export const Articles = ({ img, count, title, link, text }: ArticlesProps) => {
  return (
    <div>
      
      <a href={link} className="art-link">
        {img && <img src={img} alt="article image" />}
        {count && <span>{count}</span>}
        <span>{title}</span>{text && <p>{text}</p>}
      </a>
      
    </div>
  );
};
