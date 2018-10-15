const assert = require('assert');
const User = require('../src/user');

describe('Updating records', ()=>{

    let dc;

    beforeEach((done)=>{

        dc =  new User({
            name:'Daniel DC Cormier',
            email:'daniel.c@gmail.com'
        });

        dc.save()
            .then(()=>done());
    });

    it('Instance set and save',(done)=>{
        dc.set('name', 'David Cooger')
            .save()
            .then(()=>User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'David Cooger');
                done();
            });  
    });

    it('Model instance update',(done)=>{
        dc.updateOne({name: 'Alex Johns'})
            .then(()=>User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex Johns');
                done();
            });  
    });

    it('Class update',(done)=>{
        User.update({name: 'Alex Johns'})
            .then(()=>User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex Johns');
                done();
            });  
    });

    it('Class update',(done)=>{
        User.update({name:'Daniel DC Cormier'},{name: 'Alex Johns'})
            .then(()=>User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex Johns');
                done();
            });  
    });

    it('Class update one record',(done)=>{
        User.updateOne({name:'Daniel DC Cormier'},{name: 'Alex Johns'})
            .then(()=>User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex Johns');
                done();
            });  
    });

    it('Class find and update',(done)=>{
        User.findByIdAndUpdate({_id:dc._id},{name: 'Alex Johns'})
            .then(()=>User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex Johns');
                done();
            });  
    });
});