import StarRatingComponent from 'react-star-rating-component';

const Rating = ({ rating, setRating }) => {
  return (
    <div>
      <h4>Rate Your Experience:</h4>
      <StarRatingComponent 
        name="userRating"
        starCount={5}
        value={rating}
        onStarClick={(nextValue) => setRating(nextValue)}
      />
    </div>
  );
};
