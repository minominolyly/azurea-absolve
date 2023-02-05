import useAddToHomescreenPrompt from "@/hooks/useAddToHomescreenPrompt";
import { Button } from "@mui/material";

export default function PwaInstallButton() {
  const [promptable, promptToInstall, isInstalled] = useAddToHomescreenPrompt();

  return promptable && !isInstalled ? (
    <Button variant="contained" color="info" onClick={promptToInstall}>
      {"インストール"}
    </Button>
  ) : null;
}
