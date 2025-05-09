const sqllist = {
    selectList : "select * from booklist",
    selectById : "select * from booklist where id = ?",
    updateList : "update booklist set ? where id = ?"
}

module.exports = sqllist