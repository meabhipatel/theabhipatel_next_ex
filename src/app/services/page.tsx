import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Services | Theabhipatel",
  description: "This is my service page.",
};

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] flex justify-center items-center text-4xl font-bold">
        Services
      </div>
    </>
  );
};

export default Services;
