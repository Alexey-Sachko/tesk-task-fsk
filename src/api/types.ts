export interface Folder {
  id: number;
  parentId: number | null;
  name: string;
  total: number;
}

export interface FolderPopulated extends Folder {
  children: Folder[];
}
