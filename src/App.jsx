import { FaEnvelope, FaFacebookF, FaInstagram, FaLink, FaLinkedinIn } from "react-icons/fa";
import "./App.css";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import logo from "./images/logo.png"

function App() {
  return (
    <div className="container">
      <div className="email-container w-[100%] flex flex-col py-[40px] px-[80px] items-center">
        {/* ------First Container------- */}
        <div className="email-container--first w-[80%] br-bottom">
          <div className="pt-[30px] pb-[30px] pl-[10px] pr-[10px] flex flex-row justify-around items-center">
            <div className="branding flex flex-row w-[400px] items-center">
              <div className="branding--logo">
                <img src={logo} alt="Smash code logo image" width="280px"/>
              </div>
              <div className="branding--text">
                <p className="font-bold text-[1.3rem]">Smash Code</p>
                <p className="pt-[10px] text-[1.1rem]">IT Company</p>
                <p className="pt-[10px] text-[1.1rem]">What You Can Think We Can Develop It For You!</p>
              </div>
            </div>
            <div className="br-left">
            </div>
            <div className="connect w-[300px] flex flex-col">
                <div className="email pt-[10px]">
                  <p className="flex flex-row items-center"> 
                    <span className="pr-[5px]">
                      <FaEnvelope  className="sec-color text-[1.1rem]"/>
                      </span>smashcode.dev@gmail.com
                  </p>
                </div>
                <div className="dev pt-[10px]">
                  
                  <a href="https://www.smashcode.dev/" className="flex flex-row items-center">
                  <span className="pr-[5px]">
                    <FaLink className="sec-color text-[1.1rem]"/>
                  </span>
                  smashcode.dev</a>
                </div>
                <div className="loc pt-[10px]">
                  <p className="flex flex-row items-start">
                    <span className="pr-[5px] pt-[5px]">
                      <FaLocationDot className="sec-color text-[1.1rem] locIcon"/>
                    </span>
                  Quid E Azam Town, Street No.5 Usman Town, Noor Pur Green Town, Faisalabad, Punjab 38000
                  </p>
                </div>
            </div>
          </div>
        </div>
        {/* ------Second Container------- */}
        <div className="email-container--second w-[80%]">
           <div className="flex flex-row justify-between px-[70px] pt-[50px] pb-[10px]">
            <div className="logo-text text-[1.4rem] font-bold">
              <span className="sec-color">
              Smash
                </span>  Code
            </div>
            <div className="social-area flex flex-col">
              <div className="icons">
                <div className="flex flex-row w-[180px] justify-around">
                  <a href="https://www.facebook.com/groups/smashcode"target="_blank" className="icon-bg flex items-center justify-center">
                    
                    <span>
                      <FaFacebookF/>
                    </span>
                  </a>
                  <a  href="https://www.instagram.com/smashcode.dev" target="_blank" className="icon-bg flex items-center justify-center">
                    <span>
                      <FaInstagram/>
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/company/smashcodedev/" target="_blank" className="icon-bg flex items-center justify-center"> 

                    <span>
                      <FaLinkedinIn/>
                    </span>
                  </a>
                  <a href="https://www.twitter.com/Smashcodedev" target="_blank" className="icon-bg flex items-center justify-center">

                    <span>
                      <FaXTwitter/>
                    </span>
                  </a>
                </div>
              </div>
              <div className="news-btn mt-[15px] text-center">
                    Join Our Newsletter
              </div>
            </div>
           </div>
        </div>
        {/* ------Thiird Container------- */}
        <div className="email-container--third w-[80%]">
          <div className="px-[70px] pt-[50px] pb-[10px]">
            <div className="brand-video">
            <iframe width="360" height="215" src="https://www.youtube.com/embed/qlgXO_kE5eY?si=zzaRbTDx-wv_rIx9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        {/* ------------- */}
      </div>
    </div>
  );
}

export default App;
