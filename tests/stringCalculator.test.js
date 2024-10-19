const stringCalculator = require('../module/stringCalculator');

test(('test for nothing'),()=>{
    function nothing(){
        return;
    }
    expect(nothing()).toBe();
});

test(('empty string should return 0'),()=>{
    const sum = stringCalculator.add("")
    expect(sum).toBe(0);
});

