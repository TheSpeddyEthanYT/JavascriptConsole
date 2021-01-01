const readline = require('readline')


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
    if (evaledParam == 'exit'){
      return exitFunc()
    }
    let evaled = eval(evaledParam);
    if(evaledParam.includes("console.log")||evaledParam.includes("console.dir")||evaledParam.includes("console.error")){
      return setImmediate(()=>Question());
    }else{
      console.log(evaled);
      setImmediate(()=>Question());
    }
  });
}
rl.question('> ', (evaledParam) =>{
  if (evaledParam == 'exit'){
    return exitFunc()
  }
  let evaled = eval(evaledParam);
  if(evaledParam.includes("console.log")||evaledParam.includes("console.dir")||evaledParam.includes("console.error")){
    return setImmediate(()=>Question());
  }else{
    console.log(evaled);
    setImmediate(()=>Question());
  }
});

