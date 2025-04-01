import {Container, Header} from "@components";
import {Colors} from "@constants";

function HomeScreen(): React.ReactElement {
  return (
    <Container flex={1} backgroundColor={Colors.lightGrey}>
      <Header hideBackButton title="HOME" titleAlign="left" />
    </Container>
  );
}

export default HomeScreen;
