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

    it(('should return 2 for "2,"'),()=>{
        const sum = stringCalculator.add("2,");
        expect(sum).toBe(2);
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

describe('Test to handle supported delimeter',()=>{

    it('should return 3 for //;\n1;2',()=>{
        const sum = stringCalculator.add('//;\n1;2');
        expect(sum).toBe(3);
    })

    it('should work for delimeters of any length',()=>{
        const sum = stringCalculator.add('//:;:\n1:;:2:;:3:;:4:;:');
        expect(sum).toBe(1+2+3+4);
    })
})

describe('Test to handle negative numbers', ()=>{
    it(('should throw exception for "-2,"'),()=>{
        expect(() => stringCalculator.add("-2")).
        toThrow("negative numbers not allowed: -2");
    });
    
    it('should throw exception for "1,-5',()=>{
        expect(() => stringCalculator.add("1,-5")).
        toThrow("negative numbers not allowed: -5");
    });

    it('should throw exception for //;\n1;-2',()=>{
        expect(()=>stringCalculator.add('//;\n1;-2')).
        toThrow("negative numbers not allowed: -2");
    })

    it('should throw exception work //:;:\n1:;:-2:;:-3:;:4:;: to handle delimeters of any length',()=>{
        expect(()=>stringCalculator.add('//:;:\n1:;:-2:;:-3:;:4:;:')).
        toThrow("negative numbers not allowed: -2, -3");
    })
})

describe('Test to ignore numbers greater than 1000',()=>{
    it('should return 2 for 2,1001',()=>{
        const sum = stringCalculator.add('2,1001');
        expect(sum).toBe(2);
    })

    it('should return 1002 for 2,1000',()=>{
        const sum = stringCalculator.add('2,1000');
        expect(sum).toBe(1002);
    })
});

describe('Test to handle delimeters of any length',()=>{    
    it('should return 6 for //[***]\n1***2***3',()=>{
        const sum = stringCalculator.add('//[***]\n1***2***3');
        expect(sum).toBe(6);
    })
    it('should return 6 for //[:;:;:]\n1:;::;2:;:;:3',()=>{
        const sum = stringCalculator.add('//[:;:]\n1:;:2:;:3');
        expect(sum).toBe(6);
    })
});

describe('Test to handle multiple delimeters',()=>{
    it('should return 6 for //[***][::]\n1***2::3',()=>{
        const sum = stringCalculator.add('//[***][::]\n1***2::3');
        expect(sum).toBe(6);
    })
    it('should return 6 for //[***][::][;]\n1***2::3;4',()=>{
        const sum = stringCalculator.add('//[***][::][;]\n1***2::3;4');
        expect(sum).toBe(10);
    })
});