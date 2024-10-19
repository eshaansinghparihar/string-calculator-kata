const stringCalculator = require('../module/stringCalculator');

test(('test for nothing'),()=>{
    function nothing(){
        return;
    }
    expect(nothing()).toBe();
});

test(('empty string should return 0'),()=>{
    const sum = stringCalculator.add("");
    expect(sum).toBe(0);
});

test(('should return 1 for "1"'),()=>{
    const sum = stringCalculator.add("1");
    expect(sum).toBe(1);
});

test('should return 6 for "1,5',()=>{
    const sum = stringCalculator.add("1,5");
    expect(sum).toBe(6);
});