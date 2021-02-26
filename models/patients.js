class Patient {
    constructor(PatientID, PatientName, PatientEmail, PatientAge, PatientComments){
        this.PatientID = PatientID,
        this.PatientName = PatientName,
        this.PatientEmail = PatientEmail,
        this.PatientAge = PatientAge,
        this.PatientComments = PatientComments
    }
}

module.exports = Patient;