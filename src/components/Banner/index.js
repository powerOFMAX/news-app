import React from 'react';

const Banner = () => (
  <>
    {/* <!-- BANNER TOP --> */}
    <div className="banner w-100 --bg-banner">
      <div className="banner --top --desktop" />
      <div className="banner --top --tablet" />
      <div className="banner --top --mobile" />
    </div>
    {/* <!-- BANNER STICKY --> */}
    <div className="banner w-100 --bg-banner">
      <div className="banner --sticky --mobile" />
    </div>
  </>
);

export default Banner;
