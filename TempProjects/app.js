let test = {
    field: [
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░],
            [░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░,░]
        ],
    printField: function() {
        for (let x=0; x <10; x++) {
            console.log(test.field[x].join(""));
        }
    }
}

test.printField()
