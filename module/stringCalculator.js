function add(numbers){
    if(typeof(numbers) === 'string')
    {
        if(numbers === '') return 0;
    
        let nums = numbers, delimiters = [], delimiter, negatives = [];
        if(numbers.startsWith('//')){
            delimiter = nums.substring(2,nums.indexOf('\n'));
            
                if(delimiter.startsWith('[') && delimiter.endsWith(']'))
                {
                    let match;
                    let pattern = /\[([^\]]+)\]/g;
                        while ((match = pattern.exec(delimiter)) !== null)
                            delimiters.push(match[1]);
                    delimiter = '';
                }
            nums = numbers.slice(numbers.indexOf('\n')+1);
            delimiters.forEach(delimiter=>{
            nums = nums.split(delimiter).join(',')
        })
        }
        
        
        nums = (delimiter) ? nums.split(delimiter).map(Number) : nums.split(/[\n,]/).map(Number);
        
        
        nums.forEach(number=>{
            if(number < 0)
                negatives.push(number)
        });
    
        if (negatives.length) {
            throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
        }
    
        return nums.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}
}

module.exports = {add};