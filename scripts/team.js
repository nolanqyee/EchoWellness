document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const modalContainer = document.querySelector('.modal-container');
    const modalImage = document.querySelector('.modal-image');
    const modalCaption = document.querySelector('.modal-caption');
    const modalBio = document.querySelector('.modal-bio');
    const modalBioTitle = document.querySelector('.modal-bio-title');
    const closeModal = document.querySelector('.close');

    gridItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const imgSrc = item.querySelector('img').getAttribute('src');
            const caption = item.querySelector('.caption').textContent;
            const bios = [
                "Suri Yang is the President of the EchoWellness Organization. Having served as President for three years now, and a strong advocate of student civic engagement, Suri strives to bring students to give back to their communities. Whether it is through a volunteering activity to hosting a fundraising concert, she is here to make positive change happen. She is currently serving on the board of 5 student run and led organizations to promote youth civic participation.",
                "Nolan Yee is a senior at James E. Taylor High School with passions for the intersection between technology and the arts. He loves to spend his time exploring his interests in AI, music, and supporting the Houston Rockets.",
                "Tristan Yuen is a Junior at Cistercian Preparatory School. He loves studying biology and psychology. However, he is not just well-versed in the sciences. Led by his passion to serve, he uses his talents in music and academics to help make a positive impact on the world, whether it is through tutoring, performing, or research.",
                "Chloe Lu is a freshman at James E. Taylor High School. She is interested in humanitarian subjects, languages, and the arts. Aside from academics, she loves to spend her time reading, painting, and finding new ways to contribute positively to her community through volunteering services.",
                "Hanying Zhang is an incoming sophomore at Fox Chapel Area High School in Pittsburgh Pennsylvania. Her favorite subjects in school include math and history. Outside of her academic pursuits, she enjoys programming the logistics for her robotics team, painting with acrylics, and listening to music.",
                "Serena Zhu is a junior at Belmont High School. She likes the natural sciences and is well-versed in the visual and performing arts. Recognizing the importance of supporting the community, she strives to use her skills to improve other people's lives, creating a positive impact on the world.",
                "Kevin Wang is a Junior at The Woodlands High School. He loves studying biology and chemistry, and involving himself with the community around him. He is passionate about serving his community and using his talents to make an impact on the world.",
                "Isabelle Chan is a junior at DeBakey High School for Health Professions. She enjoys exploring the latest research in medicine and social psychology. She is passionate in providing opportunities and exposure for aspiring student researchers as well as participating and organizing community service projects with her local blood center. She enjoys cats.",
                "Yuxiang Jiang is an upcoming Senior at Upper St. Clair High School in Pittsburgh, PA. He likes listening to music and playing volleyball. Yuxiang is also an accomplished pianist and enjoys serving as an accompanist for his church's worship team.",
                "Kassia Tan is a Sophomore at Memorial High School. Her favorite extracurriculars are volleyball and painting. In her free time, she likes to read and listen to music.",
                "Chutong Zhang is a Sophomore at Jordan High School, where he is recognized as a state soloist and a dedicated flute player in the regional band. Interested in biology and chemistry, Chutong actively engages in his academic pursuits with a focus on applying his knowledge practically. He is also committed to using his musical and academic skills to support and uplift his community, contributing through performing, or public health researching, and volunteering.",
                "Justin is a rising senior at the Academy of Science and Technology. His hobbies include playing violin, hiking with family, and playing sports with friends.",
                "Jerry Gu is a rising Junior at the Princeton International School of Math and Science. He enjoys playing tennis, researching sports technology, and contemplating the theoretical aspects of computer science and engineering. Driven by the vision of a world with less poverty, Jerry strives to create a happier community where everyone is better off, ultimately leading him to EchoWellness.",
                "Jin Zhang is a rising senior at Fox Chapel Area High School. He is interested in the fields of computer science and machine learning. At school, he is the captain of the fencing team and a part of the frisbee team. He also plays piano and snare drum for the marching band and bass guitar in the jazz band as well as for church worhsip.",
                "Kelly Yang is a junior at The John Cooper School. She has a passion for chemistry, economics, and music. Kelly has been learning the piano since the age of 5, and singing since the age of 11. Driven by her passion to serve her community, Kelly utilizes her talents in academics and music to help make an impact by volunteering, teaching, and performing.",
                "Emma Wu is currently a junior at Dulles High School. She enjoys learning about science and math and loves participating and serving her school's math club. Along with her mathematical prowess, Emma loves to use art to express herself. She hopes that through her participation in community work, she can invest her time to help others and benefit her community.",
                "Yuanxiang (Eugene) Hu is sophomore at St. John College Preparatory. He loves to study math and chemistry both at school and during his free time. He likes to explore and is interested in business. He started his own business by selling machines that could be used in the warehouse. Even though he still have some flaws on English speaking, he would still spend time on helping others who need it.",
                "Yifan Ren is a Sophomore at The Village High School. He loves studying phyiscs and math. However, he is not just well-versed in the languages. He is motivated to help the world, he uses his talents in yo-yoing and academics to help make a positive impact on the world, whether it is through tutoring, performing, or volunteering.",
                "Yilin Guo, a sophomore at the Academy of Science and Technology, loves studying biology, programming, and business. Her residence in Silicon Valley for eight years has exposed to her to the world of STEM, and she shows this passion through science fairs, competitions, and serving her community. Yilin’s business side is demonstrated through her achievements in competitive business clubs such as DECA and FBLA, where she was a state finalist and advanced to nationals.",
                "Dylan Wang is a junior at Bellaire High School. As a member of both of his school's robotics teams, as well as a fan of mathematics and physics, he has a passion in seeing the wide realm of applications that numbers bring to the world. With regards to service, Dylan has participated in various volunteering activities throughout his community.",
                "Alexander Gao is a Sophomore at The Academy of Science and Technology. He has a great passion in Chemistry competing and competitions, and studying in his free time. However, he is not just academically talented. His kind-hearted demeanor leads him to try to make a positive impact on the world via performing for others, volunteering, tutoring, and research.",
                "Jeffery Dou is a senior at the Woodlands High School. He enjoys history and literature, but wants to become a doctor because of his desire to help those in need. This desire has driven him to use his abilities to do good, whether that be writing or tutoring.",
                "Andrea Yang is a junior at Clements High School. She enjoys biology and delving into the science behind human health and body systems. She also spends much of her time dancing in and out of school, establishing a connection between dance and science to make an impact on her community.",
                "Andrea Dong is a rising junior at The Woodlands High School. At school, she enjoys chemistry and writing the most. Outside of academics, she has a passion for traveling around the world, mentoring young kids, and advocating for mental health through The Lily Flower Initiative, a non- profit organization she co-founded.",
                "Ivy Hu is a rising sophomore at St Agnes Academy. She spends lots of time on math. Outside of school, she enjoys visiting local bookstores and quietly reading by herself.",
                "Brenna Ren is a junior at The Harker School. She is interested in computer science, robotics, and research. Brenna hopes to use her skills in music and art along with her STEM abilities to foster a more accessible and equitable world. In her free time, she enjoys baking and solving puzzles.",
                "Grayson Hou is a rising senior at Shady Side Academy in Pittsburgh, where he excels academically with a keen interest in biology and history. Outside the classroom, Grayson is a dedicated athlete, actively participating in basketball and competitive swimming, and a photographer. Grayson aims to help people and communities through research and various other initiatives, demonstrating his commitment to making a positive impact in the world.",
                "Mujun Xu is a freshman at Round Rock High School. He likes to study biology and engineering. In his free time, he likes to swim and play tennis.",
                "Michael Hu is a Sophomore at St.John XXIII College Preparatory and enjoys Math and Science the most. He is new to the English language and works hard towards becoming proficient like his native peers. For college, he is currently unsure which path to pursue but is certain that some type of Engineering will be in his future.",
                "Tom Wang is an upcoming junior at The Woodland High School. He enjoys subjects like math and chemistry. Using his skill of collaborating and understanding, he is willing to help the organization become better and more successful. Baking is one of his interest, and he wants to use the skill of baking to help those that are in need.",
                "Emma Zeng is a Junior at Choate Rosemary Hall. In school, she loves studying physics and biology. Out of school, she partakes in cross country running, swimming, and dance. Through her passion in academics and athletics she continues to contribute and impact her school and community.",
                "Emily Ma is a senior at Choate Rosemary Hall this year. In school, she is most interested in her Anatomy and Physiology class and is thinking about pursuing a career in dermatology. Outside of school, she has been dancing her whole life and is looking forward to contribute to the performance to help the fundraising cause.",
                "Meng Yuan"
            ];
            const bio = bios[index];

            modalImage.src = imgSrc;
            modalBio.textContent = bio;
            modalBioTitle.textContent = caption;
            modalContainer.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});
