const showAsideNav = () => {
    document.querySelector('#side_nav').style.display = 'flex';
}
const hideAsideNav = () => {
    document.querySelector('#side_nav').style.display = 'none';
}
document.querySelector('#pc_search_input').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        window.location.href = `/?search=${encodeURIComponent(this.value)}`;
    }
});

document.querySelector('#header_search_input').addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        window.location.href = `/?search=${encodeURIComponent(this.value)}`;
    }
});

const name = document.getElementById("user_name");
const email = document.getElementById("user_email");
const message = document.getElementById("user_message");

const saveMessage = async (e) => {
    e.preventDefault();
    console.log("Sending message...");
    
    const data = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    const response = await fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    alert(result.msg);
    name.value = "";
    email.value = "";
    message.value = "";
};

function handleImageError(img) {
    img.onerror = null; // Prevent infinite loop
    img.src = '/images/loader.gif'; // Adjusted path
  }



