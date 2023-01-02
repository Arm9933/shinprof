import Am from './am';
import Ru from './ru';
import Eng from './eng';
import https from './setHref';

let Language = '';
let href = window.location.href;

if(href == https+'eng/') {
    Language = Eng;
}
else if(href == https+'am/') {
    Language = Am;
}
else if(href == https+'ru/') {
    Language = Ru;
}
else{
    Language = Am;
}
export default Language;