import { pool } from '../../db/db.js'; // Asegúrate de que la ruta sea correcta
import sql from 'mssql';

export const get_profesionales = async (req, res) => {
    const { Rut } = req.query;

    if (!Rut) {
        return res.status(400).json({
            message: "Debe indicar un Rut para continuar",
        });
    }

    try {
        const request = pool.request();
        request.input('Rut', sql.NVarChar, Rut);

        const result = await request.query(
            "SELECT " +
            "p.NroRegistro, p.Sexo, p.Nombres, p.ApellidoPaterno, p.ApellidoMaterno, " +
            "CONVERT(varchar, p.FechaNacimiento, 105) AS FechaNacimiento, " +
            "CONVERT(varchar, p.FechaRegistro, 105) AS FechaRegistroProfesional, " +
            "p.Nacionalidad, p.Rut, p.Dv, p.CodigoBusqueda, p.Universidad, p.Observaciones, " +
            "CONVERT(varchar, p.FechaCarga, 105) AS FechaCarga, " +
            "a.ClaseAntecedente, a.CodAntecedente, " +
            "CONVERT(varchar, a.FechaAntecedente, 105) AS FechaAntecedente, " +
            "CONVERT(varchar, a.FechaRegistro, 105) AS FechaRegistroAntecedente, " +
            "a.NroResolucion, a.Procedencia, a.TipoAntecedente " +
            "FROM Profesionales p " +
            "INNER JOIN Antecedentes a ON p.IdProfesional = a.IdProfesional " +
            "WHERE CONCAT(p.Rut, '-', p.Dv) = @Rut"
        );

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "El Rut no está asociado a un prestador válido" });
        }

        const profesional = [{
            nro_registro: result.recordset[0].NroRegistro,
            sexo: result.recordset[0].Sexo,
            nombres: result.recordset[0].Nombres,
            apellido_paterno: result.recordset[0].ApellidoPaterno,
            apellido_materno: result.recordset[0].ApellidoMaterno,
            fecha_nacimiento: result.recordset[0].FechaNacimiento,
            fecha_registro_profesional: result.recordset[0].FechaRegistroProfesional,
            nacionalidad: result.recordset[0].Nacionalidad,
            rut: result.recordset[0].Rut,
            dv: result.recordset[0].Dv,
            codigo_busqueda: result.recordset[0].CodigoBusqueda,
            universidad: result.recordset[0].Universidad,
            observaciones: result.recordset[0].Observaciones,
            fecha_carga: result.recordset[0].FechaCarga,
            antecedentes: result.recordset.map(row => ({
                clase_antecedente: row.ClaseAntecedente,
                cod_antecedente: row.CodAntecedente,
                fecha_antecedente: row.FechaAntecedente,
                fecha_registro_antecedente: row.FechaRegistroAntecedente,
                nro_resolucion: row.NroResolucion,
                procedencia: row.Procedencia,
                tipo_antecedente: row.TipoAntecedente,
            }))
        }];

        res.json(profesional);
    } catch (error) {
        console.error("Error al buscar usuario:", error);
        res.status(500).json({ message: "Error al buscar usuario." });
    }
};