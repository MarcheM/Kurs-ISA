$(function () {
    var patientsList = [
        { firstName: "Jan", lastName: "Kowalski" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Adam", lastName: "Nowak" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Andrzej", lastName: "Kielcz" },
        { firstName: "Michalina", lastName: "Nowak" },
    ];

    patientsList.forEach(function (patient) {
        addPatient(patient);
    })
});

function addPatient(patient) {
    $("#patients-list")
        .append(
        $("<li/>")
            .text(patient.firstName + " " + patient.lastName)
        );
}