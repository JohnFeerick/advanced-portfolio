// template_k6xfyvy
// service_yyi0jyn
// bVhu93aX2Zra0TCYB

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_yyi0jyn',
            'template_k6xfyvy',
            event.target,
            'bVhu93aX2Zra0TCYB'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on johnfeerick0@gmail.com"
        )
    })    
}