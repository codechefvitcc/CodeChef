import { MdArrowOutward } from "react-icons/md";

import image from "../assets/HomeGalley/image1.jpg";

const mockDataLatestBlog = {
  image: image,
  title: "Some event that happened",
  date: "Sunday, 1 Jan 2024",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  details:
    "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
};

const mockDataAllBlogs = [
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 1 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 2 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 3 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 4 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 5 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
  {
    image: image,
    title: "Some event that happened asdiuadsgi",
    date: "Sunday, 6 Jan 2023",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
    details:
      "Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, laudantium recusandae blanditiis earum, distinctio quisquam ullam voluptates, autem iste adipisci dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus quo, omnis quam quos aut? Iste incidunt veritatis adipisci non iusto.",
  },
];

const LatestBlogCard = ({ title, image, date, about, details }) => {
  const shortDetail =
    details.length > 300 ? `${details.substring(0, 300)}...` : details;
  const shortTitle = title.length > 25 ? `${title.substring(0, 25)}...` : title;

  return (
    <div className="bg-white border-[2px] border-gray-300 p-[10px] rounded-[16px] grid grid-cols-2 gap-[30px] max-w-[800px]">
      <div className="flex flex-col justify-between">
        <div className="rounded-[12px] overflow-hidden border border-gray-400 text-center">
          <img src={image} alt={title} className="h-[250px] w-[400px]" />
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="mt-4 mb-1.5 text-[#8a4af3] text-[15px] font-semibold">
            {date}
          </p>

          <div className="flex justify-between items-center">
            <h3 className="mb-1.5 font-semibold text-[24px] capitalize">
              {shortTitle}
            </h3>

            <MdArrowOutward size={30} />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between text-gray-600">
        <p className="font-bold mb-4">{about}</p>
        <p>{shortDetail}</p>

        {details.length > 300 && (
          <div className="font-semibold text-gray-500 text-[18px]">
            Read more...
          </div>
        )}
      </div>
    </div>
  );
};

const AllBlogsCard = ({ title, image, date, about }) => {
  const shortAbout =
    about.length > 180 ? `${about.substring(0, 180)}...` : about;
  const shortTitle = title.length > 20 ? `${title.substring(0, 20)}...` : title;

  return (
    <div className="bg-white border-[2px] border-gray-300 p-[10px] pb-[16px] rounded-[16px] min-w-[300px] max-w-[350px]">
      <div className="rounded-[12px] overflow-hidden border border-gray-400 text-center">
        <img src={image} alt={title} className="h-[170px] w-[330px]" />
      </div>

      <div className="mt-6">
        <p className="mt-4 mb-1.5 text-[#8a4af3] text-[15px] font-semibold">
          {date}
        </p>

        <div className="flex justify-between items-center">
          <h3 className="mb-1.5 font-semibold text-[24px] capitalize">
            {shortTitle}
          </h3>

          <MdArrowOutward size={30} />
        </div>

        <p className="text-gray-700">{shortAbout}</p>
      </div>
    </div>
  );
};

function Blogs() {
  return (
    <div>
      <div className="flex flex-col gap-[50px] md:items-center mb-16">
        <div>
          <h1 className="text-[40px] text-center font-bold uppercase">Blogs</h1>

          <hr className="border-t-2 border-gray-300 w-[100vw]" />
        </div>

        <div className="px-[20px] flex flex-col gap-[20px]">
          <h2 className="text-[30px] font-semibold">Latest blog</h2>

          <div className="block sm:hidden">
            <AllBlogsCard
              title={mockDataLatestBlog.title}
              image={mockDataLatestBlog.image}
              date={mockDataLatestBlog.date}
              about={mockDataLatestBlog.about}
            />
          </div>
          <div className="hidden sm:block">
            <LatestBlogCard
              title={mockDataLatestBlog.title}
              image={mockDataLatestBlog.image}
              date={mockDataLatestBlog.date}
              about={mockDataLatestBlog.about}
              details={mockDataLatestBlog.details}
            />
          </div>
        </div>

        <div className="px-[20px] flex flex-col gap-[30px] mt-[30px]">
          <h2 className="text-[30px] font-semibold">All blog posts</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            {mockDataAllBlogs.map((blog, index) => (
              <AllBlogsCard
                key={index}
                title={blog.title}
                image={blog.image}
                date={blog.date}
                about={blog.about}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
