import FolderSvg from "../../assets/Folder";
import moment from "moment";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FileItem from "../../types";

interface FolderProps {
  folder: FileItem;
}

export default function Folder({ folder }: FolderProps) {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  const showFolder = (folderId: string) => {
    appContext?.setSearchValue("");
    appContext?.setSortValue(null);
    navigate(`/${folder.name}/${folderId}`);
  };
  return (
    <section className="folder" onDoubleClick={() => showFolder(folder.id)}>
      <FolderSvg />
      <div>
        <h4>{folder.name}</h4>
        <p>{moment(folder.created_at).fromNow()}</p>
      </div>
    </section>
  );
}
