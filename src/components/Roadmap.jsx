import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import black_vector from '../assets/images/Top_vector.png'
import Bottom_vector from '../assets/images/Bottom_vector.png'
import pole1 from '../assets/images/pole1.png'
import pole2 from '../assets/images/pole2.png'
import pole3 from '../assets/images/pole3.png'
import pole4 from '../assets/images/pole4.png'
import pole5 from '../assets/images/pole5.png'


const Roadmap = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        variableWidth:true,
        pauseOnHover: true,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <section className=' position-relative bg-black padding_bottom_360'>
            <div className="position-absolute black_vector bg-white">
                <img className=' w-100 ' src={black_vector} alt="vector" />
            </div>
            <img className=' position-absolute Bottom_vector bg-white' src={Bottom_vector} alt="vector" />
            <div className=' container max_width_1140 padding_top_278 '>
                <div className=' d-flex justify-content-center align-items-center flex-column '>
                    <h3 className=' font_inter font_weight_900 font_size_5xl line_height_6xl text-white mb-0'>ROADMAP</h3>
                    <p className=' text-center off_white font_inter fw-normal font_size_xmd line_height_xl max_width_894 mb-0 padding_bottom_141'>Our roadmap isn't just a journey; it's a comedic adventure  through the cryptoverse, filled with twists, turns, and plenty of  laughs along the way. Here's a glimpse into what the future holds  for Let's Hug GG ($LHGG)</p>
                </div>
            </div>

            {/* <div className=' d-flex '> */}
            <Slider {...settings} >
                <div className='box1 d-flex align-items-end'>
                    <img src={pole1} alt="pole1" />
                    <div className=' max_width_196 ps-2 pb-3'>
                        <h4 className=' font_inter font_weight_900 text-white font_size_xlg line_height_lg mb-0'>Token Launch (Q1 2024)</h4>
                        <p className=' font_inter fw-normal font_size_xmd line_height_xl off_white mb-0 pt-2'>Launch $LHGG token, establish initial  liquidity.</p>
                    </div>
                </div>
                <div className='box1 d-flex align-items-center'>
                    <img src={pole2} alt="pole2" />
                    <div className=' max_width_246 ps-3'>
                        <h4 className=' font_inter font_weight_900 text-white font_size_xlg line_height_lg mb-0 w-100'>Community Building (Q2 2024)</h4>
                        <p className=' font_inter fw-normal font_size_xmd line_height_xl off_white mb-0 pt-2'>Grow vibrant community  through humor and engagement.</p>
                    </div>
                </div>
                <div className='box1 d-flex align-items-start'>
                    <img src={pole3} alt="pole3" />
                    <div className=' max_width_246 ps-3 pt-2'>
                        <h4 className=' font_inter font_weight_900 text-white font_size_xlg line_height_lg mb-0 w-100'>Governance Implementation (Q3 2024)</h4>
                        <p className=' font_inter fw-normal font_size_xmd line_height_xl off_white mb-0 pt-2'>Introduce community  governance mechanisms.</p>
                    </div>
                </div>
                <div className='box1 d-flex align-items-end'>
                    <img src={pole4} alt="pole4" />
                    <div className=' max_width_246 ps-3 pt-2'>
                        <h4 className=' font_inter font_weight_900 text-white font_size_xlg line_height_lg mb-0 w-100'> Partnerships and Influencer Collaborations (Q4 2024)</h4>
                        <p className=' font_inter fw-normal font_size_xmd line_height_xl off_white mb-0 pt-2'> Forge  strategic partnerships and collaborations.</p>
                    </div>
                </div>
                <div className='box1 d-flex align-items-center'>
                    <img src={pole5} alt="pole5" />
                    <div className=' max_width_246 ps-3 pt-2'>
                        <h4 className=' font_inter font_weight_900 text-white font_size_xlg line_height_lg mb-0 w-100'> Utility Expansion (Q1 2025)</h4>
                        <p className=' font_inter fw-normal font_size_xmd line_height_xl off_white mb-0 pt-2'>Explore new use cases and  integrations for $LHGG.</p>
                    </div>
                </div>
            </Slider>
            {/* </div> */}
        </section>
    )
}

export default Roadmap
