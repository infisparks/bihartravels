import React from 'react';

export default function GallerySection() {
  return (
    <div className="home2-gallery-section mb-100">
      <div className="container">
        <div className="row gy-md-4 gy-5">
          <div className="col-lg-3 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="section-title">
              <h2>GoFly Gallery</h2>
              <p>We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!</p>
              <a href="travel-package-02.html" className="primary-btn1 two black-bg">
                <span>
                  Book Your Trip
                  <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="gallery-img-grp">
              <div className="row g-2">
                <div className="col-md-7 mt-70">
                  <div className="single-img justify-content-md-end">
                    <a data-fancybox="gallery-01" href="assets/img/home2/gallery-img1-big.jpg">
                      <img src="/images/gallery-img1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="single-img justify-content-md-end">
                    <a data-fancybox="gallery-01" href="assets/img/home2/gallery-img2-big.jpg">
                      <img src="/images/gallery-img2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="single-img justify-content-md-between">
                    <div className="counter-area">
                      <div className="icon">
                        <svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M39.5961 15.81C38.1214 17.2519 40.2368 20.3608 36.9514 22.3862C35.0583 23.5533 38.0077 25.8843 36.9514 28.6109C36.7987 29.0049 36.7675 29.4023 36.987 29.8303C34.3992 31.822 31.1578 33.0065 27.6398 33.0065C26.7047 33.0065 25.7892 32.9228 24.9003 32.7625L24.5591 33.9508C25.5749 34.1416 26.6063 34.2374 27.6398 34.237C36.7906 34.237 44.209 26.8186 44.209 17.6679C44.209 8.51713 36.7906 1.09863 27.6398 1.09863C24.0648 1.09863 20.6088 2.24297 17.7454 4.37818C19.8919 7.68524 19.849 12.0313 17.6364 15.2956C18.4686 16.7537 19.665 16.797 20.1282 16.9774C21.8931 17.6654 23.2203 21.7429 24.3251 23.0528C25.9039 22.1413 27.6183 21.8503 29.3902 22.4059C29.0978 20.9689 27.4158 19.3471 26.9044 18.8961C25.0823 17.2898 25.8475 16.5076 27.2823 16.1104C28.9332 15.6532 31.4705 15.7057 31.9733 15.5987C33.1508 15.3482 33.4901 14.5201 32.5894 13.7393C31.5322 12.823 29.6808 11.8148 29.2499 10.9945C28.6541 9.8601 29.0869 9.52163 29.8556 9.28389C31.4176 8.80084 34.3657 8.73281 32.891 3.25178C38.0294 5.12385 41.8141 9.62587 42.7515 15.026C41.0332 15.0163 40.1027 15.3148 39.5961 15.81ZM6.48202 37.3493L1.40625 33.2101L3.25916 31.9816L8.22243 33.7703L25.2854 23.919C28.1145 22.2856 33.7222 24.5118 28.3539 27.6113L24.4524 29.8638L20.8244 42.4993L18.3959 43.9014L18.5658 33.213C18.5658 33.213 8.38195 38.8263 6.48202 37.3493ZM9.44719 1.09863C14.2276 1.09863 18.1034 4.97426 18.1034 9.7548C18.1034 14.5354 14.2277 18.411 9.44719 18.411C4.66673 18.411 0.791016 14.5353 0.791016 9.7548C0.791016 4.97435 4.66673 1.09863 9.44719 1.09863ZM4.16821 14.9772C4.53076 12.3859 6.75615 10.3914 9.44728 10.3914C12.1385 10.3914 14.3635 12.3858 14.7261 14.9772C16.0532 13.6358 16.8728 11.7911 16.8728 9.7548C16.8728 5.65356 13.5483 2.3291 9.4471 2.3291C5.34595 2.3291 2.02148 5.65356 2.02148 9.7548C2.02148 11.7911 2.84115 13.6357 4.16821 14.9772ZM6.98344 6.5076C6.98344 7.86841 8.08655 8.97152 9.44736 8.97152C10.8082 8.97152 11.9113 7.86841 11.9113 6.5076C11.9113 5.14714 10.8082 4.04402 9.44736 4.04402C8.08655 4.04411 6.98344 5.14714 6.98344 6.5076ZM8.08436 26.0411L10.5127 24.6391L18.2438 26.5637L13.7191 29.176L8.08436 26.0411ZM13.7464 24.1761C13.0102 22.6071 12.547 20.924 12.3768 19.1992C11.9812 19.3217 11.5781 19.4192 11.1702 19.4911C11.3316 20.9699 11.6927 22.4201 12.2436 23.8019L13.7464 24.1761Z" />
                        </svg>
                      </div>
                      <div className="content">
                        <div className="number">
                          <h2 className="counter">26</h2>
                          <span>K+</span>
                        </div>
                        <span>Tour Completed</span>
                      </div>
                    </div>
                    <a data-fancybox="gallery-01" href="assets/img/home2/gallery-img3-big.jpg">
                      <img src="/images/gallery-img3.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="single-img grp-img">
                    <a data-fancybox="gallery-01" href="assets/img/home2/gallery-img4-big.jpg">
                      <img src="/images/gallery-img4.jpg" alt="" />
                    </a>
                    <a data-fancybox="gallery-01" href="assets/img/home2/gallery-img5-big.jpg">
                      <img src="/images/gallery-img5.jpg" alt="" />
                    </a>
                  </div>
                  <div className="single-img">
                    <a data-fancybox="gallery-01" href="assets/img/home2/gallery-img6-big.jpg">
                      <img src="/images/gallery-img6.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
