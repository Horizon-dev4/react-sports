import React, { Component } from "react";
// import { table, tbody, td, th, thead, tr } from "react-super-responsive-table";
import "./CricketNews.css";


class CricketNewsDetailsDataTable extends Component {
  render() {
    


    return (
      <>
       <tr>
        <div className="cricket-live-score">
          <div className="row">
             {console.log(this.props.obj.data.content)}
            <div className="col-md-3">
              <div className="cricket-team1">
                {/* <img src={this.props.obj.mainMedia.thumbnail.url} alt={this.props.obj.mainMedia.thumbnail.alt} /> */}
              </div>
            </div>
            <div className="col-md-10 mx-auto text-center">
              <div className="cricket-score-middle">
                
                <h4 className="category-seo-title">{this.props.obj.data.content}</h4>
                <p>{this.props.obj}</p>
              </div>
            </div>

          </div>
        </div>
      </tr>
        
      </>
    );
  }
}
export default CricketNewsDetailsDataTable;
