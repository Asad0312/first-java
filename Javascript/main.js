function calculateMarks() {
    // Get the marks from the input fields
    let math = parseInt(document.getElementById('math').value) || 0;
    let science = parseInt(document.getElementById('science').value) || 0;
    let english = parseInt(document.getElementById('english').value) || 0;
    let history = parseInt(document.getElementById('history').value) || 0;
    let computer = parseInt(document.getElementById('computer').value) || 0;

    // Total and percentage calculation
    let total = math + science + english + history + computer;
    let percentage = (total / 500) * 100;

    // Grade calculation
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B+';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else if (percentage >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Update the DOM with the results
    document.getElementById('totalMarks').innerText = total;
    document.getElementById('percentage').innerText = percentage.toFixed(2) + '%';
    document.getElementById('grade').innerText = grade;
}