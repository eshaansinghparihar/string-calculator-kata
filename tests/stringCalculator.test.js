test(('test for nothing'),()=>{
    function nothing(){
        return;
    }
    expect(nothing()).toBe();
})