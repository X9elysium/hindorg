'use client';
import Image from "next/legacy/image";
import Styles from './page.module.css'
import HomeSec from './Components/Sections/HomeSec/HomeSec';
import About from './Components/Sections/About/About'
import Services from './Components/Sections/Serivces/Services';
import Whychoose from './Components/Sections/Whychoose/Whychoose';
import Testimon from './Components/Sections/Testimon/Testimon';
import Clientsec from './Components/Sections/Clientsec/Clientsec';
import OurTeam from './Components/Sections/Featured/OurTeam';
import Contact from './Components/Sections/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Form from './Components/Sections/Form/Form';
import {  useState, useEffect } from 'react';




export default function Home() {
  const [menu,setMenu] = useState("home")


  useEffect(() => {

    const moblink = document.querySelectorAll(".mobnavbtn");
    moblink.forEach( moblinks => {
      moblinks.addEventListener("click", ()=>{
        let elm = document.getElementById(moblinks.getAttribute("data-link"))
        console.log(elm.offsetTop)
        
        if (moblinks.getAttribute("data-link") == "home"){
          var offsetPosition = elm.getBoundingClientRect().top + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "about"){
          var offsetPosition = elm.getBoundingClientRect().top + (-20) + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "services"){
          var offsetPosition = elm.getBoundingClientRect().top + 170 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "testimon"){
          var offsetPosition = elm.getBoundingClientRect().top + 28 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (moblinks.getAttribute("data-link") == "contact"){
          var offsetPosition = elm.getBoundingClientRect().top + 70 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      })
    })




    const links = document.querySelectorAll(".dsknavbtn")
    links.forEach( link => {
      link.addEventListener("click", ()=>{
        let el = document.getElementById(link.getAttribute("data-link"));
        
        if (link.getAttribute("data-link") == "home"){
          var offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "about"){
          var offsetPosition = el.getBoundingClientRect().top + 48 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "services"){
          var offsetPosition = el.getBoundingClientRect().top + 190 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "testimon"){
          var offsetPosition = el.getBoundingClientRect().top + 28 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }

        if (link.getAttribute("data-link") == "contact"){
          var offsetPosition = el.getBoundingClientRect().top + 10 + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }



      })
    } )


    const sections = document.querySelectorAll("section")
    window.addEventListener("scroll", ()=>{
      let currentH = '';
      sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 2)){
          currentH = section.getAttribute('id')
          setMenu(currentH)
        }
      })
    });

  }, []);


  
  const [isOpen,setIsopen] = useState(false)
  function clicking(){
    if(isOpen){
      setIsopen(false)
    }else{
      setIsopen(true)
    }
  }
  function clsmenu(){
      setIsopen(false)
  }

  const homestyle = {
      "color" : menu == "home" ? "#971B1E" : "#1B3E1C",
      "textDecoration": menu == "home" ? "underline" : "none"
  }

  const Aboutstyle = {
    "color" : menu == "about" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "about" ? "underline" : "none"
  }

  const Servsstyle = {
    "color" : menu == "services" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "services" ? "underline" : "none"
  }

  const Teststyle = {
    "color" : menu == "testimon" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "testimon" ? "underline" : "none"
  }

  const contm = {
    "color" : menu == "contact" ? "#971B1E" : "#1B3E1C",
    "textDecoration": menu == "contact" ? "underline" : "none"
  }

  const Conststylebtn = {
    "borderColor" : menu == "contact" ? "#1B3E1C" : "transparent",
    "color" : menu == "contact" ? "#1B3E1C" : "#EFFFEF",
    "backgroundColor" : menu == "contact" ? "#EFFFEF" : "#1B3E1C",
  }



  const style0 = {
    "transform" : isOpen ? "rotate(44deg)" : "rotate(0deg)"
  }
  const style1 = {
    "opacity" : isOpen ? "0" : "1"
  }
  const style2 = {
    "transform" : isOpen ? "rotate(-44deg)" : "rotate(0deg)"
  }
  const mainbx = {
    boxShadow: isOpen ? "none" : "0px 5px 16px #0000001e inset"
  }


  

  return (
    // ----------------------------- head section -------------------------
    <>
    <div className={Styles.headwrapper}>
    <div className={Styles.maxwidth} style={mainbx} >
    <div className={Styles.main} >
    <a href="/">
    <div className={Styles.brand}>
      <Image 
        src="/Assets/Layer_2.png"
        alt="Picture of the author"
        width={698}
        height={177}
        className={Styles.img}
      />
    </div>
    </a>


    <div className={`${Styles.navlink} navlink`}>
        <ul>
        <a className="dsknavbtn" data-link="home"><li style={homestyle} id="linksd" > Home </li></a>
        <a className="dsknavbtn" data-link="about"><li style={Aboutstyle} id="linksd" >About</li></a>
        <a className="dsknavbtn" data-link="services"><li style={Servsstyle} id="linksd" >Products</li></a>
        <a className="dsknavbtn" data-link="testimon"> <li style={Teststyle} id="linksd" >Testimonial</li></a>
        </ul>
    </div>
    
    <div className={Styles.hamburger} onClick={clicking}>
      <span style={style0}></span>
      <span style={style1}></span>
      <span style={style2}></span>
    </div>
    <a className="dsknavbtn" data-link="contact">
    <div style={Conststylebtn} className={Styles.calltoact}>
      Contact us
    </div>
    </a>
  </div>
  </div>
<div className={`${Styles.navlinkm} ${isOpen ? Styles.open : ""}`}>
<ul>
  <a className="mobnavbtn" data-link="home"><li style={homestyle} onClick={clsmenu}>Home</li></a>
  <a className="mobnavbtn" data-link="about"><li style={Aboutstyle} onClick={clsmenu}>About</li></a>
  <a className="mobnavbtn" data-link="services"><li style={Servsstyle} onClick={clsmenu}>Products</li></a>
  <a className="mobnavbtn" data-link="testimon"><li style={Teststyle} onClick={clsmenu}>Testimonial</li></a>
  <a className="mobnavbtn" data-link="contact"><li style={contm} onClick={clsmenu}>Contact us</li></a>
</ul>
</div>
</div>

{/* ------ Whatsapp Flooting Icon ------------- */}

  <a href="https://wa.me/919427050266">
    <div className={Styles.whatsapp}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path></svg>
    </div>
    <div className={Styles.whatsappmob}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path></svg>
    </div>
  </a>

    
{/* ------ Whatsapp Flooting Icon ------------- */}


    {/* ----------------- Pages Sections -------------------- */}
    
    
    <div>

      <section id='home'><HomeSec /></section>

      <section id='about'><About /></section>
      <section id='services'><Services /></section>
      <Whychoose />
      <section id='testimon'><Testimon /></section>
      <Clientsec />
      <OurTeam />
      <section id='contact'><Contact /></section>
      <Form />
      <Footer />
    </div>
    </>
  )
}


