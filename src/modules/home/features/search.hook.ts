import { useCallback, useEffect, useState } from "react";

const useSearch = () => {
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [keySearch, setKeySearch] = useState<string>("");
  const handleSetLoading = useCallback(() => {
    setIsloading(!isLoading);
  }, [isLoading]);
  const keyListener = (key: KeyboardEvent) => {
    if (key.key === "Enter") {
      handleSetLoading();
      // setIsloading(!isLoading);
    }
    document.getElementById("search-input")?.focus();
  };
  useEffect(() => {
    document.addEventListener("keydown", keyListener);
    return () => {
      document.removeEventListener("keydown", keyListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSetLoading]);
  return {
    isLoading,
    setIsloading,
    keySearch,
    setKeySearch,
  };
};

export default useSearch;
