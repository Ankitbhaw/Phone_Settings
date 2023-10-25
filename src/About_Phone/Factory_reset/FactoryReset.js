import React from 'react'
import factoryReset from "../../Assets/FactoryReset.jpg"

export default function FactoryReset() {
  return (
    <div className=' h-[100vh]'>
      <div className='text-3xl mb-7'>
        Factory reset
      </div>
      <div>
        <img src={factoryReset} alt='factoryReset' className='mb-8'/> 
      </div>
      <div className='text-sm text-gray-400 mb-3'>
      All the items listed above will be erased permanently. Back up all important items to your computer or Xiaomi Cloud before you continue
      </div>
      <div className='text-sm text-gray-400 mb-28'>
      Note: Before restoring items, check whether the folder <br/>"MIUI-Backup-AllBackup" exists on your mobile device. If it doesn't.create it.
      </div>
      <button className='text-base bg-zinc-700 w-full p-2 rounded-3xl ' style={{color:"red"}}>Erase all data</button>
    </div>
  )
}
