import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 1281 199" {...props}>
      <image  href = {isDark ? '/image/pixel/LogoDark.png' : '/image/pixel/LogoWhite.png'}  />
      
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
