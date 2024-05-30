import React from 'react'
import profile_img from '../assets/images/news_profile.png'
import comment from '../assets/images/comment.svg'
import recycle from '../assets/images/recycle.icon.svg'
import heart from '../assets/images/heart.svg'
import save from '../assets/images/save.svg'
import news from '../assets/images/latest-bg.png'
import news_tablet from '../assets/images/news_phone.png'
import news_leptop from '../assets/images/news_leptop.png'
const News = () => {
    return (
        <section className=' position-relative'>
            <div className=' position-absolute news_position z-0'>
                <img className=' w-100' src={news} alt="news_bg" />
            </div>
            <img className=' position-absolute tablet_position d-none d-md-block' src={news_tablet} alt="teblet" />
            <img className=' position-absolute leptop_position d-none d-md-block' src={news_leptop} alt="news_leptop" />
            <div className=' container max_width_1140'>
                <div className=' d-flex align-items-center justify-content-center padding_bottom_96 padding_top_125'>
                    <h2 className=' font_inter font_weight_900 font_size_5xl line_height_6xl text-black'>LATEST NEWS</h2>
                </div>
                <div className=' row padding_bottom_96'>
                    <div className="col-12 col-sm-6 col-lg-4 z-1">
                        <div className='news_box'>
                            <div className=' d-flex align-items-center '>
                                <img className=' max_width_80' src={profile_img} alt="profile_icon" />
                                <div className=' ps-2'>
                                    <p className=' mb-0 font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7265 7.33175C15.4643 7.05772 15.1931 6.77535 15.0908 6.52706C14.9963 6.29963 14.9907 5.92268 14.9851 5.55754C14.9747 4.87874 14.9636 4.10952 14.4287 3.57468C13.8939 3.03985 13.1247 3.02872 12.4459 3.01829C12.0807 3.01272 11.7038 3.00716 11.4764 2.91257C11.2288 2.81033 10.9457 2.53909 10.6717 2.27689C10.1918 1.81577 9.64651 1.29346 8.92041 1.29346C8.19431 1.29346 7.64974 1.81577 7.16915 2.27689C6.89513 2.53909 6.61276 2.81033 6.36446 2.91257C6.13843 3.00716 5.76008 3.01272 5.39494 3.01829C4.71614 3.02872 3.94692 3.03985 3.41208 3.57468C2.87725 4.10952 2.8696 4.87874 2.85569 5.55754C2.85012 5.92268 2.84456 6.29963 2.74997 6.52706C2.64774 6.77466 2.37649 7.05772 2.11429 7.33175C1.65318 7.81164 1.13086 8.35691 1.13086 9.08301C1.13086 9.8091 1.65318 10.3537 2.11429 10.8343C2.37649 11.1083 2.64774 11.3907 2.74997 11.639C2.84456 11.8664 2.85012 12.2433 2.85569 12.6085C2.86612 13.2873 2.87725 14.0565 3.41208 14.5913C3.94692 15.1262 4.71614 15.1373 5.39494 15.1477C5.76008 15.1533 6.13704 15.1589 6.36446 15.2534C6.61206 15.3557 6.89513 15.6269 7.16915 15.8891C7.64904 16.3502 8.19431 16.8726 8.92041 16.8726C9.64651 16.8726 10.1911 16.3502 10.6717 15.8891C10.9457 15.6269 11.2281 15.3557 11.4764 15.2534C11.7038 15.1589 12.0807 15.1533 12.4459 15.1477C13.1247 15.1373 13.8939 15.1262 14.4287 14.5913C14.9636 14.0565 14.9747 13.2873 14.9851 12.6085C14.9907 12.2433 14.9963 11.8664 15.0908 11.639C15.1931 11.3914 15.4643 11.1083 15.7265 10.8343C16.1876 10.3544 16.71 9.8091 16.71 9.08301C16.71 8.35691 16.1876 7.81234 15.7265 7.33175ZM12.096 7.80747L8.20127 11.7022C8.14959 11.754 8.08823 11.795 8.02068 11.823C7.95314 11.851 7.88074 11.8654 7.80762 11.8654C7.7345 11.8654 7.6621 11.851 7.59455 11.823C7.52701 11.795 7.46564 11.754 7.41397 11.7022L5.74478 10.0331C5.69308 9.98136 5.65208 9.91999 5.6241 9.85245C5.59612 9.7849 5.58172 9.71251 5.58172 9.6394C5.58172 9.5663 5.59612 9.49391 5.6241 9.42636C5.65208 9.35882 5.69308 9.29745 5.74478 9.24575C5.84918 9.14135 5.99078 9.0827 6.13843 9.0827C6.21154 9.0827 6.28393 9.0971 6.35147 9.12508C6.41901 9.15305 6.48038 9.19406 6.53208 9.24575L7.80762 10.522L11.3087 7.02017C11.3604 6.96847 11.4218 6.92747 11.4894 6.89949C11.5569 6.87151 11.6293 6.85711 11.7024 6.85711C11.7755 6.85711 11.8479 6.87151 11.9154 6.89949C11.983 6.92747 12.0443 6.96847 12.096 7.02017C12.1477 7.07186 12.1887 7.13323 12.2167 7.20078C12.2447 7.26832 12.2591 7.34071 12.2591 7.41382C12.2591 7.48693 12.2447 7.55932 12.2167 7.62686C12.1887 7.6944 12.1477 7.75577 12.096 7.80747Z" fill="#229ED9" />
                                    </svg>
                                    </span> </p>
                                    <p className=' mb-0 fw-normal font_size_xmd line_height_md'>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='mb-0 font_inter fw-normal font_size_xmd line_height_xmd max_width_321 padding_top_20 padding_bottom_27'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pe-3'>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={comment} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={recycle} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={heart} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>21</p>
                                </div>
                                <div className='mb-0'>
                                    <img src={save} alt="comment_icon" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 z-1 pt-4 pt-sm-0">
                        <div className='news_box'>
                            <div className=' d-flex align-items-center '>
                                <img className=' max_width_80' src={profile_img} alt="profile_icon" />
                                <div className=' ps-2'>
                                    <p className=' mb-0 font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7265 7.33175C15.4643 7.05772 15.1931 6.77535 15.0908 6.52706C14.9963 6.29963 14.9907 5.92268 14.9851 5.55754C14.9747 4.87874 14.9636 4.10952 14.4287 3.57468C13.8939 3.03985 13.1247 3.02872 12.4459 3.01829C12.0807 3.01272 11.7038 3.00716 11.4764 2.91257C11.2288 2.81033 10.9457 2.53909 10.6717 2.27689C10.1918 1.81577 9.64651 1.29346 8.92041 1.29346C8.19431 1.29346 7.64974 1.81577 7.16915 2.27689C6.89513 2.53909 6.61276 2.81033 6.36446 2.91257C6.13843 3.00716 5.76008 3.01272 5.39494 3.01829C4.71614 3.02872 3.94692 3.03985 3.41208 3.57468C2.87725 4.10952 2.8696 4.87874 2.85569 5.55754C2.85012 5.92268 2.84456 6.29963 2.74997 6.52706C2.64774 6.77466 2.37649 7.05772 2.11429 7.33175C1.65318 7.81164 1.13086 8.35691 1.13086 9.08301C1.13086 9.8091 1.65318 10.3537 2.11429 10.8343C2.37649 11.1083 2.64774 11.3907 2.74997 11.639C2.84456 11.8664 2.85012 12.2433 2.85569 12.6085C2.86612 13.2873 2.87725 14.0565 3.41208 14.5913C3.94692 15.1262 4.71614 15.1373 5.39494 15.1477C5.76008 15.1533 6.13704 15.1589 6.36446 15.2534C6.61206 15.3557 6.89513 15.6269 7.16915 15.8891C7.64904 16.3502 8.19431 16.8726 8.92041 16.8726C9.64651 16.8726 10.1911 16.3502 10.6717 15.8891C10.9457 15.6269 11.2281 15.3557 11.4764 15.2534C11.7038 15.1589 12.0807 15.1533 12.4459 15.1477C13.1247 15.1373 13.8939 15.1262 14.4287 14.5913C14.9636 14.0565 14.9747 13.2873 14.9851 12.6085C14.9907 12.2433 14.9963 11.8664 15.0908 11.639C15.1931 11.3914 15.4643 11.1083 15.7265 10.8343C16.1876 10.3544 16.71 9.8091 16.71 9.08301C16.71 8.35691 16.1876 7.81234 15.7265 7.33175ZM12.096 7.80747L8.20127 11.7022C8.14959 11.754 8.08823 11.795 8.02068 11.823C7.95314 11.851 7.88074 11.8654 7.80762 11.8654C7.7345 11.8654 7.6621 11.851 7.59455 11.823C7.52701 11.795 7.46564 11.754 7.41397 11.7022L5.74478 10.0331C5.69308 9.98136 5.65208 9.91999 5.6241 9.85245C5.59612 9.7849 5.58172 9.71251 5.58172 9.6394C5.58172 9.5663 5.59612 9.49391 5.6241 9.42636C5.65208 9.35882 5.69308 9.29745 5.74478 9.24575C5.84918 9.14135 5.99078 9.0827 6.13843 9.0827C6.21154 9.0827 6.28393 9.0971 6.35147 9.12508C6.41901 9.15305 6.48038 9.19406 6.53208 9.24575L7.80762 10.522L11.3087 7.02017C11.3604 6.96847 11.4218 6.92747 11.4894 6.89949C11.5569 6.87151 11.6293 6.85711 11.7024 6.85711C11.7755 6.85711 11.8479 6.87151 11.9154 6.89949C11.983 6.92747 12.0443 6.96847 12.096 7.02017C12.1477 7.07186 12.1887 7.13323 12.2167 7.20078C12.2447 7.26832 12.2591 7.34071 12.2591 7.41382C12.2591 7.48693 12.2447 7.55932 12.2167 7.62686C12.1887 7.6944 12.1477 7.75577 12.096 7.80747Z" fill="#229ED9" />
                                    </svg>
                                    </span> </p>
                                    <p className=' mb-0 fw-normal font_size_xmd line_height_md '>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='mb-0 font_inter fw-normal font_size_xmd line_height_xmd max_width_321 padding_top_20 padding_bottom_27'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pe-3'>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={comment} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={recycle} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={heart} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>21</p>
                                </div>
                                <div className='mb-0'>
                                    <img src={save} alt="comment_icon" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mt-4 mt-lg-0 z-1 ">
                        <div className='news_box'>

                            <div className=' d-flex align-items-center '>
                                <img className=' max_width_80' src={profile_img} alt="profile_icon" />
                                <div className=' ps-2'>
                                    <p className=' mb-0 font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7265 7.33175C15.4643 7.05772 15.1931 6.77535 15.0908 6.52706C14.9963 6.29963 14.9907 5.92268 14.9851 5.55754C14.9747 4.87874 14.9636 4.10952 14.4287 3.57468C13.8939 3.03985 13.1247 3.02872 12.4459 3.01829C12.0807 3.01272 11.7038 3.00716 11.4764 2.91257C11.2288 2.81033 10.9457 2.53909 10.6717 2.27689C10.1918 1.81577 9.64651 1.29346 8.92041 1.29346C8.19431 1.29346 7.64974 1.81577 7.16915 2.27689C6.89513 2.53909 6.61276 2.81033 6.36446 2.91257C6.13843 3.00716 5.76008 3.01272 5.39494 3.01829C4.71614 3.02872 3.94692 3.03985 3.41208 3.57468C2.87725 4.10952 2.8696 4.87874 2.85569 5.55754C2.85012 5.92268 2.84456 6.29963 2.74997 6.52706C2.64774 6.77466 2.37649 7.05772 2.11429 7.33175C1.65318 7.81164 1.13086 8.35691 1.13086 9.08301C1.13086 9.8091 1.65318 10.3537 2.11429 10.8343C2.37649 11.1083 2.64774 11.3907 2.74997 11.639C2.84456 11.8664 2.85012 12.2433 2.85569 12.6085C2.86612 13.2873 2.87725 14.0565 3.41208 14.5913C3.94692 15.1262 4.71614 15.1373 5.39494 15.1477C5.76008 15.1533 6.13704 15.1589 6.36446 15.2534C6.61206 15.3557 6.89513 15.6269 7.16915 15.8891C7.64904 16.3502 8.19431 16.8726 8.92041 16.8726C9.64651 16.8726 10.1911 16.3502 10.6717 15.8891C10.9457 15.6269 11.2281 15.3557 11.4764 15.2534C11.7038 15.1589 12.0807 15.1533 12.4459 15.1477C13.1247 15.1373 13.8939 15.1262 14.4287 14.5913C14.9636 14.0565 14.9747 13.2873 14.9851 12.6085C14.9907 12.2433 14.9963 11.8664 15.0908 11.639C15.1931 11.3914 15.4643 11.1083 15.7265 10.8343C16.1876 10.3544 16.71 9.8091 16.71 9.08301C16.71 8.35691 16.1876 7.81234 15.7265 7.33175ZM12.096 7.80747L8.20127 11.7022C8.14959 11.754 8.08823 11.795 8.02068 11.823C7.95314 11.851 7.88074 11.8654 7.80762 11.8654C7.7345 11.8654 7.6621 11.851 7.59455 11.823C7.52701 11.795 7.46564 11.754 7.41397 11.7022L5.74478 10.0331C5.69308 9.98136 5.65208 9.91999 5.6241 9.85245C5.59612 9.7849 5.58172 9.71251 5.58172 9.6394C5.58172 9.5663 5.59612 9.49391 5.6241 9.42636C5.65208 9.35882 5.69308 9.29745 5.74478 9.24575C5.84918 9.14135 5.99078 9.0827 6.13843 9.0827C6.21154 9.0827 6.28393 9.0971 6.35147 9.12508C6.41901 9.15305 6.48038 9.19406 6.53208 9.24575L7.80762 10.522L11.3087 7.02017C11.3604 6.96847 11.4218 6.92747 11.4894 6.89949C11.5569 6.87151 11.6293 6.85711 11.7024 6.85711C11.7755 6.85711 11.8479 6.87151 11.9154 6.89949C11.983 6.92747 12.0443 6.96847 12.096 7.02017C12.1477 7.07186 12.1887 7.13323 12.2167 7.20078C12.2447 7.26832 12.2591 7.34071 12.2591 7.41382C12.2591 7.48693 12.2447 7.55932 12.2167 7.62686C12.1887 7.6944 12.1477 7.75577 12.096 7.80747Z" fill="#229ED9" />
                                    </svg>
                                    </span> </p>
                                    <p className=' mb-0 fw-normal font_size_xmd line_height_md '>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='mb-0 font_inter fw-normal font_size_xmd line_height_xmd max_width_321 padding_top_20 padding_bottom_27'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pe-3'>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={comment} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={recycle} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={heart} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>21</p>
                                </div>
                                <div className='mb-0'>
                                    <img src={save} alt="comment_icon" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 z-1 mt-4">
                        <div className='news_box'>

                            <div className=' d-flex align-items-center '>
                                <img className=' max_width_80' src={profile_img} alt="profile_icon" />
                                <div className=' ps-2'>
                                    <p className=' mb-0 font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7265 7.33175C15.4643 7.05772 15.1931 6.77535 15.0908 6.52706C14.9963 6.29963 14.9907 5.92268 14.9851 5.55754C14.9747 4.87874 14.9636 4.10952 14.4287 3.57468C13.8939 3.03985 13.1247 3.02872 12.4459 3.01829C12.0807 3.01272 11.7038 3.00716 11.4764 2.91257C11.2288 2.81033 10.9457 2.53909 10.6717 2.27689C10.1918 1.81577 9.64651 1.29346 8.92041 1.29346C8.19431 1.29346 7.64974 1.81577 7.16915 2.27689C6.89513 2.53909 6.61276 2.81033 6.36446 2.91257C6.13843 3.00716 5.76008 3.01272 5.39494 3.01829C4.71614 3.02872 3.94692 3.03985 3.41208 3.57468C2.87725 4.10952 2.8696 4.87874 2.85569 5.55754C2.85012 5.92268 2.84456 6.29963 2.74997 6.52706C2.64774 6.77466 2.37649 7.05772 2.11429 7.33175C1.65318 7.81164 1.13086 8.35691 1.13086 9.08301C1.13086 9.8091 1.65318 10.3537 2.11429 10.8343C2.37649 11.1083 2.64774 11.3907 2.74997 11.639C2.84456 11.8664 2.85012 12.2433 2.85569 12.6085C2.86612 13.2873 2.87725 14.0565 3.41208 14.5913C3.94692 15.1262 4.71614 15.1373 5.39494 15.1477C5.76008 15.1533 6.13704 15.1589 6.36446 15.2534C6.61206 15.3557 6.89513 15.6269 7.16915 15.8891C7.64904 16.3502 8.19431 16.8726 8.92041 16.8726C9.64651 16.8726 10.1911 16.3502 10.6717 15.8891C10.9457 15.6269 11.2281 15.3557 11.4764 15.2534C11.7038 15.1589 12.0807 15.1533 12.4459 15.1477C13.1247 15.1373 13.8939 15.1262 14.4287 14.5913C14.9636 14.0565 14.9747 13.2873 14.9851 12.6085C14.9907 12.2433 14.9963 11.8664 15.0908 11.639C15.1931 11.3914 15.4643 11.1083 15.7265 10.8343C16.1876 10.3544 16.71 9.8091 16.71 9.08301C16.71 8.35691 16.1876 7.81234 15.7265 7.33175ZM12.096 7.80747L8.20127 11.7022C8.14959 11.754 8.08823 11.795 8.02068 11.823C7.95314 11.851 7.88074 11.8654 7.80762 11.8654C7.7345 11.8654 7.6621 11.851 7.59455 11.823C7.52701 11.795 7.46564 11.754 7.41397 11.7022L5.74478 10.0331C5.69308 9.98136 5.65208 9.91999 5.6241 9.85245C5.59612 9.7849 5.58172 9.71251 5.58172 9.6394C5.58172 9.5663 5.59612 9.49391 5.6241 9.42636C5.65208 9.35882 5.69308 9.29745 5.74478 9.24575C5.84918 9.14135 5.99078 9.0827 6.13843 9.0827C6.21154 9.0827 6.28393 9.0971 6.35147 9.12508C6.41901 9.15305 6.48038 9.19406 6.53208 9.24575L7.80762 10.522L11.3087 7.02017C11.3604 6.96847 11.4218 6.92747 11.4894 6.89949C11.5569 6.87151 11.6293 6.85711 11.7024 6.85711C11.7755 6.85711 11.8479 6.87151 11.9154 6.89949C11.983 6.92747 12.0443 6.96847 12.096 7.02017C12.1477 7.07186 12.1887 7.13323 12.2167 7.20078C12.2447 7.26832 12.2591 7.34071 12.2591 7.41382C12.2591 7.48693 12.2447 7.55932 12.2167 7.62686C12.1887 7.6944 12.1477 7.75577 12.096 7.80747Z" fill="#229ED9" />
                                    </svg>
                                    </span> </p>
                                    <p className=' mb-0 fw-normal font_size_xmd line_height_md '>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='mb-0 font_inter fw-normal font_size_xmd line_height_xmd max_width_321 padding_top_20 padding_bottom_27'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pe-3'>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={comment} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={recycle} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={heart} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>21</p>
                                </div>
                                <div className='mb-0'>
                                    <img src={save} alt="comment_icon" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 z-1 mt-4">
                        <div className='news_box'>

                            <div className=' d-flex align-items-center '>
                                <img className=' max_width_80' src={profile_img} alt="profile_icon" />
                                <div className=' ps-2'>
                                    <p className=' mb-0 font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7265 7.33175C15.4643 7.05772 15.1931 6.77535 15.0908 6.52706C14.9963 6.29963 14.9907 5.92268 14.9851 5.55754C14.9747 4.87874 14.9636 4.10952 14.4287 3.57468C13.8939 3.03985 13.1247 3.02872 12.4459 3.01829C12.0807 3.01272 11.7038 3.00716 11.4764 2.91257C11.2288 2.81033 10.9457 2.53909 10.6717 2.27689C10.1918 1.81577 9.64651 1.29346 8.92041 1.29346C8.19431 1.29346 7.64974 1.81577 7.16915 2.27689C6.89513 2.53909 6.61276 2.81033 6.36446 2.91257C6.13843 3.00716 5.76008 3.01272 5.39494 3.01829C4.71614 3.02872 3.94692 3.03985 3.41208 3.57468C2.87725 4.10952 2.8696 4.87874 2.85569 5.55754C2.85012 5.92268 2.84456 6.29963 2.74997 6.52706C2.64774 6.77466 2.37649 7.05772 2.11429 7.33175C1.65318 7.81164 1.13086 8.35691 1.13086 9.08301C1.13086 9.8091 1.65318 10.3537 2.11429 10.8343C2.37649 11.1083 2.64774 11.3907 2.74997 11.639C2.84456 11.8664 2.85012 12.2433 2.85569 12.6085C2.86612 13.2873 2.87725 14.0565 3.41208 14.5913C3.94692 15.1262 4.71614 15.1373 5.39494 15.1477C5.76008 15.1533 6.13704 15.1589 6.36446 15.2534C6.61206 15.3557 6.89513 15.6269 7.16915 15.8891C7.64904 16.3502 8.19431 16.8726 8.92041 16.8726C9.64651 16.8726 10.1911 16.3502 10.6717 15.8891C10.9457 15.6269 11.2281 15.3557 11.4764 15.2534C11.7038 15.1589 12.0807 15.1533 12.4459 15.1477C13.1247 15.1373 13.8939 15.1262 14.4287 14.5913C14.9636 14.0565 14.9747 13.2873 14.9851 12.6085C14.9907 12.2433 14.9963 11.8664 15.0908 11.639C15.1931 11.3914 15.4643 11.1083 15.7265 10.8343C16.1876 10.3544 16.71 9.8091 16.71 9.08301C16.71 8.35691 16.1876 7.81234 15.7265 7.33175ZM12.096 7.80747L8.20127 11.7022C8.14959 11.754 8.08823 11.795 8.02068 11.823C7.95314 11.851 7.88074 11.8654 7.80762 11.8654C7.7345 11.8654 7.6621 11.851 7.59455 11.823C7.52701 11.795 7.46564 11.754 7.41397 11.7022L5.74478 10.0331C5.69308 9.98136 5.65208 9.91999 5.6241 9.85245C5.59612 9.7849 5.58172 9.71251 5.58172 9.6394C5.58172 9.5663 5.59612 9.49391 5.6241 9.42636C5.65208 9.35882 5.69308 9.29745 5.74478 9.24575C5.84918 9.14135 5.99078 9.0827 6.13843 9.0827C6.21154 9.0827 6.28393 9.0971 6.35147 9.12508C6.41901 9.15305 6.48038 9.19406 6.53208 9.24575L7.80762 10.522L11.3087 7.02017C11.3604 6.96847 11.4218 6.92747 11.4894 6.89949C11.5569 6.87151 11.6293 6.85711 11.7024 6.85711C11.7755 6.85711 11.8479 6.87151 11.9154 6.89949C11.983 6.92747 12.0443 6.96847 12.096 7.02017C12.1477 7.07186 12.1887 7.13323 12.2167 7.20078C12.2447 7.26832 12.2591 7.34071 12.2591 7.41382C12.2591 7.48693 12.2447 7.55932 12.2167 7.62686C12.1887 7.6944 12.1477 7.75577 12.096 7.80747Z" fill="#229ED9" />
                                    </svg>
                                    </span> </p>
                                    <p className=' mb-0 fw-normal font_size_xmd line_height_md '>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='mb-0 font_inter fw-normal font_size_xmd line_height_xmd max_width_321 padding_top_20 padding_bottom_27'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pe-3'>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={comment} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={recycle} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={heart} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>21</p>
                                </div>
                                <div className='mb-0'>
                                    <img src={save} alt="comment_icon" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 z-1 mt-4">
                        <div className='news_box'>

                            <div className=' d-flex align-items-center '>
                                <img className=' max_width_80' src={profile_img} alt="profile_icon" />
                                <div className=' ps-2'>
                                    <p className=' mb-0 font_weight_900 font_size_xmd line_height_sm'>Joe Bidenn <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7265 7.33175C15.4643 7.05772 15.1931 6.77535 15.0908 6.52706C14.9963 6.29963 14.9907 5.92268 14.9851 5.55754C14.9747 4.87874 14.9636 4.10952 14.4287 3.57468C13.8939 3.03985 13.1247 3.02872 12.4459 3.01829C12.0807 3.01272 11.7038 3.00716 11.4764 2.91257C11.2288 2.81033 10.9457 2.53909 10.6717 2.27689C10.1918 1.81577 9.64651 1.29346 8.92041 1.29346C8.19431 1.29346 7.64974 1.81577 7.16915 2.27689C6.89513 2.53909 6.61276 2.81033 6.36446 2.91257C6.13843 3.00716 5.76008 3.01272 5.39494 3.01829C4.71614 3.02872 3.94692 3.03985 3.41208 3.57468C2.87725 4.10952 2.8696 4.87874 2.85569 5.55754C2.85012 5.92268 2.84456 6.29963 2.74997 6.52706C2.64774 6.77466 2.37649 7.05772 2.11429 7.33175C1.65318 7.81164 1.13086 8.35691 1.13086 9.08301C1.13086 9.8091 1.65318 10.3537 2.11429 10.8343C2.37649 11.1083 2.64774 11.3907 2.74997 11.639C2.84456 11.8664 2.85012 12.2433 2.85569 12.6085C2.86612 13.2873 2.87725 14.0565 3.41208 14.5913C3.94692 15.1262 4.71614 15.1373 5.39494 15.1477C5.76008 15.1533 6.13704 15.1589 6.36446 15.2534C6.61206 15.3557 6.89513 15.6269 7.16915 15.8891C7.64904 16.3502 8.19431 16.8726 8.92041 16.8726C9.64651 16.8726 10.1911 16.3502 10.6717 15.8891C10.9457 15.6269 11.2281 15.3557 11.4764 15.2534C11.7038 15.1589 12.0807 15.1533 12.4459 15.1477C13.1247 15.1373 13.8939 15.1262 14.4287 14.5913C14.9636 14.0565 14.9747 13.2873 14.9851 12.6085C14.9907 12.2433 14.9963 11.8664 15.0908 11.639C15.1931 11.3914 15.4643 11.1083 15.7265 10.8343C16.1876 10.3544 16.71 9.8091 16.71 9.08301C16.71 8.35691 16.1876 7.81234 15.7265 7.33175ZM12.096 7.80747L8.20127 11.7022C8.14959 11.754 8.08823 11.795 8.02068 11.823C7.95314 11.851 7.88074 11.8654 7.80762 11.8654C7.7345 11.8654 7.6621 11.851 7.59455 11.823C7.52701 11.795 7.46564 11.754 7.41397 11.7022L5.74478 10.0331C5.69308 9.98136 5.65208 9.91999 5.6241 9.85245C5.59612 9.7849 5.58172 9.71251 5.58172 9.6394C5.58172 9.5663 5.59612 9.49391 5.6241 9.42636C5.65208 9.35882 5.69308 9.29745 5.74478 9.24575C5.84918 9.14135 5.99078 9.0827 6.13843 9.0827C6.21154 9.0827 6.28393 9.0971 6.35147 9.12508C6.41901 9.15305 6.48038 9.19406 6.53208 9.24575L7.80762 10.522L11.3087 7.02017C11.3604 6.96847 11.4218 6.92747 11.4894 6.89949C11.5569 6.87151 11.6293 6.85711 11.7024 6.85711C11.7755 6.85711 11.8479 6.87151 11.9154 6.89949C11.983 6.92747 12.0443 6.96847 12.096 7.02017C12.1477 7.07186 12.1887 7.13323 12.2167 7.20078C12.2447 7.26832 12.2591 7.34071 12.2591 7.41382C12.2591 7.48693 12.2447 7.55932 12.2167 7.62686C12.1887 7.6944 12.1477 7.75577 12.096 7.80747Z" fill="#229ED9" />
                                    </svg>
                                    </span> </p>
                                    <p className=' mb-0 fw-normal font_size_xmd line_height_md '>I am giving back in the community.</p>
                                </div>
                            </div>
                            <p className='mb-0 font_inter fw-normal font_size_xmd line_height_xmd max_width_321 padding_top_20 padding_bottom_27'>Hipster ipsum tattooed brunch I'm baby. Crucifix cliche mixtape salvia vexillologist. Kickstarter sartorial post-ironic biodiesel cold-pressed a activated subway. Af dsa kickstarter squid.</p>
                            <div className=' d-flex align-items-center justify-content-between pe-3'>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={comment} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>28</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={recycle} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>5</p>
                                </div>
                                <div className=' d-flex align-items-center gap-1'>
                                    <img src={heart} alt="comment_icon" />
                                    <p className=' mb-0 font_inter fw-normal font_size_sm line_height_xsm'>21</p>
                                </div>
                                <div className='mb-0'>
                                    <img src={save} alt="comment_icon" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News