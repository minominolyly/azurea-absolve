"use client";
import usePasscode from "@/hooks/usePasscode";
import { Alert, Box, Button, Modal, TextField } from "@mui/material";

export default function PasscodeModal() {
  const { passcode, errorMessages, authorized, changePasscode, checkPasscode } =
    usePasscode();
  return (
    <Modal
      open={!authorized}
      className="modal-passcode"
      sx={{ backdropFilter: "blur(8px)" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "var(--color-white)",
          width: "100%",
          maxWidth: "20rem",
          minWidth: "20rem",
          padding: "1rem",
        }}
      >
        {errorMessages.length > 0 && (
          <Box sx={{ padding: "1rem" }}>
            <Alert severity="error">
              <ul>
                {errorMessages.map((errorMessage, index) => {
                  return <li key={index}>{errorMessage}</li>;
                })}
              </ul>
            </Alert>
          </Box>
        )}
        <Box sx={{ padding: "1rem" }}>
          <Alert severity="info">{"パスコードを入力してください"}</Alert>
        </Box>
        <Box sx={{ padding: "1rem" }}>
          <TextField
            error={errorMessages.length > 0}
            type="password"
            label="パスコード"
            variant="standard"
            value={passcode}
            onChange={(event) => changePasscode(event.currentTarget.value)}
          />
        </Box>
        <Box sx={{ padding: "1rem" }}>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "var(--color-white)",
              width: "auto",
            }}
          >
            <Button
              color="info"
              variant="contained"
              onClick={() => checkPasscode()}
            >
              {"認証"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
