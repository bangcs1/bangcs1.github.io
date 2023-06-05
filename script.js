sendbutton.addEventListener("click", async function() {

  const message = messageinput.value;

  if (!message) {

    return;

  }

  sendbutton.innerHTML = `<i class="fa fa-spinner fa-spin"></i> Đang gửi...`;

  try {

    const response = await axios.get('https://gptgo.bangcoi.repl.co/?input=' + message);

    const answer = response.data.content.trim();

    sendMessage(answer.replace(/,,/g, '\n'), false);

  } catch (error) {

    console.error(error);

  }

  messageinput.value = "";

  sendbutton.innerHTML = `Gửi`;

});

function sendMessage(message, isUser) {

  const chatBubble = document.createElement("div");

  chatBubble.classList.add("chat-bubble");

  if (isUser) {

    chatBubble.classList.add("user-message");

    chatBubble.innerHTML = `

      <div class="avatar user-avatar"></div>

      <div class="message">${message}</div>

    `;

  } else {

    chatBubble.classList.add("ai-message");

    chatBubble.innerHTML = `

      <div class="avatar ai-avatar"></div>

      <div class="message">${message}</div>

    `;

  }

  chatHistory.appendChild(chatBubble);

  chatHistory.scrollTop = chatHistory.scrollHeight;

}
