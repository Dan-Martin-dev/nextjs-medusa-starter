"use client"
import { useState } from "react"
import useImageSize from "@lib/hooks/use-image-size"
import useCarousel from "@lib/hooks/use-carousel"
import Image from "next/image"

const images = {
  small: [
    "/images/barnes-banner-smart.jpg",
    "/images/barnes-banner-smart2.jpg",
    "/images/barnes-banner-smart.jpg",
  ],
  medium: [
    "/images/barnes-banner.jpg",
    "/images/barnes-banner2.jpg",
    "/images/barnes-banner.jpg",
    "/images/barnes-banner2.jpg",
  ],
}

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const imageSize = useImageSize()
  const { currentIndex, handleNext, handlePrevious } = useCarousel(
    images[imageSize],
    5000
  )
  const imageArray = images[imageSize]

  return (
    <div className="relative w-full h-full mt-16  ">
      <div
        className={`relative w-full transition-opacity duration-2000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <Image
            width={1000}
            height={1000}
            objectFit="cover"
            alt="images"
            className="w-full h-auto transition-all duration-500 ease-in-out object-cover"
            src={imageArray[currentIndex]}
            onLoad={() => {
              setVisible(true)
            }}
            onError={() => {
              console.error("Failed to load image:", imageArray[currentIndex])
            }}
          />
        </div>
        <div className="absolute top-4 right-4 flex space-x-4">
          <button
            className="w-8 h-8 text-white text-4xl flex items-center justify-center transition"
            onClick={handlePrevious}
          >
            &#8249;
          </button>
          <button
            className="w-8 h-8 text-white text-4xl flex items-center justify-center transition"
            onClick={handleNext}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
