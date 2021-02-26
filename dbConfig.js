const config = {
    user: "sa",
    password: "test123",
    server: "169.254.6.172",
    database: "UHC",
    options: {
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port: 1433
}


module.exports = config;