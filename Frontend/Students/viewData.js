// console.log(cell[4+1-1]);
const day = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
day.forEach((element, index) => {
    $.ajax({
        type: 'POST',
        url: 'http://localhost/TimeTable/Backend/viewFetchData.php',
        data: {
            Dept: sessionStorage.getItem("Department"),
            Semester: sessionStorage.getItem("Semester"),
            Section: sessionStorage.getItem("Section"),
            Day: element
        },
        success: function (data) {
            let i = 0;
            const cell = Array.from(document.getElementsByClassName(`Tdata${index}`));
            while (i < data.length) {
                var period = data[i].Period;
                cell[period - 1].innerHTML = data[i].Subject;
                i = i + 1;
            }
        }
    })
});