import React from 'react'
import twitter from '../assets/images/twitter_logo.svg'
import Telegram from '../assets/images/telegram_symbol.svg'
import Dextools from '../assets/images/dextools_logo.svg'

const Orange_section = () => {
    return (
        <section className='baground_orange'>
            <div className='container max_width_1140 overflow-hidden'>
                <div className=' d-flex justify-content-between flex-wrap padding_top_39 padding_bottom_39'>
                    <div className=' d-flex gap_22 mx-2'>
                        <img src={twitter} alt="twitter-logo" />
                        <h2 className=' mb-0 font_inter fw-semibold font_size_4xl text-white line_height_5xl'>twitter</h2>
                    </div>
                    <div className=' d-flex gap_22 mx-2 pt-2 pt-sm-0'>
                        <img src={Telegram} alt="telegram" />
                        <h2 className=' mb-0 font_inter fw-semibold font_size_4xl text-white line_height_5xl'>Telegram</h2>
                    </div>
                    <div className=' d-flex gap_22 mx-2 pt-2 pt-lg-0'>
                        <img src={Dextools} alt="dextools" />
                        <h2 className=' mb-0 font_inter fw-semibold font_size_4xl text-white line_height_5xl'>DEXTOOLS</h2>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orange_section