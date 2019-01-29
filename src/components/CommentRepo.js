// class CommentRepo {
//   constructor(dao) {
//     this.dao = dao
//   }
//
//   createTable() {
//     const sql = `
//     CREATE TABLE IF NOT EXISTS comment (
//       seqNum INTEGER PRIMARY KEY AUTOINCREMENT,
//       id INTEGER,
//       message TEXT NOT NULL)`
//     return this.dao.run(sql)
//   }
//
//
//   create(email, message) {
//     return this.dao.run('INSERT INTO comment (email,message) VALUES (?,?)',
//       [email, message])
//   }
// }
