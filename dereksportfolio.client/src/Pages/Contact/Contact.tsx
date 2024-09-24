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
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <div className="flex mt-8 flex-col md:flex-row">
        <div className="flex-1">
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
      <div className="mt-4">
        <EmailForm/>
      </div>
      <Footer
        title={"Thank you for checking out my contact oage!"}
        content={
          <p>
            Well, this is the last page of the website. I appreciate the visit.
            You can now go back to the home page and play with the shapes.
          </p>
        }
      />
    </div>
  );
};

export default Contact;
