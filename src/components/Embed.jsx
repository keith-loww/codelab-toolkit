import React from "react";

const Embed = ({ src }) => {
    return (
        <div className="flex h-[500px] rounded border">
            <iframe src={src} className="h-full w-full" frameborder="0" />
        </div>
    );
};

export default Embed;
