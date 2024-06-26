"use client";
import localStorageUtility from "@/utilities/localStorageUtility";
import { useState } from "react";

const PASSCODE = "a6s01ve";
const KEY = "azurea-absolve.passcode";
export default function usePasscode() {
  const savedPasscode = localStorageUtility.getItem<string>(KEY);
  const [passcode, setPasscode] = useState<string>(savedPasscode ? savedPasscode : "");
  const [authorized, setAuthorized] = useState<boolean>(savedPasscode === PASSCODE);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const changePasscode = (value: string) => {
    if (errorMessages.length > 0) {
      setErrorMessages([]);
    }
    setPasscode(value);
  };

  const checkPasscode = () => {
    if (passcode !== PASSCODE) {
      setErrorMessages(["パスコードが違います"]);
      return false;
    }
    setErrorMessages([]);
    setAuthorized(true);
    localStorageUtility.setItem(KEY, passcode);
    return true;
  };

  return {
    passcode,
    authorized,
    errorMessages,
    changePasscode,
    checkPasscode,
  };
}
