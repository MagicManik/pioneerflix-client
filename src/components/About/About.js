import React from "react";

const About = () => {
  const developerDetails = [
    {
      id: 1,
      name: "K M Mohiuddin Patwary",
      dev: "MERN Stack Web Developer",
      img: "https://km-mohiuddin-patwary.netlify.app/images/profile.png",
      cell: "+880 1680 106149",
      expertise: [
        "JavaScript",
        "ES6",
        "ReactJs",
        "Bootstrap5",
        "React Bootstrap",
        "HTML5",
        "CSS3",
      ],
      familiar: ["NodeJs", "ExpressJs", "MongoDB", "Firebase", "Tailwind"],
      Tools: ["Git", "VSCod", "Netlify", "Heroku", "Chrome Dev Tool"],
      resume:
        "https://drive.google.com/file/d/1C0e3zDmnhyNpamUijjdgTgobeNpkqECS/view",
      education: "Graduated from University of Dhaka.",
      gmail: "developermohiuddin1@gmail.com",
      portfolio: "https://km-mohiuddin-patwary.netlify.app/",
      github: "https://github.com/mohiuddin2721",
      linkedin: "https://www.linkedin.com/in/k-m-mohiuddin-patwary/",
    },
    {
      id: 2,
      name: "MD. SAIYADUL AMIN AKHAND",
      dev: "Junior Web Developer",
      img: "https://my-portfolio-52c27.web.app/static/media/123.708c647ccf809cf4b8e4.jpg",
      cell: "01911-870358",
      expertise: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React Bootstrap",
        "Tailwind CSS",

        "Daisy UI",
        "React",
        "React Router",
      ],
      familiar: ["JWT Token", "NextJS", "TypeScript"],
      Tools: [
        "VS Code",
        "Github",
        ,
        "Figma",
        "Imgbb",
        "Photopea",
        "dev tools",
        "Firebase",
        "React Firebase hooks",
      ],
      resume:
        "https://drive.google.com/file/d/1brcpLP8GRfJeG_7_djB3mHiGyBJ2biDu/view",
      education:
        "B.Sc. in Computer Science & Engineering .( Prime University )",
      gmail: "saiyadul77@gmail.com",
      portfolio: "https://my-portfolio-52c27.web.app/",
      github: "https://github.com/Saiyadul77/",
      linkedin: "https://www.linkedin.com/in/md-saiyadul-amin-akhand-9a46b5b3/",
    },
    {
      id: 3,
      name: "Md : Shihab Uddin",
      dev: "Junior Front-End Developer",
      img: "https://kubb-photography.web.app/static/media/aboutMe.d26479d7cf1371dcc957.jpg",
      cell: "+8801778825868",
      gmail: "uddinmdshihab452@gmail.com",
      expertise: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "React",
        "Tailwind",
        "React Router",
        "Firebase",
      ],
      familiar: ["TypeScript", " React Native", "Next Js"],
      Tools: ["VS code", "Github", "Netlify", "Heroku", "Firebase"],
      resume:
        "https://drive.google.com/file/d/1AVhEON4sZzX5oolg1_bFzqEQ80Ew5S8D/view",
      education:
        "Bachelor of Science in Applied Mathematics from (Rajshahi University )",
      portfolio: "https://my-portfolio-52c27.web.app/",
      github: "https://github.com/Shihab2022",
      linkedin: "https://www.linkedin.com/in/shihab-uddin-4b6369241/",
    },
  ];
  return (
    <div className="bg-primary  text-white px-20 py-10 ">
      {developerDetails.map((d) => (
        <>
          <div className="grid grid-cols-2 gap-5">
            <div className="my-4">
              <img src={d?.img} alt="" />
            </div>
            <div>
              <p>{d?.name}</p>
              <p>{d?.cell}</p>
             <div className=" gap-5">
             <a href={d?.resume} target="_blank">
                <button className="ml-3">Resume</button>
              </a>
              <a href={d?.portfolio} target="_blank">
                <button className="ml-3">Portfolio</button>
              </a>
              <a href={d?.github} target="_blank">
                <button className="ml-3">Github</button>
              </a>
              <a href={d?.linkedin} target="_blank">
                <button className="ml-3">Linkedin</button>
              </a>
             </div>
             <p>Education : {d.education}</p>
             <div>
                {
                    d.expertise.map((e,index)=><>
                    <div className="flex">
                        <ul>
                            <li>{e}</li>
                        </ul>
                    </div>
                    </>)
                }
             </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default About;
