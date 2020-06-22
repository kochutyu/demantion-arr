class twoDimensionArray {
    arr = [];

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    init() {
        for (let i = 0; i < this.height; i++) {
            this.arr[i] = [];
            for (var j = 0; j < this.width; j++) {
                this.arr[i][j] = 0;
            }
        }
        return this.arr
    }

}

const newArr = new twoDimensionArray(5, 3);
console.log(newArr.init());