import { useContext, useEffect, useMemo } from "react";
import { useLocation, useMatch } from "react-router-dom";
import Folders from "../Folders";
import Files from "../Files";
import AppContext from "../../context/AppContext";
import { getAll, getFolderContent } from "../../services/folders_files";
import FileItem from "../../types";

const MainComponent: React.FC = () => {
  const appContext = useContext(AppContext);
  const location = useLocation();
  const match = useMatch("/:folderName/:folderId");

  const memoizedLocationPathname = useMemo(
    () => location.pathname,
    [location.pathname]
  );
  const memoizedMatch = useMemo(() => match, [match]);

  useEffect(() => {
    try {
      if (memoizedLocationPathname === "/") {
        getAll().then((responseData) => appContext?.setData(responseData));
      } else if (memoizedMatch  && memoizedMatch.params.folderId) {
        getFolderContent(memoizedMatch.params.folderId).then((responseData) =>
          appContext?.setData(responseData)
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [memoizedLocationPathname, memoizedMatch]);

  


  const dataToShow = appContext?.searchValue
    ? appContext?.data.filter((content: FileItem) =>
        content.name.toLowerCase().includes(appContext?.searchValue.toLowerCase())
      )
    : appContext?.data || []

  return (
    <div>
      <Folders
        folders={dataToShow.filter(
          (content: FileItem) => content.type === "folder"
        )}
        name={location.pathname === "/" ? "Folders" : match?.params.folderName}
      />
      <Files
        files={dataToShow.filter(
          (content: FileItem) => content.type === "file"
        )}
      />
    </div>
  );
};

export default MainComponent;
