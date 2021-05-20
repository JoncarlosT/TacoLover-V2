import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Loader from "react-loader-spinner";
import Rating from "react-rating";

//  IMPORT STYLES
import {
  StyledSingleRecipe,
  TacoSide,
  CommentSide,
  TacoTitle,
  TacoImage,
  TacoIngredients,
  TacoAndIngredientsWrapper,
  TacoIngredientsWrapper,
  StepsWrapper,
  Steps,
  EmptyHeart,
  FullHeart,
  UserComment,
  CommentWrapper,
  CommentHeader,
  CommentButton,
  Comment,
  RemoveButton,
  LoaderWrapper,
} from "./style";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "../../Context/UserSelectsContext";

//IMPORT AUTH
import AuthenticationContext from "../../Context/AuthenticationContext";

//IMPORT DEV LOCALHOST
import DevLocalHost from "../../GlobalProvider";
import { CommentText } from "../SingleRestaurant/styles";

export default function SingleRecipe() {
  const { loggedIn } = useContext(AuthenticationContext);
  const { selectedFood } = useContext(UserSelectsContext);

  //DELETE A REVIEW
  const [deleted, setDeleted] = useState(false);

  const deleteReview = async (id) => {
    await axios
      .delete(DevLocalHost() + "/review/recipe", {
        data: { _id: id },
      })
      .then(updateReviews())
      .then(updateReviews());
  };

  //TACO LIST
  const [tacoInfo, setTacoInfo] = useState({});

  const getTaco = async (selectedFood) => {
    await fetch(
      `https://api.spoonacular.com/recipes/${selectedFood.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setTacoInfo(res));
  };

  useEffect(() => {
    getTaco(selectedFood);
  }, [selectedFood]);

  //GET REVIEWS
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      await axios
        .get(DevLocalHost() + "/review/recipe", {
          params: { tacoId: tacoInfo.id },
        })
        .then((res) => setReviews(res.data));
    };

    getReviews();
  }, [tacoInfo.id]);

  const updateReviews = async () => {
    await axios
      .get(DevLocalHost() + "/review/recipe", {
        params: { tacoId: tacoInfo.id },
      })
      .then((res) => setReviews(res.data));
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
  }, [currentUserId]);

  //POST REVIEW
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState(3);

  const postReviewing = async () => {
    const review = {
      tacoId: tacoInfo.id,
      body: userComment,
      rating: userRating,
    };
    await axios
      .post(DevLocalHost() + "/review/recipe", review)
      .then(setUserComment(""))
      .then(setUserRating(3))
      .then(updateReviews())
      .then(updateReviews());

    // updateReviews();
  };

  return (
    <>
      {Object.entries(tacoInfo).length === 0 ? (
        <LoaderWrapper>
          <Loader type="ThreeDots" color="green" height={80} width={80} />
        </LoaderWrapper>
      ) : (
        <StyledSingleRecipe>
          <TacoSide>
            <TacoTitle>{tacoInfo.title}</TacoTitle>
            <TacoAndIngredientsWrapper>
              <TacoImage src={tacoInfo.image} alt={tacoInfo.title} />
              <TacoIngredientsWrapper>
                {tacoInfo.extendedIngredients.map((item, i) => {
                  return (
                    <TacoIngredients key={i}>
                      {i + 1}. {item.name}
                    </TacoIngredients>
                  );
                })}
              </TacoIngredientsWrapper>
            </TacoAndIngredientsWrapper>

            <StepsWrapper>
              {tacoInfo.analyzedInstructions[0].steps.map((step) => {
                return (
                  <Steps key={step.number}>
                    {step.number}. {step.step}
                  </Steps>
                );
              })}
            </StepsWrapper>
          </TacoSide>
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
                <CommentButton onClick={() => postReviewing()}>
                  Post
                </CommentButton>
              </CommentWrapper>
            )}
            {reviews
              .slice(0)
              .reverse()
              .map((item, i) => {
                return (
                  <Comment key={i}>
                    <CommentText>{item.body}</CommentText>
                    <Rating
                      readonly
                      initialRating={item.rating}
                      emptySymbol={<EmptyHeart />}
                      style={{ width: "100vw" }}
                      fullSymbol={<FullHeart />}
                    />
                    <div>By: {item.author.userName}</div>

                    {currentUserId === item.author._id ? (
                      <RemoveButton
                        onClick={() => {
                          deleteReview(item._id);
                          setDeleted(!deleted);
                        }}
                      >
                        Remove
                      </RemoveButton>
                    ) : (
                      ""
                    )}
                  </Comment>
                );
              })}
          </CommentSide>
        </StyledSingleRecipe>
      )}
    </>
  );
}
