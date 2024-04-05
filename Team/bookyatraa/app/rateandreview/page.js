"use client";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FaTrashAlt } from "react-icons/fa";
import { database } from '../firebaseConfig'; // Ensure this path is correct
import { ref, push, onValue, remove } from "firebase/database";

const Rate = () => {
    const [rate, setRate] = useState(null);
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);
    const maxChars = 150;

    // Fetch reviews when component mounts
    useEffect(() => {
        const reviewsRef = ref(database, 'reviews/');
        onValue(reviewsRef, (snapshot) => {
            const data = snapshot.val();
            const loadedReviews = [];
            for (const key in data) {
                loadedReviews.push({
                    id: key,
                    rate: data[key].rate,
                    text: data[key].text
                });
            }
            setReviews(loadedReviews);
        });
    }, []);

    // Post a new review to the database
    const postReview = () => {
        if (review.trim() !== "" && rate) {
            const reviewsRef = ref(database, 'reviews/');
            push(reviewsRef, { rate, text: review })
            .then(() => {
                setReview('');
                setRate(null); // Reset the rate after posting
                alert('Review posted!');
            })
            .catch((error) => {
                console.error("Error posting review: ", error);
                alert('Failed to post review!');
            });
        } else {
            alert('Please fill in the review and select a rating before posting.');
        }
    };

    // Delete a review from the database
    const deleteReview = (reviewId) => {
        const reviewRef = ref(database, `reviews/${reviewId}`);
        remove(reviewRef)
        .catch((error) => {
            console.error("Error deleting review: ", error);
            alert('Failed to delete review!');
        });
    };

    // Handle text change and enforce max character limit
    const handleTextChange = (e) => {
        setReview(e.target.value.slice(0, maxChars));
    };

    return (
        <Box className="rate-container">
            <Typography component="legend">Rate this</Typography>
            <Rating
                name="half-rating"
                precision={0.5}
                value={rate}
                onChange={(event, newValue) => {
                    setRate(newValue);
                }}
            />
            {rate && <Typography className="rating-text">{`${rate}/5`}</Typography>}
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
            {reviews.map((reviewItem, index) => ( // Make sure to use 'reviewItem', not 'review'
          <Box key={index} className="testimonial-box">
            <Typography component="p" className="testimonial-text">
              "{reviewItem.text}"
            </Typography>

            <Typography component="p" className="testimonial-author">
              -Rated {reviewItem.rate}/5
            </Typography>
            <FaTrashAlt className="review-delete-icon" onClick={() => deleteReview(reviewItem.id)} />
          </Box>
        ))}
        
        </Box>
    );
};

export default Rate;
