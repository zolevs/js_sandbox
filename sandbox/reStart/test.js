console.log('external js');

addEventListener('message', (e)=> {
    console.log(e.data);
    self.postMessage('Finished');
});

// self.close();