import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About | Theabhipatel",
  description: "This is my about page. you can know about me.",
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] flex justify-center items-center text-4xl font-bold">
        About
      </div>
      ;
    </>
  );
};

export default About;
