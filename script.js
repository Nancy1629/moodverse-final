localStorage.removeItem("stars");
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("moodForm");
  const select = document.getElementById("mood");
  const galaxy = document.querySelector(".galaxy");

  const savedStars = JSON.parse(localStorage.getItem("stars")) || [];
  savedStars.forEach(addStar);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mood = select.value;
    if (!mood) return;
     

    const star = {
      mood,
      x: Math.random() * 95,
      y: Math.random() * 90,
    };

    addStar(star);
    savedStars.push(star);
    localStorage.setItem("stars", JSON.stringify(savedStars));
    


    form.reset();
  });

  function addStar(star) {
    const el = document.createElement("div");
    el.className = "star";
    el.style.left = star.x + "%";
    el.style.top = star.y + "%";
    el.textContent = getEmoji(star.mood);
    galaxy.appendChild(el);
  }

  function getEmoji(mood) {
    switch (mood) {
      case "happy": return "😊";
      case "sad": return "😢";
      case "angry": return "😡";
      case "excited": return "🤩";
      case "calm": return "😌";
      case "hopeless": return"💀";
      case "loved": return"❤️";
      case "confused": return"🤨";
      case "scared": return"😨";
      case "tired": return"😪";
      case "cool": return"😎";
      case "peaceful": return"😇";
      default: return "⭐";
    }
  }
});


