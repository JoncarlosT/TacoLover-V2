import styled from "styled-components";

//IMPORT MATERIAL
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const StyledSingleRestaurant = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.5);
`;

export const RestaurantSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

export const RestaurantTitle = styled.h1`
  color: white;
  font-size: 3rem;
  margin: 20px;
`;

export const RestaurantImg = styled.img`
  height: 400px;
  width: 400px;

  @media (max-width: 420px) {
    width: 90vw;
  }
`;

export const RestaurantText = styled.h1`
  color: white;
  text-align: center;
  margin: 5px;
`;

export const CommentSide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: center;
`;

export const CommentHeader = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 20px;
`;

export const CommentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserComment = styled.textarea`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  height: 150px;
  font-size: 2rem;
  border-color: white;
  border-radius: 5px;
  font-family: Nunito;
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
