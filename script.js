const users = [
  {
    username: "tech_guru",
    image: "https://plus.unsplash.com/premium_photo-1661374927471-24a90ebd5737?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Software Engineer",
    description: "Passionate about building scalable web applications and exploring AI-driven solutions.",
    tags: ["JavaScript", "AI", "Web Development", "Cloud"]
  },
  {
    username: "data_wizard",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    profession: "Data Scientist",
    description: "Enjoys uncovering insights from complex datasets and applying machine learning models.",
    tags: ["Python", "Machine Learning", "Statistics", "Big Data"]
  },
  {
    username: "health_hero",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    profession: "Nutritionist",
    description: "Dedicated to promoting healthy lifestyles through personalized diet and wellness plans.",
    tags: ["Nutrition", "Wellness", "Fitness", "Healthy Living"]
  },
  {
    username: "travel_nomad",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Travel Blogger",
    description: "Explores hidden gems around the world and shares authentic travel stories with readers.",
    tags: ["Travel", "Photography", "Adventure", "Culture"]
  }
];

var sum = '';
users.forEach(function(elem){
    sum = sum+ `<div class="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.username}</h3>
        <h4>${elem.profession} </h4>
        <p>${elem.description}</p>
       </div>`;
})

var main = document.querySelector('main')
main.innerHTML = sum;
