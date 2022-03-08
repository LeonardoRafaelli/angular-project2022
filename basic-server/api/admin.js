
database(`INSERT INTO ADMINISTRADOR
    VALUES (null, "leo", "123");`)
    .then(result => {
        console.log("Admin Inserido!")
    })
    .catch(err => {
        console.log("Erro!", err)
    })
