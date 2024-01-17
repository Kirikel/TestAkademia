'use client'

import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Fancybox from '@/components/fancybox'

import s from './gallery.module.scss'

export default function Gallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className={s.container}>
      <Fancybox>
        <Swiper
          loop={true}
          navigation={false}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={s.mainSwiper}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i} className={s.mainImage}>
              <a href={image} data-fancybox='gallery'>
                <Image src={image} alt='image' fill quality={100} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.thumbsContainer}>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={false}
            spaceBetween={5}
            slidesPerView={3}
            freeMode={false}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={s.thumbSwiper}
            navigation={{ nextEl: `.guides-arrow-right`, prevEl: '.guides-arrow-left' }}
          >
            {images.map((image, i) => (
              <SwiperSlide key={i} className={s.thumbSlide}>
                <Image src={image} alt='image' width={60} height={60} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={cn(s.thumbArrow, s.prevArrow, 'guides-arrow-left')}>
            <FiChevronLeft />
          </button>
          <button className={cn(s.thumbArrow, s.nextArrow, 'guides-arrow-right')}>
            <FiChevronRight />
          </button>
        </div>
      </Fancybox>
    </div>
  )
}
