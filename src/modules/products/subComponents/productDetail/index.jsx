import React, { useEffect, useState, useRef, lazy, Suspense, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductDetail, getProductComments } from '../../slice';
import Button from '../../../../components/button';
import './styles.scss';
import Spinner from '../../../../components/spinner';
import ErrorPopup from '../../../../components/error-popup';

const Comments = lazy(() => import('./subComponents/comments'));

const ProductImage = memo(({ src, alt, loaded, setLoaded }) => (
  <div className="product-detail__image-container">
    {!loaded && <div className="product-detail__image-placeholder" />}
    <img
      src={src}
      alt={alt}
      className={`product-detail__image ${loaded ? 'loaded' : 'loading'}`}
      onLoad={() => setLoaded(true)}
    />
  </div>
));

ProductImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  setLoaded: PropTypes.func.isRequired,
};

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const commentsRef = useRef(null);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentsLength, setCommentsLength] = useState(0);
  const [showError, setShowError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { data: product, status: productStatus, error: productError } = useSelector((state) => state.products.productDetail);
  const comments = useSelector((state) => state.products.productDetail.comments);

  const fetchProductComments = () => {
    dispatch(getProductComments(id))
      .unwrap()
      .then((resp) => {
        setCommentsLength(resp.length);
        setCommentsLoading(false);
      })
      .catch(() => setCommentsLoading(false));
  };

  const fetchProductDetail = () => {
    dispatch(getProductDetail(id))
      .unwrap()
      .then(() => fetchProductComments(id))
      .catch(() => setCommentsLoading(false));
  };

  useEffect(() => {
    if (id) {
      fetchProductDetail();
    }
  }, [dispatch, id]);

  const handleBuyClick = () => {
    setShowError(true);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const scrollToComments = () => {
    commentsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (productStatus === 'loading' || commentsLoading) {
    return (
      <Spinner />
    );
  }

  if (productError) {
    return (
      <div className="product-detail__error">
        <p>Product Not Found</p>
        <div className="product-detail__error-actions">
          <Button onClick={() => navigate('/products')}>Return to Product List</Button>
          <Button onClick={() => fetchProductDetail()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      {product && (
        <div className="product-detail__body">
          <ProductImage
            src={product.image}
            alt={product.title}
            loaded={loaded}
            setLoaded={setLoaded}
          />
          <div className="product-detail__info">
            <h2 className="product-detail__title">{product.title}</h2>
            <div className="product-detail__meta">
              <p className="product-detail__price">${product.price}</p>
              <div className="product-detail__divider" />
              {commentsLength > 0 && (
                <button type="button" onClick={scrollToComments} className="product-detail__comments-link">
                  {`${commentsLength} Comments`}
                </button>
              )}
            </div>
            <p className="product-detail__description">{product.body}</p>
            <div className="product-detail__footer">
              {showError && (
              <ErrorPopup message="Something went wrong" onClose={handleCloseError} />
              )}
              <Button variant="primary" className="w-100" onClick={handleBuyClick}>
                Buy
              </Button>
            </div>
          </div>
        </div>
      )}

      <div ref={commentsRef} className="product-detail__comments">
        <Suspense fallback={<Spinner />}>
          <Comments comments={comments} />
        </Suspense>
      </div>
    </div>
  );
}

export default memo(ProductDetail);
