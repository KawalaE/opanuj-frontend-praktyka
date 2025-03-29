type SortableItem = {
  name: string;
  created: string;
};

export const sortedData = <T extends SortableItem>(
  sortChoice: string,
  data: T[]
): T[] => {
  return [...data].sort((a, b) => {
    if (sortChoice === 'name') {
      console.log('sort by name');
      return a.name.localeCompare(b.name);
    }

    if (sortChoice === 'created') {
      console.log('sort by created');
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });
};
