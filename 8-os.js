const os=require('os')

// info current user
const user = os.userInfo()


// system uptime in secs
const sysuptime = os.uptime()
console.log(sysuptime);
console.log(`${os.homedir}`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    platform:os.platform(),
     networkInterfaces:os.networkInterfaces(),
     architect:os.arch(),
     //constants:os.constants,
     //cpus:os.cpus()
     version:os.version()
}

console.log(currentOS)