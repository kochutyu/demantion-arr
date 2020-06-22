class twoDimensionArray {
    arr = [];
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    init() {

        for (let i = 0; i < this.width; i++) {
            this.arr[i] = [];
            for (var j = 0; j < this.height; j++) {
                this.arr[i][j] = 0;
            }
        }
        return this.arr

    }
}

const newArr = new twoDimensionArray(10, 10);
console.log(newArr.init());