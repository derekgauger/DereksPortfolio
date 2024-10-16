import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { MdOutlineLocationOn } from "react-icons/md";
import ContactInfoItem from "../../Components/ContactInfoItem/ContactInfoItem";
import Footer from "../../Components/Footer/Footer";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import EmailForm from "../../EmailForm/EmailForm";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto">
      <PageHeader
        title="Contact"
        description="Welcome to my contact page! Please send me an email. I setup my own email service for this website and would love for it to be used. Include any feedback or questions you have about me or the website."
      />
      <div className="flex mt-4 sm:mt-8 flex-col md:flex-row px-4">
        <div className="flex-1 mb-4 md:mb-0">
          <ContactInfoItem
            label={"Current Working Location"}
            value={"Milwaukee Area in Wisconsin"}
            icon={<MdOutlineLocationOn />}
          />
          <ContactInfoItem
            label={"Email Me"}
            value={"gaugerderek@gmail.com"}
            icon={<AiOutlineMail />}
          />
        </div>
        <div className="flex-1">
          <ContactInfoItem
            label={"Call Me"}
            value={"(262) 581-7793"}
            icon={<FiPhone />}
          />
          <ContactInfoItem
            label={"Message me on Discord"}
            value={"dirkyg"}
            icon={<TbBrandDiscord />}
          />
        </div>
      </div>
      <div className="mt-4 sm:mt-8 px-4">
        <EmailForm/>
      </div>
      <Footer
        title={"Thank you for visiting!"}
        content={
          <p className="text-sm sm:text-base">
            Well, this is the last page of the website. I appreciate the visit.
            You can now go back to the home page and play with the shapes.
          </p>
        }
      />
    </div>
  );
};

export default Contact;