const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', ()=>{

    let joe;

    beforeEach((done)=>{

        joe =  new User({
            name:'joe',
            email:'joe rogan'
        });

        joe.save()
            .then(()=>done());
    });

    it('Remove method model instance',(done)=>{

        joe.remove()
            .then(()=> User.findOne({ email:'joe rogan'}))
            .then((user)=>{
                assert(user === null);
                done();
            });
    });

    it('Class method remove',(done)=>{
        User.deleteMany({ email:'joe rogan'})
        .then(()=> User.findOne({ email:'joe rogan'}))
        .then((user)=>{
            assert(user === null);
            done();
        })
    });

    it('Class method findAndRemove',(done)=>{
        User.findOneAndDelete({ email:'joe rogan'})
        .then(()=> User.findOne({ email:'joe rogan'}))
        .then((user)=>{
            assert(user === null);
            done();
        })
    });

    it('Class method findByIDAndRemove',(done)=>{
        User.findByIdAndDelete(joe._id)
        .then(()=> User.findById(joe._id))
        .then((user)=>{
            assert(user === null);
            done();
        })
    });
});