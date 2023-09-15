export default interface FileItem {
  type: string;
  id: string;
  name: string;
  src: string;
  favourite: boolean;
  created_at: string;
  contents: FileItem[]
}