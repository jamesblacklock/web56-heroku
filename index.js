require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});


// function someAsyncProcess(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(n % 2) {
//                 reject('must be even');
//             } else {
//                 resolve(n * 2);
//             }
//         }, 1000);
//     });
// }


// someAsyncProcess(() => {
//     console.log('foobar');
//     someAsyncProcess(() => {
//         console.log('foobar');
//         someAsyncProcess(() => {
//             console.log('foobar');
//             someAsyncProcess(() => {
//                 console.log('foobar');
//                 someAsyncProcess(() => {
//                     console.log('foobar');
//                 });
//             });
//         });
//     });
// });

// someAsyncProcess(10).then(result => {
//     console.log(result);
//     return someAsyncProcess(30);
// })
// .then(result => {
//     console.log(result);
//     return someAsyncProcess(5);
// })
// .then(result => {
//     console.log(result);
//     return someAsyncProcess(4);
// })
// .catch(result => {
//     console.log(result);
// });

// async function asyncFunction() {
//     try {
//         let result = await someAsyncProcess(10);
//         console.log(result);
//         result = await someAsyncProcess(30);
//         console.log(result);
//         result = await someAsyncProcess(5);
//         console.log(result);
//         result = await someAsyncProcess(4);
//         console.log(result);
//     } catch(err) {
//         console.log(err);
//     }
// }

// asyncFunction().then(() => console.log('done!'));

