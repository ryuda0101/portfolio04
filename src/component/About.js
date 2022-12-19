import React, { useState } from 'react'
import Banner from './Banner'
import { VscChevronLeft, VscChevronRight, VscChromeClose } from "react-icons/vsc";
import {lists} from '../data/storeList'

const About = () => {
    // 이미지 클릭시 나오는 화면 
    let [toggle,toggleSet] = useState(false);

    // 클릭한 이미지 순번값 담기는 데이터값
    let [clickImg,clickImgSet] = useState(0);

  return (
    <div className='About'>
      <Banner title="Our Stores"></Banner>
      <div className='container'>
        <div className='center'>
          <p className='context'>
              <span>Tetley Group은 전세계 40여개국에서 3천명 이상의 직원들과 함께 브랜드 및 티 포장 사업에 종사하고 있으며 영국에서 가장 큰 티 브랜드입니다.</span>
              <span>Tetley Group은 영국 웨스트 런던의 그린 포드에 본사를 두고 있습니다. 호주, 캐나다, 체코, 폴란드, 미국에서 상업 활동을 하고 있으며 케냐와 말라위에서 차를 구입하고 파키스탄과 방글라데시에서 합작 투자를 하고 있습니다. 제조시설은 영국 북동부의 달링턴 근처 애틀랜타 조지아에 있습니다. Tetley Group은 2000년 2억 7천만 파운드에 Tata Group에 인수되었으며 이 인수는 당시 인도와 영국 사이에서 일어난 가장 큰 규모의 기업 인수였습니다.</span>
              <span>​Tata Group은 인도에서 가장 오래되고 규모가 큰 비즈니스 그룹으로 통신, 화학, 에너지, 철강 등 7개 부분의 사업에 걸쳐 있으며 96개의 회사로 구성되어 150개국 이상에서 69만명 이상의 직원들과 함께 하고 있습니다.</span>
              <span>전세계에 있는 Tetley의 매장을 만나보세요.</span>
          </p>
          <div className='lists'>
          {
              lists.map((item,index) => {
                  return (
                      <div className='list' key={index} onClick={() => {toggleSet(true); clickImgSet(index);}}>
                          <div className='img_box'>
                            <img src={"/img/lists/"+item.img+".jpg"} alt='가게 사진 입니다.'/>
                          </div>
                          <h2>{item.title}</h2>
                      </div>
                  )
              })
          }
          </div>
        </div>
      </div>
      <div id='detail' className={toggle === true ? "show" : null}>
        <div className='center'>
          <div className='btns'>
            <div className='closeBtn' onClick={() => {toggleSet(false)}}><VscChromeClose /></div>
            <div className='nextBtn' onClick={() => {clickImg === lists.length-1 ? clickImgSet(0) : clickImgSet(clickImg + 1)}}><VscChevronRight></VscChevronRight></div>
            <div className='prevBtn' onClick={() => {clickImg === 0 ? clickImgSet(lists.length-1) : clickImgSet(clickImg - 1)}}><VscChevronLeft></VscChevronLeft></div>
          </div>
          <div className='left'>
            <img src={"/img/lists/"+(lists[clickImg].img)+".jpg"} alt='가게 사진 입니다.' />
          </div>
          <div className='right'>
            <h2>{lists[clickImg].title}</h2>
            <div className='where'>
              <h3>찾아오시는 길</h3>
              <p>{lists[clickImg].address}</p>
            </div>
            <div className='when'>
              <h3>오픈 시간</h3>
              <p>월요일 ~ 금요일: <span>{lists[clickImg].openDay}</span></p>
              <p>토요일 ~ 일요일: <span>{lists[clickImg].openWeek}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


