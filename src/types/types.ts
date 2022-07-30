export type TodoT = {
  id: string;
  text: string;
  completed: boolean;
  color: null | string;
};

export type StatusT = 'All' | 'Active' | 'Completed';

export type ChangeTypeT = 'add' | 'remove';
