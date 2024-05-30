import React from 'react'
import section3_boy from '../assets/images/section3_image.png'
import icon1 from '../assets/images/icon1.svg'
import icon2 from '../assets/images/icon2.svg'
import icon3 from '../assets/images/icon3.svg'
import icon4 from '../assets/images/icon4.svg'
import icon5 from '../assets/images/icon5.svg'
import Section2Bg from '../assets/images/section2_bg_img.png'
import fuding1 from '../assets/images/fuding_1.png'
import fuding2 from '../assets/images/fuding_2.png'
import fuding3 from '../assets/images/fuding_3.png'
import glasses from '../assets/images/glasses.png'
const About = () => {
    return (
        <section className=' position-relative'>
            <img className='position-absolute fuding1 d-none d-lg-block' src={fuding1} alt="fuding" />
            <img className='position-absolute fuding2 z-2 d-none d-lg-block' src={fuding2} alt="fuding" />
            <img className='position-absolute fuding3 d-none d-xl-block' src={fuding3} alt="fuding" />
            <img className='position-absolute glasses' src={glasses} alt="glasses" />
            <div className=" position-absolute section2_bg">
                <img src={Section2Bg} alt="Section2Bg" className='  w-100 z-0' />
            </div>
            <div className=' container max_width_1140'>
                <div className='row padding_top_218 padding_bottom_105'>
                    <div className='col-12 col-lg-6 z-1 padding_top_20 d-flex  justify-content-center' data-aos="fade-up-right">
                        <img className='w-100 max_width_688 height_695' src={section3_boy} alt="section3_boy" />
                    </div>
                    <div className='col-12 col-lg-6 z-1 d-flex  justify-content-center flex-column align-items-center align-items-lg-start ' data-aos="fade-up-left">
                        <div className=' d-flex flex-wrap gap_20 padding_bottom_26 '>
                            <img src={icon1} alt="icon" />
                            <img src={icon2} alt="icon" />
                            <img src={icon3} alt="icon" />
                            <img src={icon4} alt="icon" />
                            <img src={icon5} alt="icon" />
                        </div>
                        <h2 className='mb-0 font_inter font_weight_900 font_size_5xl line_height_6xl text-black padding_bottom_20'>ABOUT US</h2>
                        <p className=' fw-normal font_inter font_size_xmd line_height_md para_color max_width_550 mb-0 padding_bottom_17'> In the ever-evolving landscape of cryptocurrency, where markets  can swing on a tweet and sentiments wield as much power as  technical analysis, one figure has recently stepped into the  spotlight: Gary Gensler, or as we affectionately call him, GG. With his  recent comments on Bitcoin, Gensler stirred the pot of fear,  uncertainty, and doubt (FUD), sending shockwaves through the  crypto community.</p>
                        <p className=' fw-normal font_inter font_size_xmd line_height_md para_color max_width_550 mb-0 padding_bottom_17'>But fear not, for in the midst of this whirlwind of emotions, there  emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the  serious business of crypto. Inspired by Gensler's remarks and the  ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor  into the conversation while playfully encouraging individuals to  consider selling their Bitcoins.</p>
                        <p className=' fw-normal font_inter font_size_xmd line_height_md para_color max_width_550 mb-0 padding_bottom_17'>ou see, we believe that in times of uncertainty, a good laugh can be  the best antidote. And what better way to address fear than with a  hug—from behind, of course! Our slogan, "If you sell your BTC, we'll  let you hug GG from behind so tightly," embodies our playful  approach to tackling the anxiety surrounding Bitcoin and the  broader crypto market.</p>
                        <p className=' fw-normal font_inter font_size_xmd line_height_md para_color max_width_550 mb-0'>So, buckle up and get ready for a rollercoaster ride of giggles, hugs,  and maybe even a few profitable trades along the way. Because in  the world of $LHGG, laughter isn't just the best medicine—it's the  best investment strategy.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About