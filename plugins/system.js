const os = require('os')

var cpu = {
    model: os.cpus()[0].model,
    clock: os.cpus()[0].speed,
    cores: os.cpus().length
}

var RAM ={
    TotalMemory: (os.totalmem()/1024/1024).toFixed(1), //Returns data in Megabytes
    FreeMemory: (os.freemem()/1024/1024).toFixed(1), //Returns data in Megabytes
    UsedMemory: ((os.totalmem()/1024/1024)-(os.freemem()/1024/1024)).toFixed(1) //Returns data in Megabytes
}

var OS ={
    Version: os.release(),
    Platform: os.platform(),
    Kernel: os.type(),
    Uptime: os.uptime(), //Returns data in Seconds
    Architecture: os.arch()
}

module.exports = { cpu, RAM, OS }