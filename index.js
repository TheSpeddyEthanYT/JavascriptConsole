#! /usr/bin/env node
const { read } = require('fs');
const readline = require('readline')
const fs = require('fs');

//Also made by RogelioLB

let plug = [];

function plugins(){
  plug = [];
  fs.readdir(__dirname+"/plugins",(err,file)=>{
    file.forEach((f,i)=>{
      if(f.endsWith(".js")){
        plug.push({name:f,id:i,func: require(`./plugins/${f}`)});
      }
    })
    console.log(plug);

    console.log("\n\nUsage:-- plug[<id>].func.(function)")
  })
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function exitFunc(){
  console.log("See you next time!")
  process.exit(0)
}
function Question(){
  rl.question('> ', (evaledParam) =>{
    try{
      if (evaledParam.toLowerCase() == 'exit'){
        return exitFunc()
      }
      if(evaledParam.toLowerCase()==="help"){
     
        plugins();
        console.log('\nFunctions')
        console.log('Exit, Exits the program.')
        console.log('Clear, Clears the prompt.')
        console.log('Version, Show the version of the console.')
        console.log('Help, You are using it right now, Its made for give help and orientation.')
           console.log('Installed Plugins.')
        return setImmediate(()=>Question());
      }
      if(evaledParam.toLowerCase()==="clear"){
        console.clear() 
        return setImmediate(()=>Question());
      }
      if(evaledParam.toLowerCase()==="version"){
        return console.log(require("./package.json").version);
      }
      let evaled = eval(evaledParam);
      if(evaledParam.toLowerCase().includes("console.log")||evaledParam.toLowerCase().includes("console.dir")||evaledParam.toLowerCase().includes("console.error")){
        return setImmediate(()=>Question());
      }else{
        console.log(evaled);
        setImmediate(()=>Question());
      }
    }
      catch(err){
        console.log(err);
        setImmediate(()=>Question());
      }
  });
}
rl.question('> ', (evaledParam) =>{
try{
  if (evaledParam.toLowerCase() == 'exit'){
    return exitFunc()
  }
  if(evaledParam.toLowerCase()==="help"){
 
    plugins();
    console.log('\nFunctions')
    console.log('Exit, Exits the program.')
    console.log('Clear, Clears the prompt.')
    console.log('Version, Show the version of the console.')
    console.log('Help, You are using it right now, Its made for give help and orientation.')
       console.log('Installed Plugins.')
    return setImmediate(()=>Question());
  }
  if(evaledParam.toLowerCase()==="clear"){
    console.clear() 
    return setImmediate(()=>Question());
  }
  if(evaledParam.toLowerCase()==="version"){
    return console.log(require("./package.json").version);
  }
  let evaled = eval(evaledParam);
  if(evaledParam.toLowerCase().includes("console.log")||evaledParam.toLowerCase().includes("console.dir")||evaledParam.toLowerCase().includes("console.error")){
    return setImmediate(()=>Question());
  }else{
    console.log(evaled);
    setImmediate(()=>Question());
  }
}
  catch(err){
    console.log(err);
    setImmediate(()=>Question());
  }
});
