import Presidents from "./Presidents";
import Faculty from "./Faculty";

function Leaders() {
  return (
    <div
      className="flex flex-wrap w-full bg-[#c6dcfea3] pt-[50px] sm:pt-[100px]"
      style={{
        background: "linear-gradient(to bottom, #d8e6ff99 30%, #fff 70%)",
      }}
    >
      <h2 className="box-border tracking-normal text-gray-700 outline-none block text-[38px] font-bold mx-auto mb-5 w-full text-center">
        Our Leaders
      </h2>
      <Faculty />
      <Presidents />
    </div>
  );
}

export default Leaders;
