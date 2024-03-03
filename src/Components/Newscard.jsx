import React from "react";

import PropTypes from "prop-types";

const Newscard = (props) => {
  const { imageUrl, alt, description, title, channel, published, urlNews } =props;

  return (
    <>
      <div className="flex m-5 justify-between bg-white flex-col min-h-2/3 rounded border border-sky-500 sm:w-2/5 lg:w-3/12 md:w-2/5">
        <div className=" p-2 h-2/5">
          <img
           className="rounded object-cover w-full h-full"
            src={imageUrl}
            alt={alt}
          />
        </div>
        <div className="px-2 "><h5 className="p-1 font-bold size overflow-hidden text-xl">
            {title}
           </h5>
           </div> 
           <div className="p-2 h-1/5 overflow-hidden ">
          <p >
           {description}
          </p>
          </div>
          <div>
          <p className="font-bold text-sm px-2">channel:{channel}</p>
          <p  className="font-bold text-sm px-2">Published:{published}</p>
          </div>
        <div className="p-5">
          <button
              onClick={() => window.open(urlNews, '_blank')}

            className="bg-blue-800 p-2 rounded text-white text-sm font-bold"
          >
            Read More →

          </button>
        </div>
      </div>
    </>
  );
};

Newscard.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  published: PropTypes.string,
  urlNews: PropTypes.string,
};
export default Newscard;
