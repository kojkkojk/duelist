import React, { useEffect, useState } from 'react'
import { serverName } from '../../configs';
import useStore from '../../store/store';

function Detail(props) {
  const charInfomations = useStore((state) => (state.charData));
  const [selectOrder, setselectOrder] = useState("스탯")
  const [charDetailDatas, setCharDetailDatas] = useState({
    adventureName: "",
    avatar: [],
    buff: [],
    characterId: "",
    characterName: "",
    creature: "",
    equipment: "",
    guildId: "",
    guildName: "",
    jobGrowId: "",
    jobGrowName: "",
    jobId: "",
    jobName: "",
    level: 0,
    serverId: "",
    setItemInfo: [],
    status: [],
    talismans: []
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
        <div className='equipWindowBtn'>
          <div onClick={() => { setselectOrder("스탯") }}>스탯</div>
          <div onClick={() => { setselectOrder("아바타") }}>아바타</div>
          <div onClick={() => { setselectOrder("탈리스만") }}>탈리스만</div>
          <div onClick={() => { setselectOrder("스탯") }}>제갈량</div>
        </div>
        {selectOrder === "스탯" ?
        <div className='charSpec'>
        {charDetailDatas.status.length > 0 ? <>
        <div className='fss'>
          <div className='trs'>
            <span style={{ color: "red" }}>{charDetailDatas.status[4].name}</span>
          </div>
          <div className='tts'>
            <span>{charDetailDatas.status[4].value}</span>
          </div>
        </div>
        <div className='fss'>
          <div className='trs'>
            <span style={{ color: "blue" }}>{charDetailDatas.status[5].name}</span>
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
            <span>{charDetailDatas.status[13].value}%</span>
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
            <span style={{ fontWeight: "bold", color: "firebrick" }}>{charDetailDatas.status[23].name}</span>
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
            <span style={{ fontWeight: "bold", color: "skyblue" }}>{charDetailDatas.status[25].name}</span>
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
            <span style={{ fontWeight: "bold", color: "yellowgreen" }}>{charDetailDatas.status[27].name}</span>
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
            <span style={{ fontWeight: "bold", color: "purple" }}>{charDetailDatas.status[29].name}</span>
          </div>
          <div className='tts'>
            <span>{charDetailDatas.status[29].value}</span>
          </div>
        </div>

        {charDetailDatas.status[30] ?
          <div className='fss'>
            <div className='trs'>
              <span>{charDetailDatas.status[30].name}</span>
            </div>
            <div className='tts'>
              <span>{charDetailDatas.status[30].value}</span>
            </div>
          </div> : ""}

        {charDetailDatas.status[31] ?
          <div className='fss'>
            <div className='trs'>
              <span>{charDetailDatas.status[31].name}</span>
            </div>
            <div className='tts'>
              <span>{charDetailDatas.status[31].value}</span>
            </div>
          </div> : ""}

        {charDetailDatas.status[32] ?
          <div className='fss'>
            <div className='trs'>
              <span>{charDetailDatas.status[32].name}</span>
            </div>
            <div className='tts'>
              <span>{charDetailDatas.status[32].value}</span>
            </div>
          </div> : ""}
        </> : ""}
        </div> :
        selectOrder === "아바타" ?
        <div className='charSpec'>
        {charDetailDatas.avatar.length > 0 ?
          <>{charDetailDatas.avatar.map((avatars, index) => (
            <React.Fragment key={index}>
              <div className='fss2'>
                <div className='trs2'>
                  <img src={`https://img-api.neople.co.kr/df/items/${avatars.itemId}`} alt="info" height={"100%"} />
                </div>
                <div className='tts2'>
                  <span>{avatars.itemName}</span>
                  {avatars.clone["itemName"] !== null && <span style={{ fontSize: "10pt" }}>{avatars.clone["itemName"]}</span>}
                </div>
              </div>
            </React.Fragment>
          ))
          }</>

          : ""}
        </div> :
        selectOrder === "탈리스만" ?
        <div className='charSpec'>
          {charDetailDatas.talismans.length > 0 ?
            <>{charDetailDatas.talismans.map((runed, index) => (
              <React.Fragment key={index}>
                <span>{runed.talisman.itemName}</span>
                {runed.runes.map((lune,index)=>(
                  <React.Fragment key={index}>
                    {lune.itemName}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))
            }</> : ""}
        </div> :
        ""}
      </>}
    </div>
  )
}

export default Detail;
