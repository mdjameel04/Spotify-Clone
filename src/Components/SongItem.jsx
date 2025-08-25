import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const SongItem = ({name, image, desc,id}) => {
  
const {playWidth } = useContext(PlayerContext)

  return (
    <div onClick={()=> playWidth(id)} className='min-w-[180px] rounded cursor-pointer hover:bg-[#ffffff26] ]'>
      <img src={image} alt="" />
      <p  className='font-bold mt-2 mb-1'>{name}</p>
      <p  className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
