import jq from './jq';

var { lev_alert } = jq;

window.onload = () => {
    var el = document.createElement('div');
    var textnode = document.createTextNode('Hello China!');
    el.appendChild(textnode);
    document.body.appendChild(el);
    lev_alert('Welcome to China!');
}
