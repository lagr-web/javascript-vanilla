import "@babel/polyfill";
import CreateDiv from './CreateDiv'

import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/style.scss";
import { gsap } from "gsap";
//import { TweenMax, TimelineMax } from "gsap";
import { Howl, Howler } from 'howler';


export default class Initialize {

    constructor() {


        console.log('im the constructor');

        const amount = 61;
        console.log(amount);
        const mString = "Du er go"
        let cWidth = document.clientWidth;

        let cHeight = document.clientHeight;
        this.myFirstArray = [1, 1, 2];



        this.assetRef = {
            backgroundImage: "",
            images: [
                "../assets/images/left_box.png",
                "../assets/images/middle_box.png",
                "../assets/images/right_box.png"
            ],
            sound: [0, 1, 2, 3],


        }

        console.log(this.assetRef.images.length);

        this.randomRotation = [-10, 10, 0];

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


        this.CreateDivBack.innerHTML = '' + this.myFirstArray.map((item, index) => {

            return `
                 <div class = '${"bobling" + index} col-4' id='back'><img src= "../assets/images/ninja.png" /></div>
                `
        }).join('') + '';



        this.CreateDivFront.innerHTML = '' + this.assetRef.images.map((item, index) => {

            return `
             <div id = '${index}' class=' front col-4'><img src = ${item}  id = '${index}' /></div>
            `
        }).join('') + '';


        let getChildrenOfContainer = document.querySelector("#containerFront").childNodes;



        /*
     var audio = new Audio("./assets/sound/bianka-optur.mp3");
        
        document.onclick = function() {
          audio.play();
        }
        */



        getChildrenOfContainer.forEach(item => {

            item.addEventListener('click', event => {

                let getTargetID = event.target.id;

                console.log({ getTargetID });

                const rr = this.randomRotation[Math.floor(Math.random() * this.randomRotation.length)];

                gsap.to(document.querySelectorAll("#containerBack > .bobling" + getTargetID), {
                    duration: 1,
                    y: -event.target.clientHeight - 30,
                    rotation: rr,
                    ease: 'elastic.out(1, 0.3)'
                });


                var sound = new Howl({
                    src: ['./assets/sound/bianka-optur.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,

                    onend: () => {

                        gsap.to(document.querySelectorAll("#containerBack > .bobling" + getTargetID), {
                            delay: 1,
                            duration: 1,
                            y: 0,
                            rotation: 0,
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


}