import React from 'react'
import Chapter1_1 from '../img/1stBn5thMarLogo.jpeg'
import Chapter1_2 from '../img/1st_CEB.png'
import Chapter1_3 from '../img/UTSALogo.png'
import Chapter2_1 from '../img/windingRoad.gif'
import Chapter3_1 from '../img/PenTest.jpeg'

const About = () => {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Chapter One: The Beginnings
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        I grew up in San Antonio Texas to two Puerto Rican parents so I am 100% Boricua and proud of it.
                        I have traveled to some 27 countries all before the age of 18 as my father was a doctor and he loved to travel so he took us every where with him. I have seen much of the world and it's history.
                        I joined the United States Marine Corps in 1999 and served until 2003, I was with 1st Battalion 5th Marines and 1st Combat Engineer Battalion. After my service was completed I worked in a sleep lab for 5 years after which I decided to go back to school with aspirations of becoming a doctor.
                        I earned a degree in Epidemiology from The University of Texas at San Antonio in 2015 and continued my education into 2020 my focus changed from medical school to nursing but my heart was not in it; but I know there are many ways to help people.
                        <img src={Chapter1_1} alt="1st Battalion 5th Marines Logo" /> <img src={Chapter1_2} alt="1st Combat Engineer Battalion Logo" /> <img src={Chapter1_3} alt="UTSA Logo" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Chapter Two: The Journey
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        After taking a break from school, with communication with my friends and family, I made the decision to dive head first into the world of web development. This has been a challenge for me, but I am enjoying it!
                        I've already made some friends (waves to his coding cohort) in this world who have been very helpful and motivating, I have found a Mentor (even though he's an Army veteran we get along, what's up Alex!).
                        I do my best to figure things out on my own using resources such as StackOverflow, MDN, and Google; but if I struggle I'm not ashamed to ask for help, I can tell that day by day my understanding of the concepts and information are increasing.
                        <img src={Chapter2_1} alt=" winding road gif" />
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Chapter Three: A Glimpse Into The Future
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        I came into the program cold without any idea or knowledge on what I was getting myself into; so charting a path proved to be a little difficult, after some reflection and learning different web development pathways, I am zeroing in on penetration testing.
                        This journey is a long one, filled with many twist and turns, but I am here for it, and look forward to fully immersing myself in learning multiple coding languages to reach my objectives.
                        <img src={Chapter3_1} alt="Penetration Testing" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About