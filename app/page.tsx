import React from 'react'
import Home from './home/page'
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO, Web & App Development Services for US Businesses",
  description: "Grow your business with expert SEO, web, app development, and Digital branding. Pure Design Hub helps US businesses boost traffic, leads, and conversions.",
};

const page = () => {
  return (
    <>
     <Home />
    </>
  )
}

export default page
