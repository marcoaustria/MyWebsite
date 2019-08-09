import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ marginBottom: "15px" }}>Check Out Some of My Projects</h1>
            <h1 style={{ marginBottom: "20px", textTransform: "none", fontSize: "12px" }}>Click each image to learn more!</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <a href={`${item.giturl}`} >

                        <div className="item-wrap">
                          {/* TODO link to git not working */}
                          <img src={`${item.imgurl}`} className="item-img" />

                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>

                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}