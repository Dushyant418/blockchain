import React from 'react'
import section4_img from '../assets/images/section4_image.png'
import section4_bg from '../assets/images/section4_bg.png'
import fuding from '../assets/images/fuding_1.png'
import fuding2 from '../assets/images/fuding_3.png'
import notebook from '../assets/images/notebook.png'
const Utility = () => {
    
    return (
        <section className=' position-relative'>
            <div className=" position-absolute section4_bg">
                <img src={section4_bg} alt="Section4Bg" className='  w-100 z-0' />
            </div>
            <img className=' position-absolute fuding_utility1 d-none d-md-block' src={fuding} alt="fuding" />
            <img className=' position-absolute fuding_utility2 d-none d-lg-block' src={fuding} alt="fuding" />
            <img className=' position-absolute fuding_utility3 d-none d-lg-block' src={fuding2} alt="fuding" />
            <img className=' position-absolute notebook1 z-1 d-none d-lg-block' src={notebook} alt="notebook" />
            <div className=' container max_width_1140'>
                <div className='row flex-column-reverse flex-lg-row padding_top_144 pb-3'>
                    <div class="col-12 col-lg-6 z-1 d-flex justify-content-center flex-column align-items-center align-items-lg-start" data-aos="zoom-in-right">
                        <h3 class=" font_inter font_weight_900 font_size_5xl line_height_6xl text-black mb-0">UTILITY</h3>
                        <p class="font_inter fw-normal font_size_xmd line_height_md max_width_550 padding_top_20 mb-0 padding_bottom_26">
                            The utility of $LHGG extends beyond its humorous appeal. Holders of
                            $LHGG gain access to exclusive merchandise, events, and community
                            perks. Furthermore, $LHGG serves as a medium of exchange within our
                            ecosystem, facilitating transactions and interactions among
                            community members. Through strategic partnerships and integrations,
                            we aim to expand the utility of $LHGG, creating additional avenues
                            for adoption and growth.
                        </p>
                        <div className='mb-0'>
                            <button className=' font_inter fw-semibold font_size_xmd line_height_sm hero_btn3'>Buy $GrayGensler</button>
                        </div>
                    </div>
                    <div className=' col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center z-1' data-aos="zoom-in-left">
                        <img className=' max_width_441 w-100' src={section4_img} alt="boy_img" />
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Utility