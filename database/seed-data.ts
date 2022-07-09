interface ISeedData {
  entries: ISeedEntry[];
}

interface ISeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: ISeedData = {
  entries: [
    {
      description: 'Pending - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In Progress  - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'in-progress',
      createdAt: Date.now() - 2900000,
    },
    {
      description: 'Finished - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'finished',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Pending - Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'pending',
      createdAt: Date.now() - 100000,
    },
  ],
};
