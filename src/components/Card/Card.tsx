import { Pressable, PressableProps } from "react-native";
import styles from "./styles";

interface CardProps extends PressableProps {
}

const Card: React.FC<CardProps> = ({ children, ...props }) => (
  <Pressable
    {...props}
    style={(state) =>
      [styles.container, typeof props.style === 'function' ? props.style(state) : props.style]
    }
  >
    {children}
  </Pressable>
);

export default Card;

