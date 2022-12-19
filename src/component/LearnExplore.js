import React, { useState } from 'react'
import {countryList} from '../data/countryList'
import Banner from './Banner';
import TeaList from './TeaList'

const LearnExplore = () => {
  // 1. 초기에 clicked라는 변수에 not이라는 값을 담고 시작
  const [clicked,setClick] = useState("not");

  // 6. TeaList컴포넌트에서 해당 index 버튼 클릭시 toggle(index)실행
  // 7. 조건문으로 클릭된 버튼(clicked에 담긴 값이 index 인가?) 그렇다면 "not"을 담아주고, 아니면 index값을 담아준다.
  const toggle = (index) => {
    if(clicked === index) {
      // 접을때
      setClick("not");
    }
    else {
      // 펼칠때
      setClick(index);
    }
  }
  return (
    <div className='ListWrap'>
      <Banner title={"What is tea?"}></Banner>
        <p className='cont1'>테틀리는 1837년 부터 차를 만들어 오면서 완벽한 한컵의 차를 만드는 방법에 대한 노하우를 쌓아왔습니다.<br/> 한컵의 차가 만들어 지기 까지의 여정은 전 세계의 차밭에서 시작됩니다. 찻잎은 카멜리아 시넨시스라 불리우는 동백나무과에 속한 차나무의 어린 잎과 개화되지 않은 싹으로 만들어지며 우리는 전 세계에서 차를 재배하고 구입하여 테틀리 특유의 강한 바디감과 세련된 풍미를 얻고 있습니다.</p>
        <div className='cont2'>
          <div className='left'></div>
          <div className='right'>
            <h2>​차가 생산되는 곳</h2>
            <p>
              <span>우리의 숙련된 바이어들은 25개가 넘는 국가의 수천개의 차밭과 함께 긴밀히 협력하여 최고의 찻잎을 선택합니다.  이것은 우리에게 사회적으로 공정하고 환경적으로 지속 가능한 글로벌 차 산업을 이어갈 수 있도록 해주며 이것이 바로 Ethical Tea Partnership을 설립하고 Rainforest Alliance Certified 차밭에서 차를 100% 공급 받고 있는 이유입니다.</span>
              <span>테틀리 차 바이어는 완벽한 한잔의 차를 위해 세계 최고의 차를 구매하고 있습니다. 차의 주요 생산국은 스리랑카, 인도, 중국, 일본, 인도네시아, 터키 및 아프리카와 남미 일부 지역입니다.</span>
              <span>​우리가 구매하고 있는 차 농장들은 차를 우리는데 가장 적합한 찻잎만을 골라내어 수확하는데 대해 자부심을 가지고 있습니다.</span>
              <span>찻잎이 차밭에서 매장의 선반에 올라서기 전까지 수확이 되고, 공장에 도착하여 블렌딩 된 뒤 규격에 맞게 패킹이 되어 매장으로 배송이 되는 4단계의 여정을 거치게 됩니다. 이 모든 것에서 가장 중요한 것은 관리와 세심함으로 우리는 최상의 한잔을 만들어 내기 위해 모든 노력을 기울이고 있습니다.</span>
            </p>
          </div>
        </div>
        <div className='cont3'>
          <p>차 나무는 따뜻하고 습한 기후에서 번성하며, 20피트 높이까지 자랄 수 있습니다.<br/>​그러나 최고의 차는 서늘한 기후와 높은 고도에서 재배되는 차이며 차 나무의 높이와 너비가 3~4피트에 불과합니다.</p>
        </div>
        <div className='cont4'>
          <div className='center'>
            <h2>우리의 차는 다음지역에서 왔습니다.</h2>
            <ul className='listBox'>
              {
                // 2. 반복문으로 data폴더안에 만든 객체들 반복문으로 가져오기
                countryList.map((item, index) => (
                  <TeaList
                    key={index} countryData={countryList[index]}
                    // 3. 위에서 만든 toggle에 반복문으로 생성한 index값 담아주기
                    // 4. 그리고이걸 toggleData라는 이름으로 TeaList컴포넌트로 보내주기
                    // 5. TeaList컴포넌트에서는 props.toggleData로 받아준 함수 toggle(index)을 실행시켜준다.
                    toggleData = {() => {toggle(index)}}
                    // 8. 7번에서 돌린 결과값을 activeData라는 이름으로, TeaList컴포넌트로 보내준다.
                    activeData = {clicked === index}
                    // 9. TeaList컴포넌트에서는 삼항연산자를 통해 className에 activeData가 true라면 클래스 이름을 붙여주고 아니라면 클래스 이름을 주지 않는다.
                    // className={`list_item ${props.activeData ? "act" : null}`}
                  ></TeaList>
                ))
              }
            </ul>
          </div>
        </div>
        <div className='cont5'>
        </div>
    </div>
  )
}

export default LearnExplore