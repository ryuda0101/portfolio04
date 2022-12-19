import React, { useState } from 'react'
import Banner from './Banner'

const Gallery = () => {
    // 이미지 클릭시 확대될때 뒤에 검은 배경화면 처리 
    let [toggleBg,toggleBgSet] = useState(false);

    // 클릭한 이미지 순번값 담기는 데이터값
    let [clickImg,clickImgSet] = useState("dummy");

    // 이미지들 배열로 정리
    let [lists] = useState([
        {img:"list1",title:"Piccadilly"},
        {img:"list2",title:"St Pancras"},
        {img:"list3",title:"The Royal Exchange"},
        {img:"list4",title:"Heathrow T5"},
        {img:"list5",title:"Hong Kong"}
    ])

  return (
    <div className='gallery'>
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
                    <div className='list' key={index}>
                        <img src={"/img/lists/"+item.img+".jpg"}/>
                        <h2>{item.title}</h2>
                    </div>
                )
            })
        }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Gallery
