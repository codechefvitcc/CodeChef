import DeptCard from "./Department-Card.jsx";
import "../../Styles/Department/Department-Display.css";

//import { FaTrophy } from "react-icons/fa6";
import { IoMdBrush } from "react-icons/io";
//import { TbWorld } from "react-icons/tb";
//import { FaHandshake } from "react-icons/fa6";
import { defaultpfp, vishalpfp } from "../../assets/index.js";

function DeptDisplay() {
  const mockData = [
    {
      name: "Design and Content",
      icon: IoMdBrush,
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum cupiditate nam omnis eius, alias id qui eaque molestias harum in aut neque. Minima quae voluptas rerum harum qui similique!",
      members: [
        { name: "qwe", regNo: "22BCE1234", linkedIn: "https://example.com" },
        { name: "asd", regNo: "22BCE1234", linkedIn: "https://example.com" },
        { name: "zxc", regNo: "22BCE1234", linkedIn: "https://example.com" },
        { name: "rty", regNo: "22BCE1234", linkedIn: "https://example.com" },
        { name: "ghf", regNo: "22BCE1234", linkedIn: "https://example.com" },
        { name: "vbn", regNo: "22BCE1234", linkedIn: "https://example.com" },
      ],
      lead: [
        {
          leadName: "Vishal Kumar Yadav",
          leadImg: vishalpfp,
          leadLinkedIn: "https://google.com",
        },
        {
          leadName: "Vishal Kumar Yadav",
          leadImg: defaultpfp,
          leadLinkedIn: "https://google.com",
        },
      ],
    },
  ];

  return (
    <div className="main">
      <div className="display">
        <h2>Our Departments</h2>
        {mockData.map((dept, index) => (
          <DeptCard
            key={index}
            name={dept.name}
            icon={dept.icon}
            description={dept.description}
            members={dept.members}
            lead={dept.lead}
          />
        ))}
      </div>
    </div>
  );
}

export default DeptDisplay;
