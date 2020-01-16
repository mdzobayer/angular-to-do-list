
export class Task {
    status:boolean; editable:boolean; description:string;
    constructor(status:boolean, editable:boolean, description:string) {
      this.status = status;
      this.editable = editable;
      this.description = description;
    }
  }