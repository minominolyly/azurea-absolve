"use client";
import { ChangeCircle, ContentCopy } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";

async function copyToClipboard(text: string) {
  try {
    await global.navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error);
  }
}
type DisplayMode = "full" | "split";
export default function AzureaCoordinate(props: AzureaCoordinateProps) {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("full");
  const coordinateStr = `[${props.area},(${props.x},${props.y}),${
    props.channel ? props.channel : "1CH"
  }]`;

  const onChangeDisplayModeHandleClick = () => {
    if (displayMode === "full") {
      setDisplayMode("split");
    } else {
      setDisplayMode("full");
    }
  };

  const onAreaCopyHandleClick = () => {
    copyToClipboard(props.area);
  };

  const onXCopyHandleClick = () => {
    copyToClipboard(`${props.x}`);
  };

  const onYCopyHandleClick = () => {
    copyToClipboard(`${props.y}`);
  };

  const onFullCopyHandleClick = () => {
    copyToClipboard(coordinateStr);
  };

  const note = props.note && (
    <Box
      sx={{
        color: "var(--minolith-color-default-fore)",
        marginTop: 0.5,
        marginBottom: 0.5,
        marginLeft: 1,
        marginRight: 1,
      }}
    >
      <Typography>{props.note}</Typography>
    </Box>
  );

  return (
    <>
      {displayMode === "full" ? (
        <Box
          sx={{
            borderRadius: "0.25rem",
            borderWidth: "0.025rem",
            borderColor: "var(--minolith-color-default-border)",
            borderStyle: "solid",
            m: 1,
          }}
        >
          <FormControl
            sx={{
              p: 1,
              width: "16rem",
            }}
            variant="outlined"
          >
            <OutlinedInput
              type={"text"}
              value={coordinateStr}
              sx={{
                color: "var(--minolith-color-default-fore)",
                borderColor: "var(--minolith-color-default-border)",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label=""
                    sx={{ color: "var(--minolith-color-default-fore)" }}
                    onClick={onFullCopyHandleClick}
                    onMouseDown={onFullCopyHandleClick}
                    edge="end"
                  >
                    {<ContentCopy />}
                  </IconButton>
                </InputAdornment>
              }
              readOnly={true}
            />
          </FormControl>
          <FormControl
            sx={{
              p: 0.5,
              width: "2.5rem",
            }}
            variant="outlined"
          >
            <IconButton
              aria-label=""
              sx={{ color: "var(--minolith-color-default-fore)" }}
              onClick={onChangeDisplayModeHandleClick}
              onMouseDown={onChangeDisplayModeHandleClick}
            >
              {<ChangeCircle />}
            </IconButton>
          </FormControl>
          {note}
        </Box>
      ) : (
        <Box
          sx={{
            borderRadius: "0.25rem",
            borderWidth: "0.025rem",
            borderColor: "var(--minolith-color-default-fore)",
            borderStyle: "solid",
            m: 1,
          }}
        >
          <div>
            <FormControl sx={{ m: 0.5, minWidth: "16rem" }} variant="outlined">
              <OutlinedInput
                type={"text"}
                value={props.area}
                sx={{
                  color: "var(--minolith-color-default-fore)",
                  borderColor: "var(--minolith-color-default-fore)",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label=""
                      sx={{ color: "var(--minolith-color-default-fore)" }}
                      onClick={onAreaCopyHandleClick}
                      onMouseDown={onAreaCopyHandleClick}
                      edge="end"
                    >
                      {<ContentCopy />}
                    </IconButton>
                  </InputAdornment>
                }
                readOnly={true}
              />
            </FormControl>
            <FormControl sx={{ m: 0.5, width: "2.5rem" }} variant="outlined">
              <IconButton
                aria-label=""
                sx={{ color: "var(--minolith-color-default-fore)" }}
                onClick={onChangeDisplayModeHandleClick}
                onMouseDown={onChangeDisplayModeHandleClick}
              >
                {<ChangeCircle />}
              </IconButton>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 0.5, width: "7.5rem" }} variant="outlined">
              <OutlinedInput
                type={"text"}
                value={props.x}
                sx={{ color: "var(--minolith-color-default-fore)" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label=""
                      sx={{ color: "var(--minolith-color-default-fore)" }}
                      onClick={onXCopyHandleClick}
                      onMouseDown={onXCopyHandleClick}
                      edge="end"
                    >
                      {<ContentCopy />}
                    </IconButton>
                  </InputAdornment>
                }
                readOnly={true}
              />
            </FormControl>
            <FormControl sx={{ m: 0.5, width: "7.5rem" }} variant="outlined">
              <OutlinedInput
                type={"text"}
                value={props.y}
                sx={{ color: "var(--minolith-color-default-fore)" }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label=""
                      sx={{ color: "var(--minolith-color-default-fore)" }}
                      onClick={onYCopyHandleClick}
                      onMouseDown={onYCopyHandleClick}
                      edge="end"
                    >
                      {<ContentCopy />}
                    </IconButton>
                  </InputAdornment>
                }
                readOnly={true}
              />
            </FormControl>
          </div>
          {note}
        </Box>
      )}
    </>
  );
}

export interface AzureaCoordinateProps {
  area: string;
  x: number;
  y: number;
  channel?: string;
  note?: string;
}
