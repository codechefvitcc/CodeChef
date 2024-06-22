import React from 'react';

// Leads card import
import LeadCard from '../../Components/Leads/LeadCard';

//image components imports
import { LeadsBackgroundImage, VishalPfp } from '../../Constants/images';

function Batch23() {
  return (
    <div
      className="py-16 sm:py-8"
      style={{
        backgroundImage: `url(${LeadsBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-[64px] text-center font-bold uppercase text-gray-700 pd-8">
        Leads
      </h1>
      <div className="flex items-center justify-center space-x-4">
        <div className="text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default">
          2023-24
        </div>
        <div className="text-2xl text-[#0DCAF0] hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default">
          2024-25
        </div>
        <div className="text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default">
          2025-26
        </div>
      </div>

      <div className="hidden md:flex md:flex-row justify-center items-center md:items-end">
        <div className="inline-block scale-125 my-10">
          <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
            Secretary
          </h3>
          <LeadCard name="Some name" link="www.google.com" />
        </div>
        <div className="inline-block scale-150 my-20 mx-20">
          <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
            President
          </h3>
          <LeadCard
            name="Some name"
            link="www.google.com"
            image={VishalPfp.url}
            hashCode={VishalPfp.hashCode}
          />
        </div>
        <div className="inline-block scale-125 my-10">
          <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
            Treasurer
          </h3>
          <LeadCard name="Some name" link="www.google.com" />
        </div>
      </div>

      <div className="flex flex-col block md:hidden md:flex-row justify-center items-center md:items-end max-[440px]:scale-90">
        <div className="inline-block scale-150 my-20 mx-20">
          <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
            President
          </h3>
          <LeadCard
            name="Some name"
            link="www.google.com"
            image={VishalPfp.url}
            hashCode={VishalPfp.hashCode}
          />
        </div>
        <div className="w-full flex flex-row max-[440px]:justify-between justify-evenly">
          <div className="inline-block scale-125 my-10">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              Secretary
            </h3>
            <LeadCard name="Some name" link="www.google.com" />
          </div>
          <div className="inline-block scale-125 my-10">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              Treasurer
            </h3>
            <LeadCard name="Some name" link="www.google.com" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:scale-110 md:py-10 lg:scale-100 lg:flex-row justify-evenly items-center lg:items-end">
        <div className="inline-block items-bottom ">
          <h3 className="text-24 text-center font-bold text-gray-700 py-2">
            Content
          </h3>
          <div className="flex">
            <LeadCard name="Some name" link="www.google.com" />
            <LeadCard name="Some name" link="www.google.com" />
          </div>
        </div>
        <div className="inline-block">
          <h3 className="text-24 text-center font-bold text-gray-700 py-2">
            Web dev
          </h3>
          <LeadCard name="Some name" link="www.google.com" />
        </div>
        <div className="inline-block items-bottom">
          <h3 className="text-24 text-center font-bold text-gray-700 py-2">
            Finance
          </h3>
          <div className="flex">
            <LeadCard name="Some name" link="www.google.com" />
            <LeadCard name="Some name" link="www.google.com" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:scale-110 md:py-10 lg:scale-100 lg:flex-row justify-evenly items-center lg:items-end ">
        <div className="inline-block items-bottom">
          <h3 className="text-24 text-center font-bold text-gray-700 py-2">
            Content
          </h3>
          <div className="flex">
            <LeadCard name="Some name" link="www.google.com" />
            <LeadCard name="Some name" link="www.google.com" />
          </div>
        </div>
        <div className="inline-block transform -translate-y-8 pt-8">
          <h3 className="text-24 text-center font-bold text-gray-700 py-2">
            Social Media
          </h3>
          <LeadCard name="Some name" link="www.google.com" />
        </div>
        <div className="inline-block items-bottom">
          <h3 className="text-24 text-center font-bold text-gray-700 py-2">
            Finance
          </h3>
          <div className="flex">
            <LeadCard name="Some name" link="www.google.com" />
            <LeadCard name="Some name" link="www.google.com" />
          </div>
        </div>
      </div>

      <div className="flex  md:scale-110 md:py-10 lg:scale-100 justify-evenly items-end">
        <div className="inline-block items-bottom">
          <h3 className="text-24 text-center font-bold text-gray-700 py-2">
            Finance
          </h3>
          <div className="flex">
            <LeadCard name="Some name" link="www.google.com" />
            <LeadCard name="Some name" link="www.google.com" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Batch23;
