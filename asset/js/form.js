window.addEventListener('load', () => {
    const usernameEle = document.getElementById('name');
    const emailEle = document.getElementById('mail');
    const phoneEle = document.getElementById('tel');
    const addresr = document.getElementById('adrres');
    
    const btnRegister = document.getElementById('btn_check');
    const inputEles = document.querySelectorAll('.input-row');
    btnRegister.addEventListener('click', function () {
        Array.from(inputEles).map((ele) =>
            ele.classList.remove('success', 'error')
        );
        let isValid = checkValidate();
        if (isValid) {
            alert('Gửi đăng ký thành công');
            let usernameValue = usernameEle.value=" ";
            let emailValue = emailEle.value = "";
            let phoneValue = phoneEle.value = "";
        }
    });
    
    
    function checkValidate() {
        let usernameValue = usernameEle.value;
        let emailValue = emailEle.value;
        let phoneValue = phoneEle.value;
        let addre = addresr.value;
        let isCheck = true;
        let sm1 = document.querySelector('.sm1');
    
        if (usernameValue == '') {
            setError(usernameEle, 'Tên không được để trống');
            isCheck = false;
        } else {
            setSuccess(usernameEle) ; 
        }
    
        if (emailValue == '') {
            setError(emailEle, 'Email không được để trống');
            isCheck = false;
        } else if (!isEmail(emailValue)) {
            setError(emailEle, 'Email không đúng định dạng');
            isCheck = false;
        } else {
            setSuccess(emailEle);
        }
    
        if (phoneValue == '') {
            setError(phoneEle, 'Số điện thoại không được để trống');
            isCheck = false;
        } else if (!isPhone(phoneValue)) {
            setError(phoneEle, 'Số điện thoại không đúng định dạng');
            isCheck = false;
        } else {
            setSuccess(phoneEle);
        }
        if (addre == '') {
            setError(addresr, 'Tên không được để trống');
            isCheck = false;
        } else {
            setSuccess(addresr) ; 
        }
    
        return isCheck;
    }
    
    function setSuccess(ele) {
        ele.parentNode.classList.add('success');
    }
    
    function setError(ele, message) {
        let parentEle = ele.parentNode;
        parentEle.classList.add('error');
        parentEle.querySelector('small').innerText = message;
    }
    
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    }
    
    function isPhone(number) {
        return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
    }
    
      })