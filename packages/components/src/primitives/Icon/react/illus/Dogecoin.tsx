import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDogecoin = (props: SvgProps) => (
  <Svg viewBox="0 0 16 16" fill="none" accessibilityRole="image" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.624 7.305h2.157v1.143H6.624v2.409h1.36c.539 0 .98-.072 1.322-.218.344-.146.613-.348.808-.605a2.2 2.2 0 0 0 .398-.908A5.7 5.7 0 0 0 10.617 8a5.7 5.7 0 0 0-.105-1.126 2.199 2.199 0 0 0-.398-.907 1.935 1.935 0 0 0-.808-.605c-.342-.147-.783-.219-1.321-.219H6.623v2.163-.001ZM5.241 8.448H4.5V7.305h.741V4h3.274c.605 0 1.129.105 1.571.314.443.209.804.495 1.085.857.28.362.488.786.625 1.271C11.931 6.928 12 7.447 12 8a5.734 5.734 0 0 1-.205 1.557 3.67 3.67 0 0 1-.625 1.272c-.28.362-.641.648-1.084.857-.442.21-.966.314-1.57.314H5.24V8.448Z"
      fill="#8C8CA1"
    />
  </Svg>
);
export default SvgDogecoin;
