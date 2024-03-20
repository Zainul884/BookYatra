import React, { useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";

const Rate = () => {
    const [rate, setRate] = useState(0);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);

    const postReview = () => {
        if (review.trim() !== "") {
            setReviews([...reviews, { rate, text: review }]);
            setReview(''); // Clear the review text field
            alert('Review posted!');
        }
    };

    const deleteReview = (indexToDelete) => {
        setReviews(reviews.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="container">
            <div>
                {[...Array(5)].map((item, index) => {
                    const givenRating = index + 1;
                    return (
                        <label key={index}>
                            <input
                                className="radio"
                                type="radio"
                                value={givenRating}
                                onClick={() => {
                                    setRate(givenRating);
                                    alert(`Are you sure you want to give ${givenRating} stars?`);
                                }}
                            />
                            <div className="rating">
                                <FaStar
                                    color={givenRating <= rate ? "#000" : "rgb(192,192,192)"}
                                />
                            </div>
                        </label>
                    );
                })}
                <textarea
                    className="text-area"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                />
                <button className="button" onClick={postReview}>Post Review</button>
            </div>
            <div className="reviews-container">
                {reviews.map((reviewItem, index) => (
                    <div className="review-item" key={index}>
                        <p>{`Rating: ${reviewItem.rate} - ${reviewItem.text}`}</p>
                        <FaTrash className="review-delete-icon" onClick={() => deleteReview(index)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rate;
