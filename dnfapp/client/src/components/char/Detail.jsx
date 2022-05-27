import React, { useEffect, useState } from 'react'
import { serverName } from '../../configs';
import useStore from '../../store/store';

function Detail() {
  const charInfomations = useStore((state) => (state.charData));
  const [selectOrder, setselectOrder] = useState("장비")
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
    talismans: [],
  })

  useEffect(() => {
    setCharDetailDatas({ ...charInfomations })
  }, [charInfomations])

  return (
    <div className='charDirectInfos'>
      {charDetailDatas.adventureName === "" ? <></> : <>
        <div className='charEquips'>
          <div className='charImg'>
            <div className='imgimg'>
              <img src={`https://img-api.neople.co.kr/df/servers/${charDetailDatas.serverId}/characters/${charDetailDatas.characterId}?zoom=2`} alt="info" />
            </div>
            <div className='charText'>
              <div><span>서버</span><span>{serverName[charDetailDatas.serverId]}</span></div>
              <div><span>모험단</span><span>{charDetailDatas.adventureName}</span></div>
              <div><span>캐릭터</span><span>{charDetailDatas.characterName}</span></div>
              <div><span>레벨</span><span>{charDetailDatas.level}</span></div>
              <div><span>직업</span><span>{charDetailDatas.jobGrowName}</span></div>
              <div><span>길드</span><span>{charDetailDatas.guildName}</span></div>
              {charDetailDatas.status.length > 0 ? <div><span>명성</span><span>{charDetailDatas.status[16].value}</span></div> : <></>}
              {/* <div>[피해증가]&nbsp;{charDetailDatas.status[33].value}</div> */}
            </div>
          </div>
        </div>
        <div className='equipWindowBtn'>
          <div onClick={() => { setselectOrder("장비") }}>장비</div>
          <div onClick={() => { setselectOrder("스탯") }}>스탯</div>
          <div onClick={() => { setselectOrder("아바타") }}>아바타</div>
          <div onClick={() => { setselectOrder("탈리스만") }}>탈리스만</div>
          <div onClick={() => { setselectOrder("크리쳐") }}>크리쳐</div>
        </div>
        {selectOrder === "장비" ?
          <div className='charEquip'>
            {charDetailDatas.equipment.map((data, index) => (
              <React.Fragment key={index}>
                <div className='item'>
                  <div className='ddsd'><span>{data.slotName}</span></div>
                  <div className='equipTem'><img src={`https://img-api.neople.co.kr/df/items/${data["itemId"]}`} alt="아이템" /></div>
                  <div className="ddds">
                    <div className={`${data.itemRarity} nava`}>{data.itemName}</div>
                    <div className='havana'>
                      <span className='ech'>{data.enchant ? <>{
                        data.enchant.status && !data.enchant.explain && !data.enchant.reinforceSkill ?                    
                        data.enchant.status.length > 0 &&
                        data.enchant.status.map((enchant, index) => (
                          <React.Fragment key={index}>{enchant.name} {enchant.value} </React.Fragment>
                        )): 
                        !data.enchant.status && data.enchant.explain && !data.enchant.reinforceSkill ? 
                        `${data.enchant.explain}` :
                        !data.enchant.status && !data.enchant.explain && data.enchant.reinforceSkill ? 
                        `${data.enchant.reinforceSkill[0].skills[0].name} +${data.enchant.reinforceSkill[0].skills[0].value} ` : ""
                        }</>                       
                      : ""}
                      </span>
                      {!data.growInfo ? <></> : 
                      <span className='ech2'>
                        {data.growInfo.options.map((optLevel,index)=>(
                          <React.Fragment key={index}>{optLevel.level} </React.Fragment>
                        ))}
                      </span> }
                    </div>
                  </div>
                  <div className="ref">
                    <span className={`${data.amplificationName}`}>
                      {data.reinforce === 0 ? <></> : "+" + data.reinforce}
                      {data.refine === 0 ? <></> : "(" + data.refine + ")"}
                    </span>
                  </div>
                </div>
              </React.Fragment>))}
          </div> : <></>}
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
            </> : ""}
          </div> :
        selectOrder === "아바타" ?
          <div className='charEquip'>
            {charDetailDatas.avatar.length > 0 ?
              <>{charDetailDatas.avatar.map((avatars, index) => (
                <React.Fragment key={index}>
                  <div className='item'>
                    <div className='equipTem'>
                      <img src={`https://img-api.neople.co.kr/df/items/${avatars.itemId}`} alt="info" height={"100%"} />
                    </div>
                    <div className='ddds'>
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
          <div className='charSpec2'>
            {!charDetailDatas.talismans ? "" : <> {charDetailDatas.talismans.length > 0 ?
              <>{charDetailDatas.talismans.map((runed, index) => (
                <div className='totototo' key={index}>
                  <div className='talisman'>
                    <span>{runed.talisman.itemName}</span>
                  </div>
                  <div className='taliRunes'>
                    {runed.runes.map((lune, index) => (<React.Fragment key={index}>
                      <span>{lune.itemName}</span></React.Fragment>))}
                  </div>
                </div>
              ))}</> : ""}</>}
          </div> :
        selectOrder === "크리쳐" ?
          <div className='charSpec'>
            {charDetailDatas.creature === null ? "" :
              <div className='fss2'>
                <div className='trs2'>
                  <img src={`https://img-api.neople.co.kr/df/items/${charDetailDatas.creature.itemId}`} alt="아이템" />
                </div>

                <div className='tts2'>
                  {charDetailDatas.creature.itemName}
                </div>
              </div>
            }</div> :
          <></>}
    </>}
    </div>
  )
}

export default Detail;