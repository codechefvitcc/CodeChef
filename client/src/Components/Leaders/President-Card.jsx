import { quotes } from "../../assets/leaders";
import { MdEmail } from "react-icons/md";

import { ImageLoaderComponent } from "../../Utility";

function PresidentCard({ name, url, hashCode, year, vision, mail, linkedin }) {
  return (
    <div
      className="
        w-[330px] xl:w-[590px] lg:w-[500px] md:w-[370px] sm:w-[570px]
        h-[260px] xl:h-[300px] lg:h-[230px] md:h-[190px] sm:h-[280px]
        gap-[10px] xl:gap-[30px] lg:gap-[20px] md:gap-[10px] sm:gap-[30px]
        px-[10px] xl:px-[40px] lg:px-[40px] md:px-[20px] sm:px-[40px]
        rounded-[10px] bg-white flex items-center overflow-hidden"
      style={{
        boxShadow: "2px 2px 6px 0px #00000040, -1px 0px 6px 0px #00000040",
      }}
    >
      <div
        className="w-[160px] xl:w-[190px] lg:w-[150px] md:w-[110px] sm:w-[170px]
            flex flex-col items-center"
      >
        <ImageLoaderComponent 
          url={url}
          hashCode={hashCode}
          alt={name}
          className="h-[110px] xl:h-[150px] lg:h-[100px] md:h-[80px] sm:h-[130px]
            w-[110px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[130px]
            rounded-full"
          blurWidth={'auto'}
          blurHeight={'auto'}
        />
        
        <div className="mt-[15px] flex flex-col items-center gap-[5px] uppercase">
          <h3 className="box-border m-0 bg-transparent tracking-normal text-gray-700 text-center outline-none block 
          text-[11px] xl:text-[17px] lg:text-[13px] md:text-[9.5px] sm:text-[15px] 
          font-bold">
            {name}
          </h3>

          <h4
            className="
                box-border m-0 bg-transparent tracking-normal text-gray-700 outline-none block 
                text-[9px] xl:text-[13px] lg:text-[9px] md:text-[7px] sm:text-[12px] 
                font-semibold"
          >
            Batch {year}
          </h4>
        </div>
      </div>

      <div
        className="rest-info 
            w-[250px] xl:w-[290px] lg:w-[250px] md:w-[210px] sm:w-[300px] 
            h-[240px] xl:h-[250px] lg:h-[200px] md:h-[160px] sm:h-[230px] 
            relative"
      >
        <div
          className="absolute 
                left-[-10px] xl:left-[-25px] lg:left-[-20px] md:left-[-15px] 
                top-0 xl:top-[-5px] lg:top-[-15px] md:top-[-15px] sm:top-[-10px]"
        >
          <img
              className="w-7 h-7"
              src={quotes}
              alt="Quotes"
            />
        </div>

        <div
          className="texts 
                h-[230px] xl:h-[250px] lg:h-[200px] md:h-[165px] sm:h-[250px] 
                text-center flex flex-col items-center justify-between"
        >
          <div
            className="vision mt-[10px] 
                    h-[210px] xl:h-[180px] lg:h-[140px] md:h-[120px] sm:h-[170px] 
                    w-[180px] xl:w-[290px] lg:w-[240px] md:w-[190px] sm:w-[270px] 
                    text-[10px] xl:text-[13px] lg:text-[11px] md:text-[9px] sm:text-[13px] 
                    flex items-center justify-center"
          >
            <p>{vision}</p>
          </div>

          <div className="flex items-center gap-[10px]">
            <button
              className="flex items-center justify-around 
                        xl:h-[40px] lg:h-[30px] md:h-[20px] sm:h-[40px] h-[25px] 
                        px-2 xl:px-4 lg:px-2 md:px-2 sm:px-3 
                        text-[14px] xl:text-sm lg:text-sm md:text-[10px] sm:text-[15px] 
                        lg:w-[100px] md:w-[50px] sm:w-[100px] w-[80px] 
                        border border-[#131313] 
                        bg-white 
                        rounded-full cursor-pointer
                        rounded-3xl"
              onClick={() => window.open(`mailto:${mail}`, "_blank")}
            >
              <MdEmail size={20} color="#062c68" />
              <span className="lg:block md:hidden block">Email</span>
            </button>

            <button
              className="flex items-center justify-around space-x-2 bg-white border border-[#131313] rounded-3xl text-black font-normal p-2 
              text-[13px] xl:text-sm lg:text-sm md:text-xs 
              h-[20px] xl:h-[40px] lg:h-[30px] md:h-[20px] sm:h-[40px] h-[25px] 
              lg:w-[100px] md:w-[50px] sm:w-[100px] w-[90px]"
              onClick={() => window.open(linkedin, "_blank")}
            >
              <img
                width="20px"
                height="20px"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
              <span className="lg:block md:hidden block">LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresidentCard;
