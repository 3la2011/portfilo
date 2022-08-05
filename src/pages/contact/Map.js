import React from "react";

export default function Map() {
  return (
    <div className="mapouter w-100 h-100">
      <div className="gmap_canvas">
        <iframe
          title="google-maps"
          width={"100%"}
          height={"100%"}
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40453.717303467565!2d8.248189680940637!3d50.676191903732864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc3f757f602251%3A0x422435029b0a620!2s35745%20Herborn!5e0!3m2!1sen!2sde!4v1658459635196!5m2!1sen!2sde"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}
