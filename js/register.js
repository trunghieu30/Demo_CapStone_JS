document.querySelector('#btnSubmit').onclick = function () {
    var user = new User();
    user.email = document.querySelector('#email').value;
    user.password = document.querySelector('#password').value;
    user.name = document.querySelector('#name').value;
    user.phone = document.querySelector('#phone').value;
    var radios = document.getElementsByName('gender');
    user.gender = true;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == !1) {
                user.gender = false;
            }
            break;
        }
    }
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: user,
    })
    promise.then(function (result) {
        console.log(result.data);
    })
    promise.catch(function (err) {
        console.log(err);
    })
}

//Sao em call api no lai k dc mentor oi
