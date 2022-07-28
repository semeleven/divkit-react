import React from "react";

import { render } from "./render";

  document.getElementsByTagName("pre")[0].textContent = JSON.stringify(
    render(
<React.StrictMode>
  <div-text>С НГasdfasdfsdf!</div-text>
</React.StrictMode>
    )
  , null, 4);

