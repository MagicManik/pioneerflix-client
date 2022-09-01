import React from "react";

const About = () => {
  const developerDetails = [
    {
      id: 1,
      name: "K M Mohiuddin Patwary",
      dev: "MERN Stack Web Developer",
      img: "https://km-mohiuddin-patwary.netlify.app/images/profile.png",
      cell: "+880 1680 106149",
      resume:
        "https://drive.google.com/file/d/1C0e3zDmnhyNpamUijjdgTgobeNpkqECS/view",
      gmail: "developermohiuddin1@gmail.com",
      portfolio: "https://km-mohiuddin-patwary.netlify.app/",
      github: "https://github.com/mohiuddin2721",
      linkedin: "https://www.linkedin.com/in/k-m-mohiuddin-patwary/",
    },
    {
      id: 2,
      name: "Md. Saiyadul  Amin Akhand ",
      dev: "Junior Web Developer",
      img: "https://my-portfolio-52c27.web.app/static/media/123.708c647ccf809cf4b8e4.jpg",
      cell: "+8801911-870358",
      resume:
        "https://drive.google.com/file/d/1brcpLP8GRfJeG_7_djB3mHiGyBJ2biDu/view",
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
      resume:
        "https://drive.google.com/file/d/1AVhEON4sZzX5oolg1_bFzqEQ80Ew5S8D/view",
      portfolio: "https://my-portfolio-52c27.web.app/",
      github: "https://github.com/Shihab2022",
      linkedin: "https://www.linkedin.com/in/shihab-uddin-4b6369241/",
    },
    {
      id: 4,
      name: "Manik Islam Mahi",
      dev: "MERN Stack Web Developer",
      img: "https://avatars.githubusercontent.com/u/97013257?v=4",
      cell: "+8801682440404",
      gmail: "megamindedmanik@gmail.com",
      resume:
        "https://drive.google.com/file/d/14K7q05kEYptqFhPM3eyLfA3Ocg-1Ysqr/view",
      portfolio: "https://magicmanik.netlify.app/",
      github: "https://github.com/MagicManik/",
      linkedin: "https://www.linkedin.com/in/manikislammahi/",
    },

    {
      id: 5,
      name: "Shaila Nasrin",
      dev: "Junior Web Developer",
      img: "https://my-portfolio-61811.web.app/static/media/pic-myself.014b75908a0544d99915.png",
      cell: "+1 832 998 4894",
      gmail: "drshaila2021@gmail.com",
      resume:
        "https://drive.google.com/file/d/1qPifx_gYiF6JHUBBnkFMnC0cvcIPt1f6/view",
      portfolio: "https://my-portfolio-61811.web.app/",
      github: "https://github.com/drshaila2021",
      linkedin: "https://www.linkedin.com/in/shaila-nasrin/",
    },
    {
      id: 6,
      name: "Md.Muyed Moktadir Chowdhury",
      dev: "Web-Developer",
      img: "https://muyed-portfolio-site.netlify.app/static/media/introo.af62548f9b1830b7f7a2.png",
      cell: "+8801738505555",
      gmail: "muyed004@gmail.com",
      resume:
        "https://drive.google.com/file/d/1JBCR251PbpeV8lDkSs7OCUMNU5h-_kZR/view",
      portfolio: "https://muyed-portfolio-site.netlify.app/",
      github: "https://github.com/muyed-moktadir",
      linkedin: "https://www.linkedin.com/in/muyed-moktadir-842272110/",
    },
    {
      id: 7,
      name: "Abdul Barek",
      dev: "FRONTEND DEVELOPER",
      img: "https://my-portfolio-react1.netlify.app/static/media/profili.70581cedde0721618cec.png",
      cell: "+8801872702423",
      gmail: "barik6286@gmail.com",
      resume:
        "https://drive.google.com/file/d/13gy8QhmC12vKBtwbn6i-DVZqMVhupww3/view",
      portfolio: "https://my-portfolio-react1.netlify.app/",
      github: "https://github.com/bariknishan",
      linkedin: "https://www.linkedin.com/in/barik-nishan-430b34220/",
    },
  ];
  return (
    <div className="bg-primary  text-secondary px-5 lg:px-20 py-8 lg:py-20 ">
      <div className="flex justify-center items-center flex-col ">
        <div>
          {developerDetails.map((d) => (
            <>
              <div key={d.id} className="hero flex my-3 justify-start   ">
                <div className="hero-content lg:flex lg:flex-row lg:items-center lg:justify-start flex-col">
                  <div className="avatar">
                    <div className="w-36 rounded-full ring ring-gradient-to-r shadow-xl shadow-sky-500 from-indigo-500 via-purple-500 to-pink-500 ring-offset-2">
                      <img src={d?.img} alt="developer img" />
                    </div>
                  </div>

                  <div className="ml-3">
                    <h1 className="lg:text-3xl text-2xl  text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">
                      {d?.name}
                    </h1>
                    <p className="py-2 font-semibold">{d?.dev}</p>
                    <p>Email : {d?.gmail}</p>
                    <p className="py-2">Contact : {d?.cell}</p>
                    <div>
                      <a href={d?.resume} target="_blank" >
                        <button className="badge badge-warning">Resume</button>
                      </a>
                      <a href={d?.portfolio} target="_blank">
                        <button className="badge badge-ghost mx-3">
                          Portfolio
                        </button>
                      </a>
                      <a href={d?.github} target="_blank">
                        <button className="badge badge-accent">Github</button>
                      </a>
                      <a href={d?.linkedin} target="_blank">
                        <button className="badge badge-ghost ml-3">
                          Linkedin
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
