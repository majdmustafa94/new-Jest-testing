const myTest=require("./say")

test("say wlc",()=>{
    expect(myTest()).toBe("unknown")
})