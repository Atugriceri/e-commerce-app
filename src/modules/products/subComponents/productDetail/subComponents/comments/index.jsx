import React from 'react';
import { useSelector } from 'react-redux';

function Comments() {
  const comments = useSelector((state) => state.products.productDetail.data.comments);
  return (
    <div className="comments">
      <h3 className="comments__title">Comments</h3>
      {comments && comments.length > 0 ? (
        <ul className="comments__list">
          {comments.map((comment) => (
            <li key={comment.id} className="comments__item">
              <div className="comments__header">
                <p className="comments__name">{comment.name}</p>
                <p className="comments__email">{comment.email}</p>
              </div>
              <p className="comments__body">{comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="comments__no-comments">No comments available.</p>
      )}
    </div>
  );
}

export default Comments;
