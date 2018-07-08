var expect = require('chai').expect;
var mongojs = require('mongojs');
var db = mongojs('Project1',['docs']);

var count = 0;
describe('Testing MongoDB',function(){

               before(function (done){
                  db.docs.find({City:"Canaan", Price:150000}, function (err,res){
                  console.log(res.length);
                  count=res.length;
                  done();
               });
});

             it('by City & Price count',function(){
             const result = count;
             expect(result).to.equal(1);
             });
             });
