
const mongoose = require('mongoose');

before((done)=>{
    mongoose.connect('mongodb://localhost/users_test', { useNewUrlParser: true });
    mongoose.connection
        .once('open', ()=> {
            console.log('Connection established');
            done();
        })
        .on('error',(error)=> console.warn('Error', error));
    
});




beforeEach((done)=>{
    mongoose.connection.collections.users.drop(()=>{
        // Ready to run the next test!
        done();
    });
});