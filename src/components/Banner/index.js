import React from "react";

const Banner = () => (
  <>
    {/* <!-- BANNER TOP --> */}
    <div class="banner w-100 --bg-banner">
      <div class="banner --top --desktop"></div>
      <div class="banner --top --tablet"></div>
      <div class="banner --top --mobile"></div>
    </div>
    {/* <!-- BANNER STICKY --> */}
    <div class="banner w-100 --bg-banner">
      <div class="banner --sticky --mobile"></div>
    </div>
  </>
);

export default Banner;
