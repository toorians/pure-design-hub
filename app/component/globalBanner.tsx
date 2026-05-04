import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import BannerImage from "@/public/assets/images/about_banner.png";


interface GlobalBannerProps {
  title: React.ReactNode;
  text: string;
  imagePath: string;
}

export default function GlobalBanner({ title, text, imagePath }: GlobalBannerProps) {
  return (
    <>
      <style jsx>{`
        .hero-fade-up {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-fade-up-delay {
          animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
        }
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className='global_baner grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-5 gap-4 2xl:px-55 xl:px-30 lg:py-20 py-10 px-4'>
        <div className='hero-fade-up lg:order-0 order-1 lg:text-left text-center'>
          <h1 className={`title1 ${text != '' ? 'mb-0' : 'lg:mb-8 sm:mb-4 mb-2'}`}>
            {title}
          </h1>
          {text != '' && (
            <p className='text !text-[#4B5565] sm:mb-4 mb-2'>{text}</p>
          )}
          <Link href='/get-quote' className='globalBtn bg-[#F75126] text-white inline-flex transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(247,81,38,0.35)]'>Lets get Started</Link>
        </div>
        <div className='hero-fade-up-delay lg:order-1 order-0 overflow-hidden rounded-2xl'>
          <Image
            src={imagePath}
            title="Banner Image"
            alt="Banner Image"
            width={0}
            height={0}
            sizes="100vw"
            decoding="async"
            loading="lazy"
            className="xl:w-[37rem] md:w-[30rem] sm:w-[24rem] w-[18rem] xl:h-[35rem] md:h-[26rem] sm:h-[20rem] h-[14rem] object-contain object-center mx-auto transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </>
  )
}
