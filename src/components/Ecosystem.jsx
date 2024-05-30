import React from 'react'
import section5_image from '../assets/images/section5_image.webp'
import icon1 from '../assets/images/icon1.svg'
import icon2 from '../assets/images/icon2.svg'
import icon3 from '../assets/images/icon3.svg'
import icon4 from '../assets/images/icon4.svg'
import icon5 from '../assets/images/icon5.svg'
import newspaper from '../assets/images/newspaper.png'
import glasses from '../assets/images/glasses.png'
import ecosystem_bg from '../assets/images/ecosystem_bg.png'
const Ecosystem = () => {
    return (
        <section className=' position-relative'>
            <img className=' position-absolute ecosystem_bg w-100' src={ecosystem_bg} alt="ecosystem_bg" />
            <img className=' position-absolute newspaper d-none d-lg-block' src={newspaper} alt="newspaper" />
            <img className=' position-absolute glasses5 d-none d-md-block' src={glasses} alt="glasses" />
            <div className=' container max_width_1140'>
                <div className='row padding_top_218 padding_bottom_68'>
                    <div className='col-12 col-lg-6 z-1 d-flex justify-content-lg-start justify-content-center' data-aos="fade-down-right">
                        <img className=' max_width_565 w-100 z-0' src={section5_image} alt="section5_image" />
                    </div>
                    <div className='col-12 col-lg-6 z-1 d-flex justify-content-center align-items-center align-items-lg-start flex-column' data-aos="fade-down-left">
                        <div className=' d-flex flex-wrap gap_20 padding_bottom_26 '>
                            <img src={icon1} alt="icon" />
                            <img src={icon2} alt="icon" />
                            <img src={icon3} alt="icon" />
                            <img src={icon4} alt="icon" />
                            <img src={icon5} alt="icon" />
                        </div>
                        <h2 className='mb-0 font_inter font_weight_900 font_size_5xl line_height_6xl text-black padding_bottom_20'>ECOSYSTEM</h2>
                        <p className=' fw-normal font_inter font_size_xmd line_height_md para_color max_width_550 mb-0 padding_bottom_33'>The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to  foster a vibrant and engaging ecosystem where laughter reigns  supreme.</p>
                        <button className=' font_inter fw-semibold font_size_xmd line_height_sm hero_btn3'>Buy $GrayGensler</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ecosystem