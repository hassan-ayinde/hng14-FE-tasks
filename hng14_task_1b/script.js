const updateTime = () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  const currentTime = new Date().getTime();
  timeElement.textContent = currentTime;
}


updateTime();

setInterval(updateTime, 1000);