const NewsItem = (props) => {
  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src={props.urlToImage} className="card-img-top" alt="here" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.description}
          </p>
          <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};
export default NewsItem;
