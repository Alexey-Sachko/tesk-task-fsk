import { Folder } from "./types";

const Folder1: Folder = {
  id: 1,
  name: "Folder1",
  parentId: null,
  total: 2,
};

const Folder2: Folder = {
  id: 2,
  name: "Folder2",
  parentId: null,
  total: 0,
};

const Folder3: Folder = {
  id: 3,
  name: "Folder3",
  parentId: null,
  total: 1,
};

const Folder4: Folder = {
  id: 4,
  name: "Folder4",
  parentId: 1,
  total: 0,
};

const Folder5: Folder = {
  id: 5,
  name: "Folder5",
  parentId: 1,
  total: 1,
};

const Folder6: Folder = {
  id: 6,
  name: "Folder6",
  parentId: null,
  total: 0,
};

const Folder7: Folder = {
  id: 7,
  name: "Folder7",
  parentId: 5,
  total: 0,
};

export const allFolders: Folder[] = [
  Folder1,
  Folder2,
  Folder3,
  Folder4,
  Folder5,
  Folder6,
  Folder7,
];
