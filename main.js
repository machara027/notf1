const unreadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifes");
const markAll = document.getElementById("mark_all");
unread.innerHTML=unreadMessages.length

unreadMessages.forEach((message) =>{
    message.addEventListener('click', () =>{
        message.classList.remove('unread');
        const newUnreadMessages = document.querySelectorAll('.unread');
        unread.innerText = newUnreadMessages.length;
    })
})

markAll.addEventListener('click', () =>{
     unreadMessages.forEach((message) =>{
        message.classList.remove('unread');
     });
     const newUnreadMessages = document.querySelectorAll('.unread');
     unread.innerHTML = newUnreadMessages.length;
    }
)