import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Banner from './Banner'

const Shop = () => {
  return (
    <div id='shopWrap'>
        <Banner title={"Our Product"}></Banner>
        <div className='shop'>
          <div className='center'>
            <div className='text'>
              <p>
                <span>대부분의 사람들은 차를 블렌딩 하는 것이 샴페인이나 위스키를 블렌딩하는 것과 비슷한 훌륭한 예술이라는 것을 인식하지 못합니다. 테틀리의 블렌더팀은 지난 1,000년에 가까운 차에 대한 지식을 습득하고 있으며 블렌딩에 대한 거의 모든것을 알고 있습니다.</span>
                <span>테틀리는 180년 이상 최고 품질의 차를 공급해 왔습니다. 전 세계 7개국에서 일하고 있는 전문적인 티 테이스터는 구매 담당들과 함께 경매를 통해 품질을 평가하고 테틀리에 가장 적합한 차를 구매합니다, 현재 우리가 마시는 차의 90% 이상은 모두 다양한 종류의 차를 혼합한 블렌드 제품입니다. 모든 블렌드는 테틀리에 적합한 품질이라고 판단되기 전까지 8회 이상 테스팅됩니다. 우리는 60가지가 넘는 테틀리 티 블렌드를 보유하고 있으며 테틀리 티 마스터의 자격을 갖추려면 5년 이상의 시간이 걸립니다. 농작물이라는 특성상 차는 항상 다른 맛을 가지고 있기 때문에 티 블렌딩은 지속적인 학습의 과정입니다.</span>
                <span>홍차와 녹차 이외에도, 우리 블렌더들은 모든 경우에 잘 어울리는 허브 차 블렌드를 만들었습니다. 각종 허브의 뿌리와 잎, 씨앗, 꽃, 향료, 과실의 향기롭고 풍성한 자연의 맛을 표현하였으며 카페인이 없어 언제나 편안하게 테틀리와 함께 하실 수 있습니다!</span>
              </p>
            </div>
            <div className='prdList'>
              <div className='list'>
                <a className='img_box' href='/Shop/Black'><img src='/img/tea01.jpg'/></a>
                <h4>Black Tea</h4>
                <a href='/Shop/Black'>자세히 보기 →</a>
              </div>
              <div className='list'>
                <a className='img_box' href='/Shop/Herbal'><img src='/img/tea03.jpg'/></a>
                <h4>Herbal Infusion</h4>
                <a href='/Shop/Herbal'>자세히 보기 →</a>
              </div>
              <div className='list'>
                <a className='img_box' href='/Shop/Cold'><img src='/img/tea02.jpg'/></a>
                <h4>Cold Infusion</h4>
                <a href='/Shop/Cold'>자세히 보기 →</a>
              </div>
              <div className='list'>
                <a className='img_box' href='/Shop/Gift'><img src='/img/tea04.jpg'/></a>
                <h4>Gift set</h4>
                <a href='/Shop/Gift'>자세히 보기 →</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop
