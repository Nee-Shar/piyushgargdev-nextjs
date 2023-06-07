import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";
import Link from "next/link";

const PortfolioItem = (props) => {
  const {
    title,
    img,
    liveUrl,
    keyword = [],
    subtitle,
    ribbonText = null,
  } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <a
        target="_blank"
        style={{ textDecoration: "none" }}
        href={liveUrl}
        rel="noreferrer"
      >
        <>
          {ribbonText && (
            <div style={{ zIndex: 99 }} className="ribbon ribbon-top-left">
              <span>{ribbonText}</span>
            </div>
          )}

          <div className="bg-transparent">
            <div className={`${classes.portfolio__img}`}>
              <Image alt={title} src={img} width="380" height="250" />
            </div>

            <h3 style={{ background: "transparent" }}>{title}</h3>
            <p style={{ background: "transparent" }}>{subtitle}</p>

            <div
              style={{
                position: "absolute",
                background: "transparent",
                bottom: "20px",
              }}
            >
              {keyword.map((item, index) => (
                <span className={`${classes.portfolio__keyword}`} key={index} >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </>
      </a>
    </div>
  );
};

export default PortfolioItem;
