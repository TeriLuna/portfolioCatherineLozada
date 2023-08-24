import React, { Component } from "react";

const Portfolio_image = (
  <img
    src="./assets/images/portfolio/portfolio-1.jpg"
    alt="Nattylense website photography"
  />
);
const Portfolio_image2 = (
  <img
    src="./assets/images/portfolio/portfolio-2.jpg"
    alt="FBM website for IT company"
  />
);
const Portfolio_image3 = (
  <img
    src="./assets/images/portfolio/portfolio-3.jpg"
    alt="Ramdassdass spiritual website to undersant the life and the universe"
  />
);

const PortfolioListContent = [
  {
    image: Portfolio_image,
    category: "Website Development",
    title: "Nattylense",
    link: "https://www.nattylense.com/",
    description:
      "Ruby on Rails, React JS, Bootstrap 5, PostgrestSQL, Heroku, AWS S3, Javascript.",
  },
  {
    image: Portfolio_image2,
    category: "Website Development",
    title: "Fcking Brand Me",
    link: "http://www.fckingbrandme.com/",
    description:
      "React JS, Bootstrap, GitHub, Scrum, Trello, Git, JSX, Next JS.",
  },
  {
    image: Portfolio_image3,
    category: "Website Development",
    title: "Ramdassdas",
    link: "https://www.ramdassdass.com/",
    description:
      "React JS, Ruby on Rails, Bootstrap 5, PostgrestSQL, Heroku, AWS S3, Javascript.",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`im_portfolio ${styevariation}`}>
              <div className="thumbnail_inner">
                <div className="thumbnail">
                  <a
                    href={value.link}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    {value.image}
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="inner">
                  <div className="portfolio_heading">
                    <div className="category_list">
                      <a
                        href={value.link}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                      >
                        {value.category}
                      </a>
                    </div>
                    <h4 className="title">
                      <a
                        href={value.link}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                      >
                        {value.title}
                      </a>
                    </h4>
                  </div>
                  <div className="portfolio_hover">
                    <p style={{ fontSize: "0.85em" }}>{value.description}</p>
                  </div>
                </div>
              </div>

              <a
                className="transparent_link"
                href={value.link}
                target={"_blank"}
                rel={"noopener noreferrer"}
                dangerouslySetInnerHTML={{ __html: value.title }}
              ></a>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
