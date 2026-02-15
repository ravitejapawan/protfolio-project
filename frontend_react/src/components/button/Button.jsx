import React from "react";
import "./Button.scss";

export default function Button({ text, className, href, newTab, onClick }) {
  if (href) {
    return (
      <div className={className}>
        <a
          className="main-button"
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          onClick={onClick}
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <button type="button" className="main-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
