const mytesting=require("./sum")

test("sum two number",()=>{
    expect(mytesting(1,1)).toBe(2)
})

test.only("sum three number",()=>{
    expect(mytesting(1,1,1)).toBe(3)
})

test.skip("sum unknown number",()=>{
    expect(mytesting(1,1,1,1,1,1,1,1,1,1)).toBe(10)
})