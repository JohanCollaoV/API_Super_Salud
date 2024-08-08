import sql from 'mssql';

const config = {
    user: 'tencina',
    password: 'Manchas_15',
    server: 'psicoagenda.database.windows.net', // Puedes incluir el número de puerto si es necesario
    database: 'psicoagenda',
    options: {
        encrypt: true, // Si tu servidor SQL Server requiere una conexión cifrada
    },
};

const pool = await sql.connect(config);

export { pool };