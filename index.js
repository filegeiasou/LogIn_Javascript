function saveData(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    var newAccount = [name, password];

    // Get the existing accounts from localStorage, or initialize an empty array
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    // Add the new account to the accounts array
    accounts.push(newAccount);

    // Save the updated accounts array to localStorage
    localStorage.setItem('accounts', JSON.stringify(accounts));

    console.log(accounts);
}

function check() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    // Get the existing accounts from localStorage
    var accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    for(let i=0 ; i<accounts.length ; i++){
        if(name === accounts[i][0] && password === accounts[i][1]){
            localStorage.setItem('currentUser', name);
            window.location.href = './admin.html';
            return;
        }
    }

    alert('Invalid username or password');
}
