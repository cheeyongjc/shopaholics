import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function CaroselCategory() {
    return (
        <div className='bg-white'>
            <swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img src={'../images/category_0.jpg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'../images/category_1.jpg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'../images/category_2.jpg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'../images/category_3.jpg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'../images/category_4.jpg'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={'../images/category_5.jpg'} />
                </SwiperSlide>
            </swiper>
        </div>
    )
}

export default CaroselCategory
