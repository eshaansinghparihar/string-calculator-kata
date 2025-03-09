function add(numbers){
if(typeof(numbers) === 'string')
{
    if(numbers === '') return 0;

    let nums = numbers, delimeter = '', negatives = [];
    if(numbers.startsWith('//')){
        delimeter = nums.substring(2,nums.indexOf('\n'));
        nums = numbers.slice(2 + delimeter.length)
    }
    nums = (delimeter) ? nums.split(delimeter).map(Number) : nums.split(/[\n,]/).map(Number);
    
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