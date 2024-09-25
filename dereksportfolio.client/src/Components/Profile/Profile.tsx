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
    <div className="flex px-4 flex-col lg:flex-row text-white">
      <div className="lg:w-1/3 mb-8 lg:mb-0 flex items-center justify-center">
        <div className="overflow-hidden rounded-sm">
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 relative">
            <img
              src={image}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover scale-[1.5]"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 lg:pl-8 flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4 italic text-wrap text-sm sm:text-base">{description1}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {Object.entries(formattedContent).map(([key, value]) => (
            <div key={key} className="flex items-center text-sm sm:text-base">
              <span className="text-green-500 mr-2">›</span>
              <span className="font-semibold mr-2">{key}:</span>
              {key === "Website" ? (
                <a
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-green-400 hover:text-pink-600 break-all"
                >
                  {value}
                </a>
              ) : (
                <span className="break-all">{value}</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-wrap text-sm sm:text-base">{description2}</p>
      </div>
    </div>
  );
};

export default Profile;