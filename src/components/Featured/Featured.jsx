import React from "react";
import "./Featured.css";
import { featuredData } from "../../data";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import cheerio from "cheerio";
import axios from "axios";

const Featured = () => {
  const scrapeLatestPost = async () => {
    try {
      const profileUrl = "https://www.linkedin.com/company/mortgage-titans/"; // Replace with actual profile URL
      const response = await axios.get(profileUrl);
      const $ = cheerio.load(response.data);

      // Hypothetical selector for the latest post (replace with actual selector)
      const latestPost = $(".feed-shared-update-v2:first-child");

      const postData = {
        title: latestPost.find(".feed-shared-update-v2__title").text().trim(),
        content: latestPost
          .find(".feed-shared-update-v2__description")
          .text()
          .trim(),
      };

      return postData;
    } catch (error) {
      console.error("Error scraping LinkedIn post:", error);
      return null;
    }
  };
  return (
    <div className="featured">
      <h3>NEWS & BLOG</h3>
      <h2
        className="homehero_welcome"
        style={{
          margin: "0px",
          textAlign: "center",
          color: "#033872",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}>
        Featured News And Insights
        <div
          style={{
            marginBottom: "3rem",
            marginTop: "1rem",
          }}
          className="underline"></div>
      </h2>

      <div className="featured_linkdin_posts">
        <iframe
          src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25425018"
          // frameborder="0"
          width="90%"
          height="700"></iframe>
      </div>
      {/* <div className="featured-main">
        {featuredData.map((data) => {
          return (
            <div className="card-f" key={data.id}>
              <img src={data.img} alt={data.id} />
              <p>{data.info}</p>
              <hr />
              <h2>
                <FaUser
                  size={30}
                  style={{
                    backgroundColor: "a0a0a0",
                    color: "fff",
                    padding: "0.5rem",
                    borderRadius: "50%",
                  }}
                />
                Levix
              </h2>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Featured;
