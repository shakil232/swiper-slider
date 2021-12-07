import React from 'react'
import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/swiper.min.css'


// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation,]);



function App() {

  // pagination
  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {
            return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
          }
  }

  return (
    <section className="container">
      <h4 className="text-center mt-3 text-info">
        React-Swiper-Carousel
      </h4>

      {/* Swiper-Responsive-AutoPlay */}
      <main className="mt-5">
        <h2 className="text-center text-success mb-4">Swiper-Responsive-AutoPlay</h2>
        <Swiper
          className="mySwiper"
          centeredSlides={true}
          // slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            "delay": 4500,
            "disableOnInteraction": false
          }}
          loop={true}
          breakpoints={{
            "640": {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            "768": {
              "slidesPerView": 2,
              "spaceBetween": 30
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 30
            }
          }}
          pagination={{
            "clickable": true,

          }}
        >
          <SwiperSlide className="card">
            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
                </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
                </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>
        </Swiper>
      </main>

      

       {/* Swiper-Responsive-Dynamic-Navigation */}
       <main className="mt-5">
        <h2 className="text-center text-success mb-4">Swiper-Responsive-Dynamic-Navigation</h2>
        <Swiper
          className="mySwiper"
          navigation={true}
          breakpoints={{
            "640": {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            "768": {
              "slidesPerView": 2,
              "spaceBetween": 30
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 30
            }
          }}
        >
        
        <div className="px-4">
          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
                </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>
          </div>
        </Swiper>
      </main>



      {/* Swiper-Responsive-Dynamic-Pagination */}
      <main className="mt-5">
        <h2 className="text-center text-success mb-4">Swiper-Responsive-Dynamic-Pagination</h2>
        <Swiper
          className="mySwiper"
          pagination={pagination}
        >
        

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
                </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>

          <SwiperSlide className="card">

            <div>
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h2 className="card-title">shakil</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo neque fugiat suscipit cumque nesciunt!
 </p>
            </div>
            <div className="card-footer">
              <small>Lorem ipsum dolor sit amet.</small>
            </div>

          </SwiperSlide>
          
        </Swiper>
      </main>

    



    </section>
  );
}


export default App;
