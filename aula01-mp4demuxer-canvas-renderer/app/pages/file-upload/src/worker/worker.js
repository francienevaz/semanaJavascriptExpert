onmessage = ({data}) => {
     console.log('recebido!!', data)
     self.postMessage('hey from worker!')
     setTimeout(() => {
        self.postMessage({
            status: 'done'
        })
     }, 2000);
}