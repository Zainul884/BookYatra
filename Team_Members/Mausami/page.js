"use client";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FaTrashAlt } from "react-icons/fa";
import './style.css';

const Rate = () => {
    const [rate, setRate] = useState(0);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const maxChars = 150; 

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

    const handleTextChange = (e) => {
        setReview(e.target.value.slice(0, maxChars));
    };

    return (
        <Box className="rate-container">
            
            <Typography component="legend">Rate this</Typography>
            <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                value={rate}
                onChange={(event, newValue) => {
                    setRate(newValue);
                }}
            />
            {rate > 0 && <Typography className="rating-text">{`${rate}/5`}</Typography>}
            <div className="textarea-container">
            <textarea
                className="text-area"
                value={review}
                onChange={handleTextChange}
                placeholder="Write your review here..."
                maxLength={maxChars} 
            />
             <Typography className="char-count">
                {`${review.length}/${maxChars}`}
             </Typography>
            </div>
            <button className="button" onClick={postReview}>Post Review</button>
            <Box className="reviews-container">
                {reviews.map((reviewItem, index) => (
                    <Box key={index} className="review-item">
                        <Typography component="p">{`${reviewItem.rate}/5 - ${reviewItem.text}`}</Typography>
                        <FaTrashAlt className="review-delete-icon" onClick={() => deleteReview(index)} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Rate;
