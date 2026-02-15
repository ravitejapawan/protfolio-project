import React from "react";
import "./Loading.scss";

const Loading = ({ fullScreen = false }) => {
  return (
    <div
      className={`centerContent ${fullScreen ? "centerContent--fullscreen" : ""}`}
      role="status"
      aria-label="Loading"
    >
      <div className="fingerprint-loader-wrap">
        <svg
          className="fingerprint-loader"
          viewBox="0 0 220 220"
          aria-hidden="true"
          focusable="false"
        >
          <circle className="fp-ring fp-ring--outer" cx="110" cy="110" r="82" />
          <circle className="fp-ring fp-ring--mid-1" cx="110" cy="110" r="56" />
          <circle className="fp-ring fp-ring--mid-2" cx="110" cy="110" r="36" />
          <circle className="fp-ring fp-ring--inner" cx="110" cy="110" r="20" />
        </svg>

        <div className="loader-brand" aria-hidden="true">
          <span className="loader-brand__bracket">&lt;</span>
          <span className="loader-brand__name">Bala Sai</span>
          <span className="loader-brand__bracket">/&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
