document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("/api/user");
        const data = await response.json();

        if (data.premium) {
            document.getElementById("status").innerText = "Welcome, Premium User!";
            document.getElementById("message").innerText = "You now have access!";
            document.getElementById("status").style.color = "green";
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
});
