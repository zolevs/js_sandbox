let worker = new Worker('./test.js');

worker.postMessage('Hello from main script');

worker.addEventListener('message', (e) => {
    console.log(e.data);
    worker.terminate();
});

// worker.terminate();