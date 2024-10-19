const stringCalculator = require('../module/stringCalculator');

describe('First Test',()=>{

    it(('test for nothing'),()=>{
        function nothing(){
            return;
        }
        expect(nothing()).toBe();
    });
});

describe('Test for known amount of numbers', () => {

    it(('empty string should return 0'),()=>{
        const sum = stringCalculator.add("");
        expect(sum).toBe(0);
    });
    
    it(('should return 1 for "1"'),()=>{
        const sum = stringCalculator.add("1");
        expect(sum).toBe(1);
    });
    
    it('should return 6 for "1,5',()=>{
        const sum = stringCalculator.add("1,5");
        expect(sum).toBe(6);
    });

});

describe('Test for unknown amount of numbers', ()=>{

    it('should work for unknown anount of numbers',()=>{
        const sum = stringCalculator.add("1,5,1,5,2,2,3,3,7,7,11,11,13,13");
        expect(sum).toBe(1+5+1+5+2+2+3+3+7+7+11+11+13+13);
    });

});

describe('Test to handle new lines between numbers',()=>{

    it('should return 6 for 1\n2,3',()=>{
        const sum = stringCalculator.add('1\n2,3');
        expect(sum).toBe(6);
    })

})