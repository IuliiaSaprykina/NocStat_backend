var config = require('./dbConfig');
const sql = require('mssql');


async function getAllPatients() {
    try {
        let pool = await sql.connect(config);
        let patients = await pool.request().query("SELECT * from Patients");
        // console.log(patients.recordsets)
        return patients.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// async function getAllPatient(patientId) {
//     try {
//         let pool = await sql.connect(config);
//         let patient = await pool.request()
//             .input('input_parameter', sql.Int, patientId)
//             .query("SELECT * from Patients where Id = @input_parameter");
//         return patient.recordsets;

//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// async function addPatient(order) {

//     try {
//         let pool = await sql.connect(config);
//         let insertPatient = await pool.request()
//             .input('PatientID', sql.Int, patient.PatientID)
//             .input('PatientName', sql.NVarChar, patient.PatientName)
//             .input('PatientEmail', sql.Int, patient.PatientEmail)
//             .input('PatientAge', sql.NVarChar, patient.PatientAge)
//             .input('PatientComments', sql.NVarChar, patient.PatientComments)
//             .execute('InsertPatients');
//         return insertPatient.recordsets;
//     }
//     catch (err) {
//         console.log(err);
//     }

// }


module.exports = {
    getAllPatients : getAllPatients,
    // getAllPatient : getAllPatient
}