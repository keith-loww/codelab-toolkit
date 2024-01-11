import React from "react";

const Embed = ({ src }) => {
  return (
    <div className="flex rounded border h-[500px]">
      <iframe
        src={src}
        className="w-full h-full"
        frameborder="0"
        />
    </div>
  );
};

export default Embed;
