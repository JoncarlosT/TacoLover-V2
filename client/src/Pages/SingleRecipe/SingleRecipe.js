import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

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
} from "./style";

//IMPORT SELECTED CONTEXT
import UserSelectsContext from "../../Context/UserSelectsContext";

//IMPORT AUTH
import AuthenticationContext from "../../Context/AuthenticationContext";

//IMPORT DEV LOCALHOST
import DevLocalHost from "../../GlobalProvider";

export default function SingleRecipe() {
  const { loggedIn } = useContext(AuthenticationContext);
  const { selectedFood } = useContext(UserSelectsContext);

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
  }, []);

  //GET REVIEWS
  const [reviews, setReviews] = useState([]);

  console.log(reviews);

  const getReviews = async () => {
    await axios
      .get(DevLocalHost() + "/review/recipe", {
        params: { tacoId: tacoInfo.id },
      })
      .then((res) => setReviews(res.data));
  };

  useEffect(() => {
    getReviews();
  }, [tacoInfo]);

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

  //POST REVIEW
  const [userComment, setUserComment] = useState("");
  const [userRating, setUserRating] = useState(3);

  const postReviewing = async () => {
    const review = {
      tacoId: tacoInfo.id,
      body: userComment,
      rating: userRating,
    };
    await axios.post(DevLocalHost() + "/review/recipe", review);
    setUserComment("");
    setUserRating(3);
    getReviews();
  };

  return (
    <>
      {/* MAKE LOADING CIRCLE  */}
      {Object.entries(tacoInfo).length === 0 ? (
        <StyledSingleRecipe></StyledSingleRecipe>
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
                    <span>{item.body}</span>
                    <Rating
                      readonly
                      initialRating={item.rating}
                      emptySymbol={<EmptyHeart />}
                      fullSymbol={<FullHeart />}
                    />
                    <div>By: {item.author.userName}</div>
                  </Comment>
                );
              })}
          </CommentSide>
        </StyledSingleRecipe>
      )}
    </>
  );
}
