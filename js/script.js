function myExcelFuns() {
    let numberStr = document.getElementById('numbers').value.trim();
    if (numberStr === "") {
        alert("Please enter some numbers separated by spaces.");
    } else {
        let numberArr = numberStr.split(" ");
        let finalNumericArray = numberArr.filter(num => num !== "").map(Number);
        
        let result;
        if (document.getElementById('autosum').checked) {
            result = finalNumericArray.reduce((a, b) => a + b, 0);
        } else if (document.getElementById('average').checked) {
            result = finalNumericArray.reduce((a, b) => a + b, 0) / finalNumericArray.length;
        } else if (document.getElementById('max').checked) {
            result = Math.max(...finalNumericArray);
        } else {
            result = Math.min(...finalNumericArray);
        }
        document.getElementById('output').innerText = `Result: ${result}`;
        console.log(result);
    }
}





function userForm() {
    let firstName = document.getElementById('firstName').value; //récupérer les valeurs saisies par l'utilisateur dans les champs correspondants.
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let province = document.getElementById('province').value;
    let membership = document.querySelector('input[name="membership"]:checked').value;

    let fullName = firstName + " " + lastName;

    let output = document.getElementById('output');
    output.innerHTML = `
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>City: ${city}</p>
        <p>Province: ${province}</p>
        <p>Membership: ${membership}</p>
    `;
}