const scriptURL='https://script.google.com/macros/s/AKfycbzKE8yiDNQnGQWQ051AeMmYkHeQP0dzBYjVKAHjGzzjoG62fmIIX_kHAnhIUKD2L6vq/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body: new FormData(form)})
    .then(response =>alert(" !!!Your Message Recieved !!Thank You  for reaching me !!!"))
    .then(()=>{window.location.reload();})
    .catch(error =>console.error('Error!',error.message))
})



// form.addEventListener('submit', e => {
//     e.preventDefault();
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => response.json()) // 
//         .then(data => {
//             alert("Thank You for reaching me !!!");
//             window.location.reload();
//         })
//         .catch(error => console.error('Error!', error.message));
// });

