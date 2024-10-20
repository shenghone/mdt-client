import React from "react";
import EditingBoxWrapper from "./Style/EditingBoxWrapper";

export default ({ children, expand, ...rest }) => {
  return <EditingBoxWrapper expand={expand}>{children}</EditingBoxWrapper>;
};
