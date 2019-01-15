const sqlMap = {
    user: {
        add: 'insert into user_log_in(id, name, password) values (0, ?, ?)',
        select_name: 'SELECT * from user where username = ?',
        select_password: 'SELECT * from user where password = ?'
    }
}

module.exports = sqlMap;
