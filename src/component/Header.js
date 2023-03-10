import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [scTop,scTopSet] = useState(0);
  // console.log(scTop)
  
  const updateSc = () => {
    scTopSet(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll",updateSc);
  });

  // Shop의 서브메뉴 등장 이벤트
  const [MouseOn,setMouseOn] = useState("not"); 

  // Shop의 서브 gnb메뉴
  const shopMenu = [
    {depth2:"Black Tea", depth2Href:"Black"},
    {depth2:"Herbal Infusion", depth2Href:"Herbal"},
    {depth2:"Cold Infusion", depth2Href:"Cold"},
    {depth2:"Gift set", depth2Href:"Gift"},
  ]

  const location = useLocation();

  // 햄버거 메뉴 클릭시 서브메뉴 등장 이벤트
  const [hamToggle,SetHamToggle] = useState("not");
  

  return (
    <div id='header' className={scTop > 0 ? "fix": null}>
        <div className='center'>
            <h1 className='logo'><a href='/'><img src='/img/logo.png' /></a></h1>
            <ul className='gnb'>
                <li><a className={location.pathname === '/' ? 'gnbOn' : null} href='/'>Home</a></li>
                <li><a className={location.pathname === '/About' ? 'gnbOn' : null} href='/About'>About Tetley</a></li>
                <li><a className={location.pathname === '/Learn&Explore' ? 'gnbOn' : null} href='/Learn&Explore'>Learn&Explore</a></li>
                <li onMouseEnter={() => {setMouseOn("on")}} onMouseLeave={() => {setMouseOn("not")}}>
                  <a className={location.pathname === '/Shop' ? 'gnbOn' : null} href='/Shop'>Our Product</a>
                  <ul id='sub_gnb' className={MouseOn === "on" ? "on" : null}>
                    {
                      shopMenu.map((item,index) => {
                        return(
                          <li key={index}>
                            <a href={'/Shop/'+item.depth2Href}>{item.depth2}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
            </ul>
            <div id='hamMenu' onClick={() => {hamToggle === "clicked" ? SetHamToggle("not") : SetHamToggle("clicked")}} className={hamToggle === "clicked" ? "on" : null}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div id='mobileMenu' className={hamToggle === "clicked" ? "on" : null}>
              <ul>
                <li><a className={location.pathname === '/' ? 'gnbOn' : null} href='/'>Home</a></li>
                <li><a className={location.pathname === '/About' ? 'gnbOn' : null} href='/About'>About Tetley</a></li>
                <li><a className={location.pathname === '/Learn&Explore' ? 'gnbOn' : null} href='/Learn&Explore'>Learn&Explore</a></li>
                <li onMouseEnter={() => {setMouseOn("on")}} onMouseLeave={() => {setMouseOn("not")}}>
                  <a className={location.pathname === '/Shop' ? 'gnbOn' : null} href='/Shop'>Our Product</a>
                  <ul id='sub_gnb' className={MouseOn === "on" ? "on" : null}>
                    {
                      shopMenu.map((item,index) => {
                        return(
                          <li key={index}>
                            <a href={'/Shop/'+item.depth2Href}>{item.depth2}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
