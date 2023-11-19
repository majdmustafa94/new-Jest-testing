const mytesting=require("./qa_private")

test("the number of items insid array",()=>{
    expect(mytesting.length).toBe(7)
})

test("to check if my array contains the name",()=>{
    expect(mytesting).toContain("majd")
})

test("to check if my array does not contains the name",()=>{
    expect(mytesting).not.toContain("omar")
})


