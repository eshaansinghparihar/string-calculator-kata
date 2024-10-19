function add(numbers){
if(typeof(numbers) === 'string')
{
    if(numbers === '') return 0;

    let nums = numbers, delimeter = '';
    if(numbers.startsWith('//')){
        delimeter = nums.substring(2,nums.indexOf('\n'))
        nums = numbers.slice(2 + delimeter.length)
    }
    nums = (delimeter) ? nums.split(delimeter).map(Number) : nums.split(/[\n,]/).map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}
}

module.exports = {add};