todoButton = document.querySelector('.todoButton');

todoButton.addEventListener('click', genPassword)

function genPassword(){
  const randomText = 'qwertyuiopasdfghjklmnbv{}[];`/"~cxz1234567890QWERTYUIOPLKJHGFDSAZXCVBNM';
  let password = "";

  //loop through randomText
    for(let i = 0; i < 15; i++){
         password += randomText.charAt(
        Math.floor(Math.random() * randomText.length)
        
        )

      }

      document.querySelector('.todoInput').value = password;
      console.log(password)

  }

  genPassword()