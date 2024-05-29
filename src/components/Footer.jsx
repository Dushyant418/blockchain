import React from 'react'
import Dextools from '../assets/images/dextools_logo.svg'
import Twitter from '../assets/images/twitter_logo.svg'
import Telegram from '../assets/images/telegram_symbol.svg'
const Footer = () => {
  return (
      <footer className='bg-black'>
          <div className="container max_width_1140">
              <div className="row padding_top_153 padding_bottom_120">
                  <div className=" col-6 col-md-3">
                      <h3 className=' font_inter text-white mb-0 font_weight_900 font_size_6xl line_height_7xl cursor_pointer'>G<span className="color_orange">G</span></h3>
                      <h6 className=' font_inter fw-normal font_size_xmd line_height_md padding_top_41 text-white mb-0'>@copyright</h6>
                  </div>
                  <div className=" col-6 col-xl-7 pt-4">
                      <ul className=' d-flex flex-column gap_17  border_left mb-0  padding_left_66'>
                          <li className=' font_inter fw-bold font_size_xmd line_height_md text-white'>QUICK LINKS</li>
                          <li><a href="https://x.com/?lang=en" className='font_inter fw-normal font_size_xmd line_height_md text-white pt-2'>Twitter</a></li>
                          <li><a href="https://telegram.org/" className='font_inter fw-normal font_size_xmd line_height_md text-white  '>Telegram</a></li>
                          <li><a href="https://www.dextools.io/app/en/pairs" className='font_inter fw-normal font_size_xmd line_height_md text-white '>DexTools</a></li>
                      </ul>

                  </div>
                  <div className="col-12 col-md-2 pt-5 pt-sm-4">
                      <div className="d-flex gap_20">
                          <a href="https://www.dextools.io/app/en/pairs" target='_blank'>
                              <img src={Dextools} alt="" />
                          </a>
                          <a href="https://x.com/?lang=en" target='_blank'>
                              <img src={Twitter} alt="" />
                          </a>
                          <a href="https://telegram.org/" target='_blank'>
                              <img src={Telegram} alt="" />
                          </a>
                      </div>
                  </div>

              </div>
          </div>
      </footer>
  )
}

export default Footer