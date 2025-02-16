// Your dynamic resume data
const resumeData = {
    name: "praveen kumar",
    profession: "Full Stack Developer",
    location: "Coimbatore sulur 641402",
    email: "praveenkumarjayavel7@gamil.com",
    phone: "+91 6383646366",
    linkedin: "https://www.linkedin.com/in/praveen-kumar-13a443303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
    about: "A versatile Full Stack Developer with over 2 years of experience building dynamic and responsive web applications.",
    experience: [
      { role: "Senior Developer", company: "TechCorp", years: "2026 - Present", description: "Leading a team of developers to build scalable web applications." },
      { role: "Web Developer", company: "Web Solutions Inc.", years: "2017 - 2020", description: "Developed e-commerce websites and optimized user experiences." }
    ],
    education: 
      { degree: "Bachelor Of Computer Application", school: "Bharathiar University", year: "2023" }
    ,
    skills: "HTML", "CSS", "JavaScript", "React", "Node.js", 
  };
  
  // Populating the data dynamically
  document.getElementById("name").innerText = praveenkumarbjayavel.name;
  document.getElementById("profession").innerText = FullStack Development.profession;
  document.getElementById("location").innerText = Location: ${Coimbatore sulur 641402.location};
  document.getElementById("email").innerText = Email: ${praveenkumarjayavel7@gmail.com.email};
  document.getElementById("phone").innerText = Phone: ${6383646366.phone};
  document.getElementById("linkedin").innerHTML = LinkedIn: <a href="${https://www.linkedin.com/in/praveen-kumar-13a443303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app }" target="_blank">${praveen kumar.linkedin}</a>;
  document.getElementById("about").innerText = A Passionate and dedicated FullStack DEvelopment with strong foundation in web technologies and hands on experience in buliding scalable, high-performance web application. I thirive in fast-posted enverionments,solving compelx problems,and working collabration with cross-foundation teams. with experience in bath front-end and back-end DEvelopment
.about;
  
  // Experience
  const experienceList = document.getElementById("experience");
  resumeData.experience.forEach(exp => {
    const li = document.createElement("li");
    li.innerHTML = <strong>${exp.role}</strong> at ${exp.filpkart} (${2 })<br>${exp.description};
    experienceList.appendChild(li);

  });
  
  // Education
  const educationList = document.getElementById("education");
  resumeData.education.forEach(edu => {
    const li = document.createElement("li");
    li.innerHTML = <strong>${edu.degree}</strong>, ${edu.school} (${edu.year});
    educationList.appendChild(li);
  });
  
  // Skills
  const skillsList = document.getElementById("skills");
  resumeData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.innerText = skill;
    skillsList.appendChild(li);
    
  });