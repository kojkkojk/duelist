import React, { useEffect, useState } from 'react'
import { serverName } from '../../configs';
import useStore from '../../store/store';

function Detail() {
  const zustand = useStore((state) => (state.charData));
  const [charDetailDatas, setCharDetailDatas] = useState({
    adventureName: "",
    characterId: "",
    characterName: "",
    guildId: "",
    guildName: "",
    jobGrowId: "",
    jobGrowName: "",
    jobId: "",
    jobName: "",
    level: 0,
    serverId: ""
  })

  useEffect(() => {
    setCharDetailDatas({ ...zustand })
  }, [zustand])

  return (
    <div className='charDirectInfos'>
      {charDetailDatas.adventureName === "" ? <></> : <>
        <div className='charEquips'>
          <div className='charImg'>
            <img src={`https://img-api.neople.co.kr/df/servers/${charDetailDatas.serverId}/characters/${charDetailDatas.characterId}?zoom=2`} height={"400px"} alt="info" />
            <div className='charText'>
              <span>{serverName[charDetailDatas.serverId]}</span>
              <span>{charDetailDatas.adventureName}</span>
              <span>{charDetailDatas.characterName}</span>
              <span>Lv.{charDetailDatas.level}</span>
              <span>{charDetailDatas.jobGrowName}</span>
              <span>{charDetailDatas.guildName}</span>
            </div>
          </div>
          <div className='charEquip'>
            {charDetailDatas.equipment.map((data, index) => (
              <React.Fragment key={index}>
                <div className='item'>
                  <img src={`https://img-api.neople.co.kr/df/items/${data["itemId"]}`} alt="아이템" />
                  <span>&nbsp;{data.itemName}&nbsp;{data.reinforce === 0 ? "": "+"+data.reinforce}{data.refine===0?"":"("+data.refine+")"}</span>
                </div>
              </React.Fragment>))}
          </div>
        </div>
      </>}
    </div>
  )
}

export default Detail