"use client";
import usePasscode from "@/hooks/usePasscode";
import {
  Button,
  Card,
  CardBody,
  Div,
  Input,
  Message,
  MessageBody,
  Modal,
  ModalContent,
} from "react-minolith";

export default function PasscodeModal() {
  const { passcode, errorMessages, authorized, changePasscode, checkPasscode } =
    usePasscode();

  return (
    <Modal
      isActive={!authorized}
      className="modal-passcode"
      style={{ backdropFilter: "blur(0.5rem)" }}
    >
      <ModalContent>
        <Card>
          <CardBody>
            {errorMessages.length > 0 && (
              <Div spacing={{ padding: 1 }}>
                <Message colorName="red">
                  <MessageBody>
                    <ul>
                      {errorMessages.map((errorMessage, index) => {
                        return <li key={index}>{errorMessage}</li>;
                      })}
                    </ul>
                  </MessageBody>
                </Message>
              </Div>
            )}
            <Div style={{ padding: "1rem" }}>
              <Message colorName="blue">
                <MessageBody>{"パスコードを入力してください"}</MessageBody>
              </Message>
            </Div>
            <Div style={{ padding: "1rem" }}>
              <Input
                type="password"
                placeholder="パスコード"
                value={passcode}
                onChange={(event) => changePasscode(event.currentTarget.value)}
              />
            </Div>
            <Div style={{ padding: "1rem" }}>
              <Div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "var(--color-white)",
                  width: "auto",
                }}
              >
                <Button colorName="blue" onClick={() => checkPasscode()}>
                  {"認証"}
                </Button>
              </Div>
            </Div>
          </CardBody>
        </Card>
      </ModalContent>
    </Modal>
  );
}
