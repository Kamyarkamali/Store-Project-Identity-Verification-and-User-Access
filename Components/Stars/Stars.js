import ReactStars from "react-stars";

const ProductRating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
        value={4}
      />
    </div>
  );
};

export default ProductRating;