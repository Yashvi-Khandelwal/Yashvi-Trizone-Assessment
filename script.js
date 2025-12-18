
  const advantages = [
    {
      icon: "./assets/wireless-network.png",
      title: "Continuous Vitals Monitoring",
      desc: "Measures HR, RR, BP, and SpO₂ with clinical-grade accuracy."
    },
    {
      icon: "./assets/telemetry.png",
      title: "Automated Workflow",
      desc: "Integrates with EMRs like PointClickCare and MatrixCare to log vitals and notifications."
    },
    {
      icon: "./assets/hospital-bed.png",
      title: "Personalized Patient Monitoring",
      desc: "Allows tailored thresholds and notifications based on each patient’s condition."
    },
    {
      icon: "./assets/alert.png",
      title: "Enterprise-Grade Data Security",
      desc: "Ensures HIPAA, SOC2-Type I, and ISO 27001-compliant health data protection."
    },
    {
      icon: "./assets/medical-report.png",
      title: "Central Monitoring Platform",
      desc: "Offers one dashboard for vitals, notifications, trends, and fall prevention tracking."
    },
    {
      icon: "./assets/monitor.png",
      title: "Reimbursement Optimization",
      desc: "Supports CPT billing codes under CMS for RPM, CCM, and related services."
    }
  ];

  const container = document.getElementById("advantageCards");

  advantages.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.icon}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    `;

    container.appendChild(card);
  });

  const socialIconsData = [
    {
      name: "LinkedIn",
      link: "#",
      img: "assets/linkedin.png"
    },
    {
      name: "Facebook",
      link: "#",
      img: "assets/facebook.png"
    },
    {
      name: "Twitter",
      link: "#",
      img: "assets/x.png"
    },
    {
      name: "YouTube",
      link: "#",
      img: "assets/youtube.png"
    },
    {
      name: "Instagram",
      link: "#",
      img: "assets/insta.png"
    }
  ];

  const socialIconsContainer = document.getElementById("socialIcons");

  socialIconsData.forEach(icon => {
    const aTag = document.createElement("a");
    aTag.href = icon.link;
    aTag.target = "_blank";

    const imgTag = document.createElement("img");
    imgTag.src = icon.img;
    imgTag.alt = icon.name;

    aTag.appendChild(imgTag);
    socialIconsContainer.appendChild(aTag);
  });


