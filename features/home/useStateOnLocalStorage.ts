import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStateOnLocalStorage(
  key: string,
  initialValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState<string>(initialValue);

  useEffect(() => {
    const fetchInitialValue = async () => {
      try {
        const storedValue = await AsyncStorage.getItem(key);
        if (storedValue !== null) {
          setState(storedValue);
        }
      } catch (error) {
        console.error("Failed to fetch from AsyncStorage:", error);
      }
    };

    fetchInitialValue();
  }, [key]);

  useEffect(() => {
    const storeValue = async () => {
      try {
        await AsyncStorage.setItem(key, state);
      } catch (error) {
        console.error("Failed to store in AsyncStorage:", error);
      }
    };

    storeValue();
  }, [key, state]);

  return [state, setState];
}
