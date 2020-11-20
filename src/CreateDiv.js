export default class CreateDiv {

    constructor(mGet) {

        const mApp = document.createElement('div');
        mApp.id = mGet.id;
        mApp.className = mGet.className;
        mGet.addTo.appendChild(mApp)

        return mApp;


    }

}