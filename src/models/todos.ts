class TodoClass {
    id: string;
    text: string;

    constructor(textInfo: string) {
        this.text = textInfo;
        this.id = new Date().toISOString();
    }
}

export default TodoClass;