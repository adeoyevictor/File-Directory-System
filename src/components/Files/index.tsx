import React, { useContext } from "react";
import File from "./File";
import FileItem from "../../types";
import axios from "axios";
import AppContext from "../../context/AppContext";
import { detectBlobType } from "../../helpers/detectBlobType";
import { saveAs } from "file-saver";

interface FilesProps {
  files: FileItem[];
}

const Files: React.FC<FilesProps> = ({ files }) => {
  const appContext = useContext(AppContext);

  const downloadDocument = async (file: FileItem) => {
    appContext?.setFile(file)
    appContext?.setShowDownload(true);
    try {
      // using a proxy to avoid cors error
      const response = await axios.get(
        `https://corsproxy.io/?${encodeURIComponent(file.src)}`,
        {
          responseType: "blob",
          onDownloadProgress: (progressEvent) => {
            if (
              progressEvent.total !== null &&
              progressEvent.total !== undefined
            ) {
              const percentCompleted = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              );
              appContext?.setProgress(percentCompleted);
            }
          },
        }
      );

      const blobType = detectBlobType(file.src);
      const blob = new Blob([response.data], { type: blobType });
      saveAs(blob, file.name);

      setTimeout(() => {
        appContext?.setShowDownload(false);
      }, 2500);
      appContext?.setDownloadError(false);
    } catch (error) {
      appContext?.setDownloadError(true);

      setTimeout(() => {
        appContext?.setShowDownload(false);
        appContext?.setDownloadError(false);
      }, 2500);
      console.error("Error downloading document:", error);
    }
  };
  return (
    <React.Fragment>
      <h4 className="files__title">Files</h4>
      <div className="files">
        {files.map((file) => {
          return (
            <File
              key={file.id}
              file={file}
              downloadDocument={downloadDocument}
            />
          );
        })}
        {files.length === 0 && <div>No Files</div>}
      </div>
    </React.Fragment>
  );
};

export default Files;
