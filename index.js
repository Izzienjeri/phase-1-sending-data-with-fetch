function submitData (userName, userEmail) {
    return fetch('http://localhost:3000/users', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body:JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    }
    ) 
    .then(function (response) {
        return response.json();
      })
    .then(function(data){
        console.log(data)
    })
    .catch(function (error) {
        console.log('Error!', error);
    

    const errorContainer = document.createElement('div');
    errorContainer.textContent = 'Error: ' + error.message;
    document.body.appendChild(errorContainer);
      });

};

submitData('izzie', 'izzienjeri12@gmail.com')



