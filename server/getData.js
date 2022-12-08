var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});
var container = docker.getContainer('c25e24e0b989');

async function runExec(container, command) {
  const exec = await container.exec({
    Cmd: command,
    AttachStdout: true,
    AttachStderr: true,
    Tty: false,
    OpenStdin: true,
    StdinOnce: false,
        })
    exec.start({hijack: true, stdin: true}, (err, stream) => {
        const chunks = [];
        return new Promise((resolve, reject) => {
          stream.on('data', (chunk) => chunks.push(chunk));
          stream.on('error', (err) => reject(err));
          stream.on('end', () => resolve(process.stdout));
        })
      })
    }
postQueue = runExec(container, ["/bin/bash","-c", "postqueue -j"])
postQueue.then(function(result){
    console.log(result)
})