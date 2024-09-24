import React from "react";

interface ProfileProps {
  image: string;
  title: string;
  description1: string;
  description2: string;
  content: {
    [key: string]: string;
  };
}

const Profile: React.FC<ProfileProps> = ({
  image,
  title,
  description1,
  description2,
  content,
}) => {
  const formattedContent = Object.entries(content).reduce((acc, [key, value]) => {
    const alternateDisplayName = key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    acc[alternateDisplayName] = value;
    return acc;
  }, {} as { [key: string]: string });
  return (
    <div className={`flex flex-col md:flex-row text-white`}>
      <div className="md:w-1/3 mb-8 md:mb-0 flex items-center justify-center">
        <div className="overflow-hidden rounded-sm">
          <div className="w-72 h-72 relative">
            <img
              src={image}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover scale-[1.5]"
            />
          </div>
        </div>
      </div>
      <div className="md:w-2/4 md:pl-8 flex-1">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4 italic text-wrap">{description1}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(formattedContent).map(([key, value]) => (
            <div key={key} className="flex items-center">
              <span className="text-green-500 mr-2">›</span>
              <span className="font-semibold mr-2">{key}:</span>
              {key === "Website" ? (
                <a
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-green-400 hover:text-pink-600"
                >
                  {value}
                </a>
              ) : (
                <span>{value}</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-wrap">{description2}</p>
      </div>
    </div>
  );
};

export default Profile;
