const {EMAIL_FROM, BASE_URL} = require('../keys/index')

module.exports = function(email, token) {
    return {
        to: email,
        from: EMAIL_FROM,
        subject: 'Восстановление доступа',
        html: `
            <h1>Вы забыли пароль?</h1>
            <p>Если нет то просто проигнорируйте это письмо</p>
            <p>иначе нажмите на ссылку ниже:</p>
            <p><a href="${BASE_URL}/auth/password/${token}">Восстановить доступ</a></p>
            <hr />
            <a href="${BASE_URL}">Магазин курсов</a>
        `
    }
}