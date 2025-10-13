import React, { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import userImg from "../../assets/user.jpg";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import products from "../../data/productsData"; // بيانات المنتجات

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isActiveTab, setIsActiveTab] = useState(0);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <section className="bg-white py-5 pb-0">
        {/* 1- imag and content product */}
        <ProductInfo product={product} />

        {/* 2- Description and Reviews  */}
        <div className="container pt-8">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                isActiveTab === 0 && "!text-primary"
              }`}
              onClick={() => setIsActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[500] ${
                isActiveTab === 1 && "!text-primary"
              }`}
              onClick={() => setIsActiveTab(1)}
            >
              Reviews ({product.reviews.length || 0})
            </span>
          </div>

          {isActiveTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md text-[14px]">
              <p>{product.description}</p>
            </div>
          )}

          {isActiveTab === 1 && (
            <div className="shadow-md w-[70%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px] font-[600]">
                  Customer questions &amp; answers
                </h2>
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  {/* عرض كل المراجعات الخاصة بالمنتج */}
                  {product.reviews.length > 0 ? (
                    product.reviews.map((review, index) => (
                      <div
                        key={index}
                        className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between"
                      >
                        <div className="info w-[80%] flex items-center gap-3">
                          <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                            <img
                              src={userImg} // صورة المستخدم أو افتراضية
                              alt="user-image"
                              className="w-full"
                            />
                          </div>
                          <div className="w-[80%]">
                            <h4 className="text-[16px] font-[600]">
                              {review.userName}
                            </h4>
                            <h5 className="text-[13px] font-[600] mb-0">
                              {review.date}
                            </h5>
                            <p className="mt-0 mb-0 text-[13px]">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                        <div>
                          <Rating
                            name={`rating-${index}`}
                            value={review.rating}
                            size="small"
                            readOnly
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-[14px] text-gray-500">No reviews yet.</p>
                  )}
                </div>

                {/* نموذج إضافة مراجعة */}
                <br />
                <div className="review-form bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px] font-[600]">Add a review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      multiline
                      rows={5}
                      className="w-full"
                    />
                    <br /> <br />
                    <Rating name="size-small" defaultValue={4} size="small" />
                    <div className="flex items-center mt-5">
                      <Button className="btn-org flex gap-2">
                        Submit Review
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3- Related Products*/}
        <div className="container pt-8">
          <h2 className="text-[20px] font-[600]">Related Products</h2>
          <ProductSlider items={5} />
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
