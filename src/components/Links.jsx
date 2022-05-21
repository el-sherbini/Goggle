import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All", index: 1 },
  { url: "/news", text: "📰 News", index: 2 },
  { url: "/images", text: "📸 Images", index: 3 },
  { url: "/videos", text: "📺 Videos", index: 4 },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text, index }) => (
      <NavLink
        className="m-2 mb-0"
        key={index}
        to={url}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {text}
      </NavLink>
    ))}
  </div>
);
