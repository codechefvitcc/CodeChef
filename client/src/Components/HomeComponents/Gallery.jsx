import React,{useState,useEffect} from 'react'
import { HomeGalleryImages } from "../../Constants/images";
import { ImageLoaderComponent } from "../../Utility";

const Gallery = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % HomeGalleryImages.length
            )
        },5000)
        return(
            () => clearInterval(interval)
        )
    },[])

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    }

  return (
    <div className='flex flex-col justify-center items-center p-4' style={{
        background:
          "linear-gradient(to bottom, #fff 20%, rgba(220, 234, 255, 0.7) 50%)",
      }}>

    <h2 className="box-border tracking-normal text-gray-700 outline-none block text-[36px] font-bold mx-auto mb-5 w-full">
            Gallery
          </h2>
        
        <div className='flex flex-wrap my-4'>
            {HomeGalleryImages.map((element,index)=>{
                return(
                    <div key={index} className={`transition-opacity duration-1000 ease-in-out ${currentIndex==index ?'visible' :'hidden' }`}>
                        <ImageLoaderComponent url={element.url} hashCode={element.hashCode} alt={`Image ${index + 1}`} className="rounded-xl max-h-[70vh]"/>
                    </div>
                )
            })}
        </div>
        <div className='flex items-center '>
            {HomeGalleryImages.map((element,index)=>{
                return(
                    <div onClick={()=>{handleThumbnailClick(index)}} key={index} className={`cursor-pointer transition-opacity duration-1000 ease-in-out rounded-xl mx-2 ${currentIndex==index ?'border-blue-500 border-4'  :' border-none' }`}>
                        <ImageLoaderComponent url={element.url} hashCode={element.hashCode} alt={`Image ${index + 1}`} className=" rounded-md max-h-[5vh]"/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Gallery