import React, { createContext, useState, useEffect, ReactNode } from "react";
import FileItem from "../types";

type AppContextType = {
  data: FileItem[];
  setData: React.Dispatch<React.SetStateAction<FileItem[]>>;
  sortValue: string | null;
  file: FileItem | null;
  setSortValue: React.Dispatch<React.SetStateAction<string | null>>;
  setFile: React.Dispatch<React.SetStateAction<FileItem | null>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  showDownload: boolean;
  setShowDownload: React.Dispatch<React.SetStateAction<boolean>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  downloadError: boolean;
  setDownloadError: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = (
  props
) => {
  const [data, setData] = useState<FileItem[]>([]);
  const [sortValue, setSortValue] = useState<string | null>(null);
  const [file, setFile] = useState<FileItem | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showDownload, setShowDownload] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [downloadError, setDownloadError] = useState<boolean>(false);

  useEffect(() => {
    if (sortValue) {
      if (sortValue === "name") {
        setData((prevData) =>
          [...prevData].sort((a, b) => {
            const nameA = a.name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0; // Names are equal
          })
        );
      } else if (sortValue === "time") {
        setData((prevData) =>
          [...prevData].sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
        );
      }
    }
  }, [sortValue]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        sortValue,
        setSortValue,
        searchValue,
        setSearchValue,
        showDownload,
        setShowDownload,
        progress,
        setProgress,
        downloadError,
        setDownloadError,
        file,
        setFile,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
