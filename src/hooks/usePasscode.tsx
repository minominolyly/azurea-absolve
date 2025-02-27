"use client";
import localStorageUtility from "@/utilities/localStorageUtility";
import { useCallback, useEffect, useState } from "react";

const PASSCODE = "a6s01ve";
const KEY = "passcode";

export default function usePasscode() {
  const [passcode, setPasscode] = useState<string>("");

  const [authorized, setAuthorized] = useState<boolean>(true);

  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const changePasscode = useCallback((value: string) => {
    if (errorMessages.length > 0) {
      setErrorMessages([]);
    }
    setPasscode(value);
  }, [errorMessages.length]);

  const checkPasscode = useCallback(() => {
    if (passcode === "") {
      setErrorMessages([]);
      setAuthorized(false);
      return;
    }

    if (passcode !== PASSCODE) {
      setErrorMessages(["パスコードが違います"]);
      setAuthorized(false);
      return;
    }

    setErrorMessages([]);
    setAuthorized(true);
    localStorageUtility.setData(KEY, passcode);
  }, [passcode]);

  useEffect(() => {
    const savedPasscode = localStorageUtility.getData<string>(KEY);
    if (savedPasscode) {
      setPasscode(savedPasscode);
      return;
    }
    setAuthorized(false);
  }, []);

  return {
    passcode,
    authorized,
    errorMessages,
    changePasscode,
    checkPasscode,
  };
}
