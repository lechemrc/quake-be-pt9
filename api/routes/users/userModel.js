const db = require('../../../data/dbConfig');
const { delete } = require('../../../data/dbConfig');

function addUser(user){
    return  db('users')
    .insert(user);
  }
  
  function getUsers(){
    return db('users')
  }
  
  function findBy(filter) {
      return db('users').where(filter);
    }
    function findById(id){
      return db('users')
      .where({id})
      .first();
  }

   function remove(id)
   {
     delete db('users').where({id})
     .first
   }
  
  module.exports= {
      addUser,
      findBy,
      getUsers,
      findById,
      remove
   }
