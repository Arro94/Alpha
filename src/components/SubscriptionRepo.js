// class SubscriptionRepo {
//   constructor(dao) {
//     this.dao = dao
//   }
//
//   createTable() {
//     const sql = `
//     CREATE TABLE IF NOT EXISTS subscription (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       email TEXT NOT NULL UNIQUE)`
//     return this.dao.run(sql)
//   }
//
//   create(email) {
//     return this.dao.run(
//       'INSERT INTO subscription (email) VALUES (?)',
//       [email])
//   }
//
//   delete(email) {
//     return this.dao.run(
//       `DELETE FROM subscription WHERE email = ?`,
//       [email]
//     )
//   }
//
// }
