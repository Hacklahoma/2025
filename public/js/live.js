document.addEventListener('DOMContentLoaded', function() {
    const eventSchedule = document.getElementById('eventSchedule');
    const countdownElement = document.getElementById('countdown');
    const endTime = new Date('2024-02-11T14:30:00'); 

    function updateSchedule() {
        const now = new Date();
        Array.from(eventSchedule.children).forEach(li => {
            const eventTime = new Date(li.getAttribute('data-time'));
            if (now >= eventTime) {
                li.style.textDecoration = 'line-through';
            }
        });
    }

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft > 0) {
            let hours = Math.floor(timeLeft / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `Time until event ends: ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerHTML = 'The event has ended.';
            clearInterval(countdownInterval);
        }
    }

    setInterval(updateSchedule, 1000);
    const countdownInterval = setInterval(updateCountdown, 1000);
});