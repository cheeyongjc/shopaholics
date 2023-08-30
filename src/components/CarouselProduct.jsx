import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function CarouselProduct() {
    return (
        <div>
            <swiper
                slidesPerView={7}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
            >
                {
                    Array.from({ length: 9 }, (_, i) =>
                        <SwiperSlide key={i}>

                        </SwiperSlide>
                    )
                }
            </swiper>
        </div>
    )
}

export default CarouselProduct
