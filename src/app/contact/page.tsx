import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact | Theabhipatel",
  description: "This is my contact page.",
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[80vh] flex justify-center items-center text-4xl font-bold">
        Contact
      </div>
      ;
    </>
  );
};

export default Contact;
