import React, { useEffect, useState } from 'react';
import DeptCard from './Department-Card.jsx';
import '../../Styles/Department/Department-Display.css'

import { FaTrophy } from 'react-icons/fa6';
import { IoMdBrush } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import { FaHandshake } from 'react-icons/fa6';
import { GiTie } from 'react-icons/gi';
import { GiTwoCoins } from 'react-icons/gi';

function DeptDisplay(){
  const [departments, setDepartments] = useState([]);

  const mockData = [
    {
      name: "Competetive Programming",
      image: FaTrophy,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Event management",
      image: IoMdBrush,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Marketing and Outreach",
      image: TbWorld,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead1LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
    },

    {
      name: "Event management",
      image: IoMdBrush,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Marketing and Outreach",
      image: TbWorld,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead1LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
    },

    {
      name: "Finance",
      image: FaHandshake,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Design and Content",
      image: GiTie,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Competetive Programming",
      image: GiTwoCoins,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Event management",
      image: GiTie,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Marketing and Outreach",
      image: GiTwoCoins,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead1LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
    },

    {
      name: "Finance",
      image: FaHandshake,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    },

    {
      name: "Design and Content",
      image: IoMdBrush,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [{name:"qwe", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"asd", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"zxc", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"rty", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"ghf", regNo:"22BCE1234", linkedIn:"https://example.com"}, {name:"vbn", regNo:"22BCE1234", linkedIn:"https://example.com"}],
      lead1Name: "lorem1",
      lead2Name: "lorem2",
      lead1LinkedIn: "https://example.com",
      lead2LinkedIn: "https://example.com",
      lead1Image: "./assets/image1.png",
      lead2Image: "./assets/image1.png"
    }
  ]

  useEffect(() => {
      setDepartments(mockData)
    }, [])

  return (
    <div className='main'>
      <div className='display'>
        <h2>Our Departments</h2>
        {departments.map((dept, index) => (
          <DeptCard 
            key={index}
            name={dept.name}
            image={dept.image}
            description={dept.description}
            members={dept.members}
            lead1={{ image: dept.lead1Image, name: dept.lead1Name, linkedIn: dept.lead1LinkedIn }}
            lead2={dept.lead2Name ? { image: dept.lead2Image, name: dept.lead2Name, linkedIn: dept.lead2LinkedIn } : null}
          />
        ))}
      </div>
    </div>
  );
};

export default DeptDisplay;