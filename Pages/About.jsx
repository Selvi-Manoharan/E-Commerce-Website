import React from 'react'
import Title from '../Components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
        

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
        <p>At TrendyTogs, we believe that fashion is more than just clothing—it's a form of self-expression. Our mission is to provide stylish, high-quality apparel that keeps you on trend without compromising on comfort. From everyday essentials to bold statement pieces, our curated collections cater to fashion-forward individuals who want to stand out with confidence.</p>
        <p>With a seamless shopping experience and customer satisfaction at the heart of what we do, TrendyTogs is your go-to destination for the latest fashion trends. Our team is passionate about bringing you the best in style, and we pride ourselves on offering top-notch service, fast shipping, and easy returns.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At TrendyTogs, our mission is to revolutionize the way people shop for fashion online. We aim to bring the latest trends and timeless pieces to your doorstep, making high-quality, stylish clothing accessible to everyone. With a focus on sustainability, affordability, and personal expression, TrendyTogs is committed to helping you define your unique style while reducing environmental impact. </p>

        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-700'>At TrendyTogs, quality assurance is our top priority. We carefully select and inspect every product to ensure it meets our high standards before reaching our customers. From seamless navigation to secure payments and timely deliveries, we focus on providing a flawless shopping experience. Our dedicated team monitors customer feedback and consistently works with trusted vendors to guarantee that you receive only the best, every time you shop with us.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-700'>At TrendyTogs, we prioritize convenience in every aspect of your online shopping experience. With an intuitive interface, seamless navigation, and fast checkout process, finding and purchasing your favorite trendy outfits is hassle-free. Our mobile-friendly design ensures that you can shop anytime, anywhere, while features like secure payment options and real-time order tracking add to the ease.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-700'>At TrendyTogs, customer satisfaction is at the heart of everything we do. We pride ourselves on delivering exceptional service that goes beyond simply meeting expectations.Our dedicated support team is available 24/7 to address any queries, making sure your shopping experience is as effortless as possible. </p>

        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
