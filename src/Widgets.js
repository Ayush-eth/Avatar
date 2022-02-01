import React from 'react';
import "./Widgets";

function Widgets() {
  return (
  <div className='widgets'>
      <iframe
        src="https://www.youtube.com/embed/B-kxUMHBxNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen" width="340" height="100%" style={{ border: "none", overflow: "hidden"}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow='encrypted-media'>

        </iframe>
  </div>);
}

export default Widgets;
