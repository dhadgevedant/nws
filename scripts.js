const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
menu.style.transform = 'translateX(0%)';
// Toggle the menu when the button is clicked
menuButton.addEventListener('click', () => {
    if (menu.style.transform === 'translateX(0%)') {
        menu.style.transform = 'translateX(-100%)';

    } else {
        menu.style.transform = 'translateX(0%)';
    }
});

window.addEventListener('scroll', () => {
    // Get the scroll percentage
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Calculate the offset values for prompt and tool
    const promptOffset = 100 * scrollPercentage; // Moves out from left
    const toolOffset = 100 * scrollPercentage; // Moves out from right
    // console.log(scrollPercentage);
    // Apply the transformations based on scroll percentage
    prompt.style.transform = ` translateX(-${promptOffset}%)`;
    tool.style.transform = ` translateX(${toolOffset}%)`;

});


const prompt = document.getElementById('prompt');
const tool = document.getElementById('tool');
const tools = document.getElementById('tool');

gsap.from(prompt, {
    
    x:-1000,
    ease: 'back.out',
    duration: 0.5,
})
gsap.from(tools, {
    
    x:1000,
    ease: 'back.out',
    duration: 0.5,
   
})


const slider = document.getElementById('slider')
slider.style.transform = 'translateX(33%)'
gsap.to(slider,{
  xPercent: -10 * (10),
  ease: "none",
  scrollTrigger: {
    trigger: "#slider",
    start: "top top",
    pin: true,
    scrub: 1,
    end: "+=2000",

  }
});


//Contact section
function sendEmail() {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const question = document.querySelector('input[placeholder="your question"]').value;
    const mailtoLink = `mailto:dhadgevedant@gmail.com?subject=Enquiry from Website&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AQuestion: ${question}`;
    window.location.href = mailtoLink;
}
