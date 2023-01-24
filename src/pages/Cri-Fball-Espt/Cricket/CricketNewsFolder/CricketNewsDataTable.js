import React, { Component } from "react";
import "./CricketNews.css";
import { useNavigate  } from "react-router-dom";

const CricketNewsDataTable = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(props.obj.articles);
    navigate('/Cricket-News-Details', { state: { data: props.obj.articles[0].id,title: props.obj.category.seo.title, 
      cat: props.obj.articles[0].categoryLabel, published:  props.obj.articles[0].publishedAt, img: props.obj.articles[0].mainMedia.gallery.url} });

  };
  
    return (
      <tr>
        <div className="cricket-live-score">
          <div className="row"onClick={handleClick}>

            <div className="col-md-3">
              <div className="cricket-team1">
                {/* <img src={this.props.obj.mainMedia.thumbnail.url} alt={this.props.obj.mainMedia.thumbnail.alt} /> */}
              </div>
            </div>
            <div className="col-md-10 mx-auto text-center">
              <div className="cricket-score-middle">
                <h4 className="category-seo-title">{props.obj.category.seo.title}</h4>
                <p className="category-seo-description">{props.obj.category.seo.description ? props.obj.category.seo.description : 'No description available'}</p>
                {/* <p>{this.props.obj.articles[0].categoryLabel + ',' + '  ' + this.props.obj.articles[0].publishedAt}</p> */}
                <p className="category-label">{props.obj.articles[0].categoryLabel+',   '+props.obj.articles[0].publishedAt}</p>


                <img src={props.obj.articles[0].mainMedia.gallery.url} alt={props.obj.articles[0].mainMedia.gallery.alt} />
              </div>
            </div>

          </div>
        </div>
      </tr>
    );

  }


export default CricketNewsDataTable;