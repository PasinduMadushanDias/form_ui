// User profiles data
const profiles = [
    {
      name: "John Doe",
      age: 28,
      location: "New York, USA",
      bio: "Software Engineer with a passion for coding and problem-solving.",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "Jane Smith",
      age: 24,
      location: "London, UK",
      bio: "Graphic Designer who loves creating beautiful and functional designs.",
      image: "https://via.placeholder.com/100"
    },
    {
      name: "Alex Johnson",
      age: 32,
      location: "Sydney, Australia",
      bio: "Travel blogger exploring the world and sharing stories.",
      image: "https://via.placeholder.com/100"
    }
  ];
  
  // Function to display profile
  function showProfile(profileIndex) {
    const profile = profiles[profileIndex - 1]; // Adjust for 0-based index
    const profileElement = document.getElementById("profile");
  
    profileElement.innerHTML = `
      <img src="${profile.image}" alt="${profile.name}">
      <h2>${profile.name}</h2>
      <p><strong>Age:</strong> ${profile.age}</p>
      <p><strong>Location:</strong> ${profile.location}</p>
      <p><strong>Bio:</strong> ${profile.bio}</p>
    `;
  }
  
  // Show the first profile by default
  showProfile(1);