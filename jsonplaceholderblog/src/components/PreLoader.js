import React, { useEffect } from "react";
import "../css/preloader.css";
function PreLoader() {
  useEffect(() => {
    /* global $ */
    $(window).load(function () {
      $(".preloader").fadeOut(1000); // set duration in brackets
    });
  });
  return (
    <div className="preloader">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
}

export default PreLoader;
