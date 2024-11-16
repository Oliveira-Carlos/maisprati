// Slider com Swiper.js
let swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Animações ao Scroll com AOS.js
AOS.init({
    duration: 1000, // Duração das animações
    once: true, // Anima apenas uma vez quando o usuário rolar
});

// Consumo de API para popular serviços
const servicesContainer = document.getElementById('services');
const apiUrl = 'https://api.exemplo.com/services'; // Substitua pela API real

async function loadServices() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao carregar os serviços.');
        }
        const services = await response.json();
        displayServices(services);
    } catch (error) {
        servicesContainer.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function displayServices(services) {
    servicesContainer.innerHTML = services.map(service => `
        <div class="service-card" data-aos="fade-up">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

loadServices();

// Validação de Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    // Aqui você pode integrar o serviço de envio de emails, como EmailJS
    sendEmail(name, email, message);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Envio do formulário com EmailJS (substituir pelos seus dados de serviço)
function sendEmail(name, email, message) {
    emailjs.send("your_service_id", "your_template_id", {
        from_name: name,
        email: email,
        message: message
    })
        .then(() => {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        }, (error) => {
            alert('Erro ao enviar a mensagem, tente novamente.');
        });
}
