import React, { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let param = useParams();
  const movieId = param.movieId;
  //   console.log(movie);
  const reviewArr = reviews?.map((r) => JSON.parse(r));

  reviewArr.map((r) => {
    console.log(r.body);
  });

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      //json entry 👇
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      //   console.log(reviews);

      // const updatedReviews = [...reviews, { body: rev.value }]; due to undefined error
      //fixed the undefined problem
      const updatedReviews =
        reviews != null
          ? [...reviews, { body: rev.value }]
          : [{ body: rev.value }];

      rev.value = "";

      setReviews(updatedReviews);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Row>
        <h3>Reviews</h3>
      </Row>
      <Row>
        <Col>
          <img src={movie?.poster} alt="Movie Poster" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviewArr?.map((r) => {
            return (
              <>
                <Row style={{ color: "white" }}>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
