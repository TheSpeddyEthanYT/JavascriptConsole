#!/usr/bin/env node
const { read } = require('fs');
const readline = require('readline')
const fs = require('fs');
const colors = require('colors')
const changes = require('./changelogs.json')
colors.setTheme({
  header: 'yellow',
  output: 'green',
  error: 'red',
  file: 'cyan'
})

//Also made by RogelioLB

let plug = [];
loadPlugins()
function loadPlugins(){
  plug = [];
  let counter = 0;
  fs.readdir(__dirname+"/plugins",(err,file)=>{
    file.forEach((f,i)=>{
      if(f.endsWith(".js")){
        plug.push({name:f,id:i,func: require(`./plugins/${f}`)});
        console.log(`\nName: ${f}, ID: ${i}`.file)
        counter = counter+1
      }
    })
    console.log(`\n\nYou have ${counter} plugins installed!`.header)
    console.log("\n\nUsage:-- plug[<id>].func.(function)".header)
  })
}
function plugins(){
  plug = [];
  fs.readdir(__dirname+"/plugins",(err,file)=>{
    file.forEach((f,i)=>{
      if(f.endsWith(".js")){
        plug.push({name:f,id:i,func: require(`./plugins/${f}`)});
        console.log(`\nName: ${f}, ID: ${i}`.file)
      }
    })


    console.log("\n\nUsage:-- plug[<id>].func.(function)".header)
  })
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function exitFunc(){
  console.log("See you next time!".output)
  process.exit(0)
}
function Changelog(){
  console.log(`v${require("./package.json").version}, Type: ${changes[require("./package.json").version].type}`.header)
  console.log(`Description: ${changes[require("./package.json").version].description}`.output)
}
function Question(){
  rl.question('> ', (evaledParam) =>{
    try{
      if(evaledParam.toLowerCase() === 'changelogs'){
        Changelog()
        return setImmediate(()=>Question());
      }
      if (evaledParam.toLowerCase() == 'exit'){
        return exitFunc()
      }
      if(evaledParam.toLowerCase()==="help"){
     
        plugins();
        console.log('\nFunctions'.header)
        console.log('Exit, Exits the program.'.output)
        console.log('Clear, Clears the prompt.'.output)
        console.log('Version, Show the version of the console.'.output)
        console.log('Help, You are using it right now, Its made for give help and orientation.'.output)
        console.log('Changelogs, Check the changelogs of the current version!'.output)
        console.log('Installed Plugins.'.header)
        return setImmediate(()=>Question());
      }
      if(evaledParam.toLowerCase()==="clear"){
        console.clear() 
        return setImmediate(()=>Question());
      }
      if(evaledParam.toLowerCase()==="version"){
        console.log(`v${require("./package.json").version}`.output);
        return setImmediate(()=>Question());
      }
      let evaled = eval(evaledParam);
      if(evaledParam.toLowerCase().includes("console.log")||evaledParam.toLowerCase().includes("console.dir")||evaledParam.toLowerCase().includes("console.error")){
        return setImmediate(()=>Question());
      }else{
        console.log(`${evaled}`.output);
        setImmediate(()=>Question());
      }
    }
      catch(err){
        console.log( `An Error has ocurred:${err}`.error);
        setImmediate(()=>Question());
      }
  });
}
rl.question('> ', (evaledParam) =>{
try{
  if(evaledParam.toLowerCase() === 'changelogs'){
    Changelog()
    return setImmediate(()=>Question());
  }
  if (evaledParam.toLowerCase() == 'exit'){
    return exitFunc()
  }
  if(evaledParam.toLowerCase()==="help"){
 
    plugins();
    console.log('\nFunctions'.header)
    console.log('Exit, Exits the program.'.output)
    console.log('Clear, Clears the prompt.'.output)
    console.log('Version, Show the version of the console.'.output)
    console.log('Help, You are using it right now, Its made for give help and orientation.'.output)
    console.log('Changelogs, Check the changelogs of the current version!'.output)
    console.log('Installed Plugins.'.header)
    return setImmediate(()=>Question());
  }
  if(evaledParam.toLowerCase()==="clear"){
    console.clear() 
    return setImmediate(()=>Question());
  }
  if(evaledParam.toLowerCase()==="version"){
    console.log(`v${require("./package.json").version}`.output);
    return setImmediate(()=>Question());
  }
  let evaled = eval(evaledParam);
  if(evaledParam.toLowerCase().includes("console.log")||evaledParam.toLowerCase().includes("console.dir")||evaledParam.toLowerCase().includes("console.error")){
    return setImmediate(()=>Question());
  }else{
    console.log(`${evaled}`.output);
    setImmediate(()=>Question());
  }
}
  catch(err){
    console.log(`An Error has ocurred:${err}`.error);
    setImmediate(()=>Question());
  }
});
