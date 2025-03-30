// Chatbot functionality
const chatbotBtn = document.getElementById('chatbotBtn');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotBody = document.getElementById('chatbotBody');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

// Toggle chatbot visibility
chatbotBtn.addEventListener('click', () => {
    chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
});

chatbotClose.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
});

// Send message function
function sendMessage() {
    const message = chatbotInput.value.trim().toLowerCase();
    if (message) {
        const userMsg = document.createElement('div');
        userMsg.className = 'chatbot-message user-message';
        userMsg.textContent = message;
        chatbotBody.appendChild(userMsg);

        chatbotInput.value = '';
        chatbotBody.scrollTop = chatbotBody.scrollHeight;

        setTimeout(() => {
            let botResponse = "";
            if (message.includes('founder')) {
                botResponse = "NAS-AI was founded by Mahrous Mahrous Abdallah Ragab (Mars) in the UAE...";
            } 
            // ... rest of chatbot logic ...
            
            const botMsg = document.createElement('div');
            botMsg.className = 'chatbot-message bot-message';
            botMsg.textContent = botResponse;
            chatbotBody.appendChild(botMsg);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }, 800);
    }
}

// Event listeners
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Tool demo alerts
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Try these free tools after launch!');
    });
});