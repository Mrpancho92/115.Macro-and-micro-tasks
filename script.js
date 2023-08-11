setTimeout(() => console.log('timeout'));  // Асинхронная операция
// Как только заканчивается макрозадача выполнются все 
// микрозадачи которые скопились в очереди
Promise.resolve()
    .then(() => console.log('promise'));  // Асинхронная операция, но 
    //then catch finally - относятся к микрозадачам 

    queueMicrotask(() => console.log('wow')); // - встало в очередь микрозадач

    Promise.resolve()
    .then(() => console.log('promise2')); // Есть очередь 
    //и макрозадач и микрозадач

console.log('code');   // Синхронный код

// () = {}
// microtasks: then/catch/finally/await
// render
// () => {}
// microtasks: then/catch/finally/await
// render
// () = {}