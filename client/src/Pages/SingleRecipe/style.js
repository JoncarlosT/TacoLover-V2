import styled from "styled-components";

//IMPORT MATERIAL
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledSingleRecipe = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  flex-wrap: wrap;
`;

export const TacoSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TacoTitle = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 20px;
`;

export const TacoAndIngredientsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TacoImage = styled.img`
  margin: 20px;
`;

export const TacoIngredientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TacoIngredients = styled.p`
  font-size: 1.8rem;
  color: white;
  text-transform: capitalize;
`;

export const StepsWrapper = styled.div`
  width: 60vw;
  margin: 20px;
`;

export const Steps = styled.p`
  font-size: 1.5rem;
  color: white;
`;

export const CommentSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentHeader = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 20px;
`;

export const CommentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserComment = styled.textarea`
  color: white;
  width: 400px;
  height: 150px;
  font-size: 2rem;
  border-color: white;
  border-radius: 5px;
  font-family: Nunito;
  background: rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

export const EmptyHeart = styled(FavoriteBorderIcon)`
  color: white;
  && {
    font-size: 2.5rem;
  }
`;

export const FullHeart = styled(FavoriteIcon)`
  color: hotpink;
  font-size: 2rem;
  && {
    font-size: 2.5rem;
  }
`;

export const CommentButton = styled.div`
  display: flex;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin-top: 20px;
  border-radius: 0.12em;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

export const Comment = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 30vw;
  text-align: center;
`;

export const CommentText = styled.div`
  font-size: 2.5rem;
  margin: 1px;
  width: 500px;
  word-wrap: break-word;
`;

export const RemoveButton = styled.div`
  display: flex;
  padding: 0.35em 1.2em;
  border: 0.1em solid #ffffff;
  margin-top: 20px;
  border-radius: 0.12em;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    color: #000000;
    background-color: #ffffff;
  }
`;
