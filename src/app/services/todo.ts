export class ToDo {
    id: number;
    title: string;
    description: string;
    isComplete: boolean;
  
    constructor(id: number, title: string, description: string, isComplete: boolean) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.isComplete = isComplete;
    }
  }
  