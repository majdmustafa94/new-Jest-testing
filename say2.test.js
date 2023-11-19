const myTesting=require("./say2")

test("say wlc",()=>{
    expect(myTesting("majd")).toBe("your name start with m")
})