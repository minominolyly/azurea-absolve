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
        color: "var(--color-gray-10)",
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
            borderColor: "var(--color-gray-50)",
            borderStyle: "solid",
            m: 1,
          }}
        >
          <FormControl sx={{ m: 1, width: "16rem" }} variant="outlined">
            <OutlinedInput
              type={"text"}
              value={coordinateStr}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label=""
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
          <FormControl sx={{ m: 0.5, width: "2.5rem" }} variant="outlined">
            <IconButton
              aria-label=""
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
            borderColor: "var(--color-gray-50)",
            borderStyle: "solid",
            m: 1,
          }}
        >
          <div>
            <FormControl sx={{ m: 0.5, minWidth: "16rem" }} variant="outlined">
              <OutlinedInput
                type={"text"}
                value={props.area}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label=""
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
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label=""
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
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label=""
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
