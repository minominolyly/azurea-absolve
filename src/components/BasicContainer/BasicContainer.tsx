import { Container, Div } from "react-minolith";
import BasicContainerProps from "./BasicContainerProps";

export default function BasicContainer(props: BasicContainerProps) {
  return (
    <Div spacing={{ padding: { x: 0.5 } }}>
      <Container style={{ backgroundColor: "var(--minolith-color-default-back)" }}>
        <Div spacing={{ padding: { x: 0.5 } }}>
          {props.children}
        </Div>
      </Container>
    </Div>
  );
}
