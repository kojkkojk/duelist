import React, { useEffect, useState } from 'react'
import { serverName } from '../../configs';
import useStore from '../../store/store';

function Detail() {
  const charInfomations = useStore((state) => (state.charData));
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
    serverId: "",
    setItemInfo: [],
    status: []
  })

  useEffect(() => {
    setCharDetailDatas({ ...charInfomations })
  }, [charInfomations])

  return (
    <div className='charDirectInfos'>
      {charDetailDatas.adventureName === "" ? <></> : <>
        <div className='charEquips'>
          <div className='charImg'>
            <img src={`https://img-api.neople.co.kr/df/servers/${charDetailDatas.serverId}/characters/${charDetailDatas.characterId}?zoom=2`} alt="info" />
            <div className='charText'>
              <span>[서버]&nbsp;{serverName[charDetailDatas.serverId]}</span>
              <span>[모험단]&nbsp;{charDetailDatas.adventureName}</span>
              <span>{charDetailDatas.characterName}</span>
              <span>Lv.{charDetailDatas.level}</span>
              <span>{charDetailDatas.jobGrowName}</span>
              <span>[길드]&nbsp;{charDetailDatas.guildName}</span>
              {charDetailDatas.status.length > 0 ? <span>[명성]&nbsp;{charDetailDatas.status[16].value}</span> : ""}
            </div>
          </div>
          <div className='charEquip'>
            {charDetailDatas.equipment.map((data, index) => (
              <React.Fragment key={index}>
                <div className='item'>
                  <img src={`https://img-api.neople.co.kr/df/items/${data["itemId"]}`} alt="아이템" />
                  <span>&nbsp;{data.itemName}&nbsp;{data.reinforce === 0 ? "" : "+" + data.reinforce}{data.refine === 0 ? "" : "(" + data.refine + ")"}</span>
                </div>
              </React.Fragment>))}
          </div>
        </div>
        <div className='charSpec'>
          {charDetailDatas.status.length > 0 ? <>
            <div className='fss'>
              <div className='trs'>
                <span style={{color:"red"}}>{charDetailDatas.status[4].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[4].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span style={{color:"blue"}}>{charDetailDatas.status[5].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[5].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[6].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[6].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[7].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[7].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[8].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[8].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[9].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[9].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[10].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[10].value}%</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[11].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[11].value}%</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[12].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[12].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[13].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[13].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[14].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[14].value}%</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[15].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[15].value}%</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[17].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[17].value}%</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[18].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[18].value}%</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span style={{fontWeight:"bold" ,color:"firebrick"}}>{charDetailDatas.status[23].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[23].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[24].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[24].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span style={{fontWeight:"bold" ,color:"skyblue"}}>{charDetailDatas.status[25].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[25].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[26].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[26].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span style={{fontWeight:"bold" ,color:"yellowgreen"}}>{charDetailDatas.status[27].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[27].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[28].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[28].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span style={{fontWeight:"bold" ,color:"purple"}}>{charDetailDatas.status[29].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[29].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[30].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[30].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[31].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[31].value}</span>
              </div>
            </div>
            <div className='fss'>
              <div className='trs'>
                <span>{charDetailDatas.status[32].name}</span>
              </div>
              <div className='tts'>
                <span>{charDetailDatas.status[32].value}</span>
              </div>
            </div>
          </> : ""}
        </div>
      </>}
    </div>
  )
}

export default Detail