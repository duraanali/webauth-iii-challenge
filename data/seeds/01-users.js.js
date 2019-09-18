
exports.seed = function (knex) {

  return knex('users').insert([
    { username: 'duraan', password: '123456' }
  ]);
};
