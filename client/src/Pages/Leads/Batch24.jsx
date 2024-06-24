import { useState } from 'react';

// Leads card import
import LeadCard from '../../Components/Leads/LeadCard';

//image components imports
import LeadsBackgroundImage  from '/Background/LeadsBackground.svg';

// Lead data 24-25
import { Team24 } from '../../Constants/Teams/Batch24Data';

//Lead data 23-24 
import { Team23 } from '../../Constants/Teams/Batch23Data';

function Batch24() {
  const [year, setYear] = useState(24);

  if (year == 24) {
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
          <div
            onClick={() => setYear(23)}
            className="cursor-pointer text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default"
          >
            2023-24
          </div>
          <div
            onClick={() => setYear(24)}
            className="cursor-pointer text-2xl text-[#0DCAF0] hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default"
          >
            2024-25
          </div>
          <div
            onClick={() => setYear(25)}
            className="cursor-pointer text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded cursor-default"
          >
            2025-26
          </div>
        </div>

        <div className="hidden md:flex md:flex-row justify-center items-center md:items-end">
          <div className="inline-block scale-125 my-10">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              Vice President
            </h3>
            <LeadCard
              name={Team24['Vice President'].name}
              image={Team24['Vice President'].image}
              hashCode={Team24['Vice President'].hash}
              link={Team24['Vice President'].linkedIn}
            />
          </div>
          <div className="inline-block scale-150 my-20 mx-20">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              President
            </h3>
            <LeadCard
              name={Team24.President.name}
              image={Team24.President.image}
              hashCode={Team24.President.hash}
              link={Team24.President.linkedIn}
            />
          </div>
          <div className="inline-block scale-125 my-10">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
            General Secretary
            </h3>
            <LeadCard
              name={Team24['General Secretary'].name}
              image={Team24['General Secretary'].image}
              hashCode={Team24['General Secretary'].hash}
              link={Team24['General Secretary'].linkedIn}
            />
          </div>
        </div>

        <div className="flex flex-col block md:hidden md:flex-row justify-center items-center md:items-end max-[440px]:scale-90">
          <div className="inline-block scale-150 my-20 mx-20">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              President
            </h3>
            <LeadCard
              name={Team24.President.name}
              image={Team24.President.image}
              hashCode={Team24.President.hash}
              link={Team24.President.linkedIn}
            />
          </div>
          <div className="w-full flex flex-row justify-evenly justify-evenly">
            <div className="inline-block scale-105 my-10">
              <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
                Vice President
              </h3>
              <LeadCard
                name={Team24['Vice President'].name}
                image={Team24['Vice President'].image}
                hashCode={Team24['Vice President'].hash}
                link={Team24['Vice President'].linkedIn}
              />
            </div>
            <div className="inline-block scale-105 my-10">
              <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              General Secretary
              </h3>
              <LeadCard
                name={Team24['General Secretary'].name}
                image={Team24['General Secretary'].image}
                hashCode={Team24['General Secretary'].hash}
                link={Team24['General Secretary'].linkedIn}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:scale-110 md:py-10 lg:scale-100 lg:flex-row justify-evenly items-center lg:items-end">
          <div className="inline-block items-bottom ">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Competitive Programming
            </h3>
            <div className="flex">
              <LeadCard
                name={Team24['Competitive Programming1'].name}
                image={Team24['Competitive Programming1'].image}
                hashCode={Team24['Competitive Programming1'].hash}
                link={Team24['Competitive Programming1'].linkedIn}
              />
              <LeadCard
                name={Team24['Competitive Programming2'].name}
                image={Team24['Competitive Programming2'].image}
                hashCode={Team24['Competitive Programming2'].hash}
                link={Team24['Competitive Programming2'].linkedIn}
              />
            </div>
          </div>
          <div className="inline-block">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Web Development
            </h3>
            <LeadCard
              name={Team24['Web Development'].name}
              image={Team24['Web Development'].image}
              hashCode={Team24['Web Development'].hash}
              link={Team24['Web Development'].linkedIn}
            />
          </div>
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Finance
            </h3>
            <div className="flex">
              <LeadCard
                name={Team24['Finance1'].name}
                image={Team24['Finance1'].image}
                hashCode={Team24['Finance1'].hash}
                link={Team24['Finance1'].linkedIn}
              />
              <LeadCard
                name={Team24['Finance2'].name}
                image={Team24['Finance2'].image}
                hashCode={Team24['Finance2'].hash}
                link={Team24['Finance2'].linkedIn}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:scale-110 md:py-10 lg:scale-100 lg:flex-row justify-evenly items-center lg:items-end ">
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Event Management
            </h3>
            <div className="flex">
              <LeadCard
                name={Team24['Event Management1'].name}
                image={Team24['Event Management1'].image}
                hashCode={Team24['Event Management1'].hash}
                link={Team24['Event Management1'].linkedIn}
              />
              <LeadCard
                name={Team24['Event Management2'].name}
                image={Team24['Event Management2'].image}
                hashCode={Team24['Event Management2'].hash}
                link={Team24['Event Management2'].linkedIn}
              />
            </div>
          </div>
          <div className="inline-block transform -translate-y-8 pt-8">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Social Media & Content
            </h3>
            <div className='flex'>
            <LeadCard
              name={Team24['SocialMedia1'].name}
              image={Team24['SocialMedia1'].image}
              hashCode={Team24['SocialMedia1'].hash}
              link={Team24['SocialMedia1'].linkedIn}
            />
            <LeadCard
              name={Team24['SocialMedia2'].name}
              image={Team24['SocialMedia2'].image}
              hashCode={Team24['SocialMedia2'].hash}
              link={Team24['SocialMedia2'].linkedIn}
            />
            </div>
          </div>
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Outreach & Sponsorship
            </h3>
            <div className="flex">
              <LeadCard
                name={Team24['Outreach & Sponsorship1'].name}
                image={Team24['Outreach & Sponsorship1'].image}
                hashCode={Team24['Outreach & Sponsorship1'].hash}
                link={Team24['Outreach & Sponsorship1'].linkedIn}
              />
              <LeadCard
                name={Team24['Outreach & Sponsorship2'].name}
                image={Team24['Outreach & Sponsorship2'].image}
                hashCode={Team24['Outreach & Sponsorship2'].hash}
                link={Team24['Outreach & Sponsorship2'].linkedIn}
              />
            </div>
          </div>
        </div>

        <div className="flex  md:scale-110 md:py-10 lg:scale-100 justify-evenly items-end">
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Design
            </h3>
            <div className="flex">
              <LeadCard
                name={Team24['Design1'].name}
                image={Team24['Design1'].image}
                hashCode={Team24['Design1'].hash}
                link={Team24['Design1'].linkedIn}
              />
              <LeadCard
                name={Team24['Design2'].name}
                image={Team24['Design2'].image}
                hashCode={Team24['Design2'].hash}
                link={Team24['Design2'].linkedIn}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }else if(year === 23){
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
          <div
            onClick={() => setYear(23)}
            className="cursor-pointer text-2xl text-[#0DCAF0] hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded "
          >
            2023-24
          </div>
          <div
            onClick={() => setYear(24)}
            className="cursor-pointer text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded "
          >
            2024-25
          </div>
          <div
            onClick={() => setYear(25)}
            className="cursor-pointer text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded "
          >
            2025-26
          </div>
        </div>

        {/* Left Aligned Cards */}
        {/* <div className="hidden md:flex md:flex-row justify-center items-center md:items-end">
        <div className="inline-block scale-125 my-10">
          <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              Vice President
            </h3>
            <LeadCard
              name={Team23['Vice President'].name}
              image={Team23['Vice President'].image}
              hashCode={Team23['Vice President'].hash}
              link={Team23['Vice President'].linkedIn}
            />
          </div>
          <div className="inline-block pl-32  scale-150 my-20 ">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              President
            </h3>
            <LeadCard
              name={Team23.President.name}
              image={Team23.President.image}
              hashCode={Team23.President.hash}
              link={Team23.President.linkedIn}
            />
          </div>
          
        </div> */}

        {/* Right Aligned Cards */}
        <div className="hidden md:flex md:flex-row justify-center items-center md:items-end">
          <div className="inline-block pl-32 mr-24 scale-150 my-20 mx-20">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              President
            </h3>
            <LeadCard
              name={Team23.President.name}
              image={Team23.President.image}
              hashCode={Team23.President.hash}
              link={Team23.President.linkedIn}
            />
          </div>
          <div className="inline-block scale-125 ml-12 my-10">
          <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              Vice President
            </h3>
            <LeadCard
              name={Team23['Vice President'].name}
              image={Team23['Vice President'].image}
              hashCode={Team23['Vice President'].hash}
              link={Team23['Vice President'].linkedIn}
            />
          </div>
        </div>

        {/* Top Bottom Center - Aligned Cards */}
        {/* <div className="hidden md:flex md:flex-row justify-center flex items-center md:items-end">
          <div className="inline-block  mr-24 scale-150 my-20 mx-20">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              President
            </h3>
            <LeadCard
              name={Team23.President.name}
              image={Team23.President.image}
              hashCode={Team23.President.hash}
              link={Team23.President.linkedIn}
            />
          </div>
          
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              Vice President
            </h3>
            <LeadCard
              name={Team23['Vice President'].name}
              image={Team23['Vice President'].image}
              hashCode={Team23['Vice President'].hash}
              link={Team23['Vice President'].linkedIn}
            />
        </div> */}

        <div className="flex flex-col block md:hidden md:flex-row justify-center items-center md:items-end max-[440px]:scale-90">
          <div className="inline-block scale-150 my-20 mx-20">
            <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
              President
            </h3>
            <LeadCard
              name={Team23.President.name}
              image={Team23.President.image}
              hashCode={Team23.President.hash}
              link={Team23.President.linkedIn}
            />
          </div>
          <div className="w-full flex flex-row justify-evenly ">
            <div className="inline-block scale-105 my-10">
              <h3 className="text-[24px] text-center font-bold text-gray-700 py-2">
                Vice President
              </h3>
              <LeadCard
                name={Team23['Vice President'].name}
                image={Team23['Vice President'].image}
                hashCode={Team23['Vice President'].hash}
                link={Team23['Vice President'].linkedIn}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:scale-110 md:py-10 lg:scale-100 lg:flex-row justify-evenly items-center lg:items-end">
          <div className="inline-block items-bottom ">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Competitive Programming
            </h3>
            <div className="flex">
            <LeadCard
                name={Team23['Competitive Programming1'].name}
                image={Team23['Competitive Programming1'].image}
                hashCode={Team23['Competitive Programming1'].hash}
                link={Team23['Competitive Programming1'].linkedIn}
              />
              <LeadCard
                name={Team23['Competitive Programming2'].name}
                image={Team23['Competitive Programming2'].image}
                hashCode={Team23['Competitive Programming2'].hash}
                link={Team23['Competitive Programming2'].linkedIn}
              />
            </div>
          </div>
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Finance
            </h3>
            <LeadCard
              name={Team23['Finance1'].name}
              image={Team23['Finance1'].image}
              hashCode={Team23['Finance1'].hash}
              link={Team23['Finance1'].linkedIn}
            />
          </div>
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Design & Content
            </h3>
            <div className="flex">
            <LeadCard
                name={Team23['Design1'].name}
                image={Team23['Design1'].image}
                hashCode={Team23['Design1'].hash}
                link={Team23['Design1'].linkedIn}
              />
              <LeadCard
                name={Team23['Design2'].name}
                image={Team23['Design2'].image}
                hashCode={Team23['Design2'].hash}
                link={Team23['Design2'].linkedIn}
              />
            </div>
          </div>
        </div>


        <div className="flex flex-col md:scale-110 md:py-10 lg:scale-100 lg:flex-row justify-evenly items-center lg:items-end ">
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Event Management
            </h3>
            <div className="flex">
              <LeadCard
                name={Team23['Event Management1'].name}
                image={Team23['Event Management1'].image}
                hashCode={Team23['Event Management1'].hash}
                link={Team23['Event Management1'].linkedIn}
              />
              <LeadCard
                name={Team23['Event Management2'].name}
                image={Team23['Event Management2'].image}
                hashCode={Team23['Event Management2'].hash}
                link={Team23['Event Management2'].linkedIn}
              />
            </div>
          </div>
          <div className="inline-block items-bottom">
            <h3 className="text-24 text-center font-bold text-gray-700 py-2">
              Outreach & Sponsorship
            </h3>
            <div className="flex">
              <LeadCard
                name={Team23['Outreach & Sponsorship1'].name}
                image={Team23['Outreach & Sponsorship1'].image}
                hashCode={Team23['Outreach & Sponsorship1'].hash}
                link={Team23['Outreach & Sponsorship1'].linkedIn}
              />
            </div>
          </div>
        </div>

        
      </div>
    );
  } else {
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
        <div
            onClick={() => setYear(23)}
            className="cursor-pointer text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded "
          >
            2023-24
          </div>
          <div
            onClick={() => setYear(24)}
            className="cursor-pointer text-lg text-gray-500 hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded "
          >
            2024-25
          </div>
          <div
            onClick={() => setYear(25)}
            className="cursor-pointer text-2xl text-[#0DCAF0] hover:bg-gray-700 hover:bg-opacity-20 p-1 rounded "
          >
            2025-26
          </div>
        </div>
        <div className="flex justify-center">
          <div className="px-10 py-8 bg-blue-500 bg-opacity-50 border-4 border-blue-700 rounded-lg shadow-lg text-center mx-5 my-20 inline-block">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              This could be you!
            </h1>
            <p className="text-l md:text-xl text-gray-600">
              Join our ranks and shine brightly to be remembered forever
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Batch24;
