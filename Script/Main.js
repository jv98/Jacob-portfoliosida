function main() {
    addEventListeners()
}

const navHome = document.querySelector('#nav-home')

function addEventListeners() {     
    navHome.addEventListener('click', goToHome)
   
}

function Home() {
    const home = document.querySelector('.start-image')

    if(!home.classList.contains('active')) {
        nonActive.forEach((e) => {
            if(e.classList.contains('active')) {
                e.classList.remove('active')
            }
        })
        home.classList.add('active')   
    }
}


function myFunction() {
    location.replace("https://www.w3schools.com")
  }