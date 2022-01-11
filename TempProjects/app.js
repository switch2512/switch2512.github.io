let test = {
    field: [
            ['░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░'],
            ['*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*'],
            ['░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░'],
            ['*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*'],
            ['░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░'],
            ['*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*'],
            ['░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░'],
            ['*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*'],
            ['░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░'],
            ['*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*','░','*']
        ],
    printField: function() {
        for (let x=0; x <10; x++) {
            console.log(test.field[x].join(""));
        }
    },

    chance: function() {
        let result = Math.floor(Math.random()*2);
        if (result === 0) {
            return 'left'
        } else {
            return 'right'
        }
        
        
    },

    run: function(num) {
        runTimes = num;
        while (runTimes != 0) {
            this.field[0][10] = 0;
            let y = 0;
            let x = 10;
            while (test.field[y+1][x-1] === '░' || test.field[y+1][x+1] === '░') {
                if (test.field[y+1][x-1] === '░' && test.field[y+1][x+1] === '0') {
                    test.field[y][x] = '░';
                    x -= 1;
                    y += 1;
                    test.field[y][x] = 0
                    test.printField()
                    console.log(' ')
                    if (y === 9) {
                        break;
                    } else {
                        continue;
                    }
                } else if (test.field[y+1][x-1] === '0' && test.field[y+1][x+1] === '░') {
                    test.field[y][x] = '░';
                    x += 1;
                    y += 1;
                    test.field[y][x] = 0;
                    console.log(' ')
                    test.printField()
                    if (y === 9) {
                        break;
                    } else {
                        continue;
                    }
                } else {
                    let result = this.chance();
                    if (result === 'left') {
                        test.field[y][x] = '░';
                        x -= 1;
                        y += 1;
                        test.field[y][x] = 0;
                        console.log(' ')
                        test.printField()
                        if (y === 9) {
                            break;
                        } else {
                            continue;
                        }
                    } else {
                        test.field[y][x] = '░';
                        x += 1;
                        y += 1;
                        test.field[y][x] = 0;
                        console.log(' ')
                        test.printField()
                        if (y === 9) {
                            break;
                        } else {
                            continue;
                        }
                    }
                }
            }
            console.log(' ')
            test.printField()
            runTimes -= 1;
            }

        }
        
    }


test.run(10)