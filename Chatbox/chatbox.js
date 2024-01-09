var currentDate = new Date();
var formattedDate = currentDate.toLocaleString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
var dateElements = document.querySelectorAll('.date');
dateElements.forEach(function (element) {
  element.textContent = formattedDate;
});


function sendUserMessage() {
  var userMessageInput = document.getElementById('userMessageInput');
  var userMessage = userMessageInput.value;

  if (userMessage.trim() === '') {
    return;
  }

  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  var userMessageWrapper = document.createElement('div');
  userMessageWrapper.className = 'user-message-wrapper chatbox-message';
  userMessageWrapper.innerHTML = `
      <div class="user">You</div>
      <div class="message">${userMessage}</div>
      <div class="date">${formattedDate}</div>
  `;
  var chatboxContent = document.querySelector('.chatbox-content');
  chatboxContent.appendChild(userMessageWrapper);

  var jamieReply = getJamieReply(userMessage);
  if (jamieReply) {
    var jamieMessageWrapper = document.createElement('div');
    jamieMessageWrapper.className = 'chatbot-message-wrapper';
    jamieMessageWrapper.innerHTML = `
        <div class="user">Jamie</div>
        <div class="message">${jamieReply}</div>
        <div class="date">${formattedDate}</div>
    `;
    chatboxContent.appendChild(jamieMessageWrapper);
  }

  userMessageInput.value = '';
}

function getJamieReply(userMessage) {
  if (userMessage.includes('jamie') && userMessage.length === 5) {
    return 'Can I help you?';
  }
  if (userMessage.includes('hey')) {
    if (userMessage.endsWith('?')) {
      return 'Please give me some time to resolve the issue.';
    } else {
      return 'Please remain calm.';
    }
  }
  if (userMessage.endsWith('?')) {
    return 'Yes';
  }
  return 'Sorry, I don\'t understand';
}


var btnSend = document.getElementById('btnSend');
btnSend.addEventListener('click', sendUserMessage);
