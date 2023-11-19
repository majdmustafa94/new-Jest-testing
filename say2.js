function reName(name){
   if(name.startsWith("a")){
    return "your name start with a"
   }
   return "your name start with "+name[0]
}

module.exports=reName