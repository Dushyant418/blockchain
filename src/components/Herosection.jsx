import React, { useCallback, useRef, useState } from 'react'
import Dextools from '../assets/images/dextools_logo.svg'
import Twitter from '../assets/images/twitter_logo.svg'
import Telegram from '../assets/images/telegram_symbol.svg'
import Boy_bg from '../assets/images/heroboy-bg.png'
import Hand_bg from '../assets/images/herohand-bg.png'

const Herosection = () => {
  const textCopy = useRef(null)
  const [data, setdata] = useState(false);
  const [text, settext] = useState('');
  function view() {
    setdata(!data)
  
  };
  if (data ===true) {
      document.body.classList.add("overflow_hidden");
    }
    else {
      document.body.classList.remove("overflow_hidden");
    }
  const copytoclipboard = useCallback(() => {
    textCopy.current?.select();
    window.navigator.clipboard.writeText(textCopy.current?.value);
  }
    , [text])
  return (
    <section className='bg-black  position-relative d-flex flex-column'>
      <img className=' position-absolute boy_position z-0' src={Boy_bg} alt="boy-bg" />
      <img className=' position-absolute hand_position d-none d-lg-block' src={Hand_bg} alt="hand-bg" />
      <div className=' container max_width_1140 '>
        <nav className=' d-flex align-items-center justify-content-between padding_top_35'>
          <h3 className='text-white font_inter font_size_3xl line_height_4xl font_weight_900 cursor_pointer mb-0'>Gxxx Gxxxxxx</h3>
          <div className={`{${data ? "navShow mobile_view" : "navhide"} d-lg-flex align-items-center  d-none ps-0 gap_47 mb-0  }`}>
            <div className=' d-flex gap-3'>
              <a href="https://info.dextools.io/" target=' _blank'><img src={Dextools} alt="tool-logo" /></a>
              <a href="https://x.com/" target=' _blank'><img src={Twitter} alt="twitter-logo" /></a>
              <a href="https://web.telegram.org/a/" target=' _blank'><img src={Telegram} alt="telegram-logo" /></a>

            </div>
            <button className='font_inter nav_btn fw-semibold font_size_xmd line_height_sm'>Buy On Uniswap</button>
          </div>
          <div onClick={view} className={`${data ? "cross" : "menu"} d-flex flex-column gap-2 d-lg-none`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
      <div className='container pt-140 pb-91 d-flex  flex-column   justify-content-center flex-grow-1  align-items-start max_width_1140 z-1'>
        <h1 className='mb-0 font_inter line_height_8xl font_weight_900 font_size_7xl text-white'>G<span className='color_orange'>G</span></h1>
        <p className=' mb-0 font_inter fw-semibold font_size_md line_height_xmd text-white max_width_538'>Join The <span className=' color_orange'>Worldwide Blockchain</span> Protest Against Corrupt Government Bodies</p>
        <div className=' d-flex gap_20 padding_top_62 padding_bottom_36'>
          <button className=' font_inter fw-semibold font_size_xmd line_height_sm hero_btn1'>Buy $GrayGensler</button>
          <button className=' font_inter fw-semibold font_size_xmd line_height_sm hero_btn2'>How To Buy?</button>
        </div>
        <button className=' font_inter fw-normal font_size_md line_height_xl copy_btn'>dwqjddj324dnewdne3dewrrets <span>
          <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.3499 14.4018C31.2753 14.2311 31.171 14.0751 31.0417 13.9411L21.6073 4.50661C21.4732 4.37733 21.3172 4.27297 21.1465 4.19842C21.0994 4.17641 21.049 4.16383 20.9987 4.14653C20.8672 4.10176 20.7302 4.07479 20.5915 4.06634C20.5585 4.06319 20.5286 4.0459 20.4956 4.0459H9.4887C7.75434 4.0459 6.34389 5.45635 6.34389 7.19071V32.3492C6.34389 34.0836 7.75434 35.4941 9.4887 35.4941H28.3576C30.092 35.4941 31.5024 34.0836 31.5024 32.3492V15.0528C31.5024 15.0197 31.4851 14.9899 31.482 14.9553C31.4743 14.8164 31.4473 14.6794 31.4018 14.548C31.3861 14.4977 31.3719 14.449 31.3499 14.4018ZM26.1342 13.4803H22.068V9.4141L26.1342 13.4803ZM9.4887 32.3492V7.19071H18.9232V15.0528C18.9232 15.4698 19.0888 15.8697 19.3837 16.1646C19.6786 16.4595 20.0785 16.6252 20.4956 16.6252H28.3576L28.3607 32.3492H9.4887Z" fill="white" />
            <path d="M12.6338 19.7701H25.2131V22.9149H12.6338V19.7701ZM12.6338 26.0597H25.2131V29.2045H12.6338V26.0597ZM12.6338 13.4805H15.7786V16.6253H12.6338V13.4805Z" fill="white" />
          </svg>
        </span></button>
      </div>
    </section>
  )
}

export default Herosection