window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-bar');
    skills.forEach(bar => {
        const skillLevel = bar.getAttribute('data-level');
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (barTop < windowHeight && barTop > 0) {
            // Jab bar screen ke andar aaye
            bar.style.width = "0%"; // Pehle 0% karo
            setTimeout(() => {
                bar.style.width = skillLevel; // Phir asli width lagao
            }, 200); // 0.2 second ka wait, phir fill
        } else {
            // Jab bar screen ke bahar ho to wapas 0% kar do
            bar.style.width = "0%";
        }
    });
});