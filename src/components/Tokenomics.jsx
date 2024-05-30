import React from 'react'
import black_vector from '../assets/images/Top_vector.png'
import Bottom_vector from '../assets/images/Bottom_vector.png'

const Tokenomics = () => {
    return (
        <>
        <img className='  w-100' src={black_vector} alt="vector" />
        <section className=' position-relative bg-black'>
            
            
                <div className=' container max_width_1140  pt-80'>
                <div className=' row  '>
                        <div className='col-12 col-lg-5 d-flex justify-content-center flex-column align-items-center align-items-lg-start' data-aos="zoom-in">
                        <h2 className=' font_inter font_weight_900 font_size_5xl line_height_6xl text-white mb-0'>TOKENOMICS</h2>
                        <p className=' font_inter fw-normal mb-0 font_size_xmd line_height_xl text-white max_width_453 padding_top_20 padding_bottom_20'>Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin.  With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the  circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of  transaction fees is allocated to liquidity pools, ensuring stability and liquidity for $LHGG holders.</p>
                        <div className='tokenomics_box'>
                            <div className="d-flex gap_30">
                                <h5 className=' font_inter font_size_md fw-normal line_height_xl mb-0 text-white'>Token Name:</h5>
                                <h4 className=' font_inter font_size_md fw-bold line_height_xl text-white'>Let’s Hug GG</h4>
                            </div>
                            <div className="d-flex pt-12 gap_15">
                                <h5 className=' font_inter font_size_md fw-normal line_height_xl mb-0 text-white'>Token Symbol:</h5>
                                <h4 className=' font_inter font_size_md fw-bold line_height_xl text-white'> $LHGG</h4>
                            </div>
                            <div className="d-flex pt-12 gap_29">
                                <h5 className=' font_inter font_size_md fw-normal line_height_xl mb-0 text-white'>Total Supply: </h5>
                                <h4 className=' font_inter font_size_md fw-bold line_height_xl text-white'>1 Billion $LHGG</h4>
                            </div>
                            <div className="d-flex pt-12 gap_47">
                                <h5 className=' font_inter font_size_md fw-normal line_height_xl mb-0 text-white'>Total Type:</h5>
                                <h4 className=' font_inter font_size_md fw-bold line_height_xl text-white'>Solana SPL Token</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-12  col-lg-7 pt-4'>
                        <div className=' d-flex flex-wrap flex-lg-nowrap gap_17'>
                            <div className='orange_box max_width_296 w-100' data-aos="flip-left">
                                <p className='font_inter text-center fw-semibold font_size_md line_height_xl text-black mb-0'> Marketing & Partnerships</p>
                                <p className='text-center font_inter fw-semibold font_size_lg line_height_xl text-black mb-0'>5%</p>
                            </div>
                            <div className='orange_box max_width_131 w-100' data-aos="flip-left">
                                <p className='font_inter fw-semibold text-center font_size_md line_height_xl text-black mb-0'>Reserve</p>
                                <p className='text-center font_inter fw-semibold font_size_lg line_height_xl text-black mb-0'>5%</p>
                            </div>
                            <div className='orange_box max_width_152 w-100' data-aos="flip-left">
                                <p className='font_inter fw-semibold font_size_md line_height_xl text-black mb-0 text-center'>Public Sale</p>
                                <p className='text-center font_inter fw-semibold font_size_lg line_height_xl text-black mb-0'>45%</p>
                            </div>
                        </div>
                        <div className=' d-flex  flex-lg-row  flex-column gap_18 padding_top_18'>
                            <div className='orange_box max_width_296 w-100' data-aos="flip-left">
                                <p className='font_inter fw-semibold font_size_md line_height_xl text-black mb-0 text-center'> Community Development</p>
                                <p className='text-center font_inter fw-semibold font_size_lg line_height_xl text-black mb-0'>15%</p>
                            </div>
                            <div className='orange_box max_width_296 w-100' data-aos="flip-left">
                                <p className='font_inter fw-semibold font_size_md line_height_xl text-black mb-0 text-center'>Ecosystem Fund</p>
                                <p className='text-center font_inter fw-semibold font_size_lg line_height_xl text-black mb-0'>10%</p>
                            </div>
                        </div>
                        <div className='padding_top_18 padding_left_148'>
                            <div className='orange_box max_width_296 w-100 justify-content-center' data-aos="flip-left">
                                <p className='font_inter text-center fw-semibold font_size_md line_height_xl text-black mb-0 text-centernpm'>Team & Adisors</p>
                                <p className='text-center font_inter fw-semibold font_size_lg line_height_xl text-black mb-0'>20%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        <img className=' w-100' src={Bottom_vector} alt="vector" /></>
    )
}

export default Tokenomics