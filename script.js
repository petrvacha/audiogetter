var i = 1;
var list = '';
document.querySelectorAll('a').forEach(element => { 
    let reexp = /(^.*\.mp3)(?:.*$)/g;
    let match = reexp.exec(element.href);
    if (match && match[1] !== undefined) {
        list += i + '. ' + match[1] + '\n';
        i++;
    }
});
console.log(list);
