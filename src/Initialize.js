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

        let myFirstVar = "ello";
        const amount = 10;
        this.myFirstArray = [1, 2, 3, 4, 5, 6];

        //this.setupHTML(this.myFirstArray);


        this.myCreateDiv = new CreateDiv({
            id: "container",
            className: 'container d-flex justify-content-center d-flex flex-row',
            addTo: document.body


        });


        /*
        const mApp = document.createElement('div');
        mApp.id = "container";
        mApp.className = "container d-flex justify-content-center d-flex flex-row";
        document.body.appendChild(mApp)
      */


        //list.map((currElement, index) => {
        this.myCreateDiv.innerHTML = '' + this.myFirstArray.map((value, item) => {
            return `<div id = '${value}' class='col-2'>${item}</div>`

        }).join('') + '';


        // document.querySelectorAll('#container')

        let getChildrenOfContainer = document.getElementById("container").childNodes;



        /*
     var audio = new Audio("./assets/sound/bianka-nedtur.mp3");
        
        document.onclick = function() {
          audio.play();
        }
        */



        getChildrenOfContainer.forEach(item => {

            item.addEventListener('click', event => {

                console.log(event.target.style.backgroundColor = "#000000");
                console.log(event.target.id - 1);

                gsap.to(event.target, {
                    duration: 1,
                    y: 100,
                    ease: 'bounce'
                });

                var sound = new Howl({
                    src: ['./assets/sound/bianka-nedtur.mp3'],
                    autoplay: true,
                    loop: false,
                    volume: 0.5,

                    onend: function () {

                        gsap.to(event.target, {
                            duration: 1,
                            y: 0,
                            ease: 'bounce',
                            onComplete: () => {


                                let sound = new Howl({
                                    src: ['./assets/sound/bianka-optur.mp3']
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