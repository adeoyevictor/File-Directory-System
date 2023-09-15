import { useContext } from "react";
import AppContext from "../../context/AppContext";
import FolderSvg from "../../assets/Folder";


const DownloadComponent: React.FC = () => {
  const appContext = useContext(AppContext);
  if (!appContext?.showDownload || !appContext?.file) {
    return null;
  }

  return (
    <div className="download__component">
      <FolderSvg />
      <div>
        <h4>{appContext?.file.name}</h4>
        {!appContext?.downloadError && <p>{appContext?.progress}% done</p>}
        {appContext?.downloadError && (
          <p style={{ color: "#FF6347" }}>Download Error</p>
        )}
      </div>
    </div>
  );
};

export default DownloadComponent;
