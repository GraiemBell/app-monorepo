import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNear = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" accessibilityRole="image" {...props}>
    <Path
      d="M10.421 4.406 8.75 6.89a.178.178 0 0 0 .264.233l1.646-1.428a.066.066 0 0 1 .111.051v4.47a.066.066 0 0 1-.044.063.067.067 0 0 1-.074-.02L5.677 4.302A.853.853 0 0 0 5.027 4h-.175A.852.852 0 0 0 4 4.852v6.296a.852.852 0 0 0 .852.852.853.853 0 0 0 .727-.406L7.25 9.11a.178.178 0 0 0-.264-.233l-1.646 1.428a.067.067 0 0 1-.072.01.067.067 0 0 1-.039-.061V5.784a.067.067 0 0 1 .118-.043l4.975 5.957a.853.853 0 0 0 .65.302h.174a.851.851 0 0 0 .853-.852V4.852a.852.852 0 0 0-1.579-.446Z"
      fill="#8C8CA1"
    />
  </Svg>
);
export default SvgNear;
