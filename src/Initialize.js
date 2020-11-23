import "@babel/polyfill";
import CreateDiv from './CreateDiv'

import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/style.scss";
import { gsap } from "gsap";
//import { TweenMax, TimelineMax } from "gsap";
import { Howl, Howler } from 'howler';

export default class Initialize {

    constructor() {

        console.log('im the constructor in init 20');

        const amount = 10;
        const mString = "Du er go"
        this.myFirstArray = [1, 2, 3, 4, 5, 6];

        this.randomRotation = [-1, 1, 0];

        //this.setupHTML(this.myFirstArray);


        this.CreateDivBack = new CreateDiv({
            id: "containerBack",
            className: 'container d-flex justify-content-center d-flex flex-row',
            addTo: document.body

        });

        this.CreateDivFront = new CreateDiv({
            id: "containerFront",
            className: 'container d-flex justify-content-center d-flex flex-row',
            addTo: document.body

        });


        /*
        const mApp = document.createElement('div');
        mApp.id = "container";
        mApp.className = "container d-flex justify-content-center d-flex flex-row";
        document.body.appendChild(mApp)
      */



        this.CreateDivBack.innerHTML = '' + this.myFirstArray.map((value, item) => {

            return `
                 <div class = '${"bobling" + value} col-2' id='back'>${item}</div>
                `
        }).join('') + '';


        this.CreateDivFront.innerHTML = '' + this.myFirstArray.map((value, item) => {
            return `
             <div id = '${value}' class=' front col-2'>${item}</div>
            `
        }).join('') + '';


        let getChildrenOfContainer = document.getElementById("containerFront").childNodes;



        /*
     var audio = new Audio("./assets/sound/bianka-nedtur.mp3");
        
        document.onclick = function() {
          audio.play();
        }
        */



        getChildrenOfContainer.forEach(item => {

            item.addEventListener('click', event => {


                let getTargetID = event.target.id;
                
                const rr = this.randomRotation[Math.floor(Math.random() * this.randomRotation.length)];

                gsap.to(document.querySelectorAll("#containerBack > .bobling" + getTargetID), {
                    duration: 1,
                    y: -200,
                    rotation: rr,
                    ease: 'elastic.out(1, 0.3)'
                });

               
                var sound = new Howl({
                    src: ['./assets/sound/bianka-optur.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,

                    onend: () => {

                        console.log(document.querySelectorAll("#containerBack > .bobling" + getTargetID));

                        gsap.to(document.querySelectorAll("#containerBack > .bobling" + getTargetID), {
                            duration: 1,
                            y: 0,
                            rotation:0,
                            ease: 'bounce',
                            onComplete: () => {


                                let sound = new Howl({
                                    src: ['./assets/sound/bianka-nedtur.mp3']
                                });

                                sound.play();


                            }

                        });
                        
                    }
                });
               



            })
        })



    } // END constructor


    setupHTML(fv) {

        return `
        <ul>
    <li class="chapter up-wrapper-btn">
        <div>
        ${fv[0]}
        </div>
    </li>
    </ul>
  `;

    }

    checkLoop(fa) {

        const sweetArray = [2, 3, 4, 5, 35]
    }

    getController() {

        console.log('get my controller again');
    }


}