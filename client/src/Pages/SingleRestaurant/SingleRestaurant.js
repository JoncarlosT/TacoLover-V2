import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";

// import Loader from "react-loader-spinner";
import Rating from "react-rating";

//IMPORT DEV LOCALHOST
import DevLocalHost from "../../GlobalProvider";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "../../Context/UserSelectsContext";

import {
  CommentSide,
  RestaurantSide,
  StyledSingleRestaurant,
  RestaurantTitle,
  RestaurantImg,
  RestaurantText,
  CommentHeader,
  CommentWrapper,
  UserComment,
  EmptyHeart,
  FullHeart,
  Comment,
  CommentButton,
  RemoveButton,
  CommentText,
} from "./styles";

//IMPORT AUTH
import AuthenticationContext from "../../Context/AuthenticationContext";
import axios from "axios";

export default function SingleRestaurant() {
  const { loggedIn } = useContext(AuthenticationContext);
  const { selectedRestaurant } = useContext(UserSelectsContext);

  //DELETE A REVIEW

  const deleteReview = async (id) => {
    await axios
      .delete(DevLocalHost() + "/review/recipe", {
        data: { _id: id },
      })
      .then(await getReviews());
  };

  //GET CURRENT USER ID
  const [currentUserId, setCurrentUserId] = useState("");
  const getCurrentUserId = async () => {
    await axios.get(DevLocalHost() + "/authentication/userid").then((res) => {
      setCurrentUserId(res.data);
    });
  };

  useEffect(() => {
    getCurrentUserId();
  }, []);

  //GET REVIEWS
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    await axios
      .get(DevLocalHost() + "/restaurants/review", {
        params: { restaurantId: selectedRestaurant._id },
      })
      .then((res) => setReviews(res.data));
  };

  useEffect(() => {
    getReviews();
  }, []);

  //POST REVIEW
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState(3);

  const postReview = async () => {
    const review = {
      restaurantId: selectedRestaurant._id,
      body: userComment,
      rating: userRating,
    };

    await axios
      .post(DevLocalHost() + "/restaurants/review", review)
      .then(getReviews(), setUserComment(""), getReviews());
  };

  return (
    <StyledSingleRestaurant>
      <RestaurantSide>
        <RestaurantTitle>{selectedRestaurant.title}</RestaurantTitle>

        <RestaurantImg
          src={selectedRestaurant.images}
          alt={selectedRestaurant.title}
        />

        <RestaurantText>{selectedRestaurant.title}</RestaurantText>
        <RestaurantText>{selectedRestaurant.location}</RestaurantText>
        <RestaurantText>
          By: {selectedRestaurant.author.userName}
        </RestaurantText>
      </RestaurantSide>
      <CommentSide>
        {loggedIn ? (
          <CommentHeader>Leave a Comment</CommentHeader>
        ) : (
          <CommentHeader>Sign In To Comment</CommentHeader>
        )}

        {loggedIn && (
          <CommentWrapper>
            <UserComment
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
            />
            <Rating
              onClick={(rate) => setUserRating(rate)}
              initialRating={userRating}
              fractions={2}
              emptySymbol={<EmptyHeart />}
              fullSymbol={<FullHeart />}
            />
            <CommentButton onClick={() => postReview()}>Post</CommentButton>
          </CommentWrapper>
        )}

        {reviews
          .slice(0)
          .reverse()
          .map((review, i) => {
            return (
              <Comment key={i}>
                <CommentText>{review.body}</CommentText>
                <Rating
                  readonly
                  initialRating={review.rating}
                  emptySymbol={<EmptyHeart />}
                  fullSymbol={<FullHeart />}
                />
                <div>By: {review.author.userName}</div>

                {currentUserId === review.author._id && (
                  <RemoveButton
                    onClick={() => {
                      deleteReview(review._id);
                    }}
                  >
                    Remove
                  </RemoveButton>
                )}
              </Comment>
            );
          })}
      </CommentSide>
    </StyledSingleRestaurant>
  );
}
