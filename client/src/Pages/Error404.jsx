import React from 'react'
import { ImageLoaderComponent } from '../Utility'
import { Error404Images ,Error404bg} from '../Constants/images'

const Error404 = () => {
  return (
    <div className='relative p-10 flex justify-center min-h-[60vh] bg-gradient-to-b from-[#c6dcfea3] to-[#d8e6ff99]' >
      <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1   justify-items-center gap-5 w-full  m-[auto]'>
      
      {Error404Images?.map((element,index)=>(
        <ImageLoaderComponent key={index}
        url={element.url}
        hashCode={element.hashCode || 'LVG^YOX80=xBpyjbNHWX,ljY#jW?'}
        alt="404Error"
        className="w-[245px] h-[210px] xl:w-[280px] xl:h-[240px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        blurWidth={'245px'}
        blurHeight={'210px'}
        rounded={false}
      />
      ))}
      </div>  
      
    </div>
  )
}

export default Error404
