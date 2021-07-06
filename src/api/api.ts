import { allFolders } from "./mock";
import { Folder, FolderPopulated } from "./types";
import { wait } from "./wait";

class Api {
  // Получить папку с ёё детьми по id
  async getPopulatedFolder(id: number): Promise<FolderPopulated | undefined> {
    wait(700);

    const folder = allFolders.find((f) => f.id === id);
    if (!folder) {
      return undefined;
    }

    const children = allFolders.filter((f) => f.parentId === id);
    return { ...folder, children };
  }

  // Получить список корневых папок
  async getRoot(): Promise<Folder[]> {
    wait(1200);

    return allFolders.filter((f) => f.parentId === null);
  }
}

export const api = new Api();
