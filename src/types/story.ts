export interface Choice {
  text: string;
  nextNode: string;
  educational?: boolean;
  effect?: string;
}

export interface StoryNode {
  text: string;
  image: string;
  choices: Choice[];
  header?: string;
  animation?: string;
}