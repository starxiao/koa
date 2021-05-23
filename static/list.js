Array.from(document.querySelectorAll('li')).forEach(ele => {
    ele.style.color = 'red';
    ele.style.fontSize = '20px';
});

function jsonp(url, cb) {
    let script = document.createElement('script');
    let name = 'jsonpCallback';
    script.src = `${url}?user=xiaox&callback=${name}`;
    window.name = function() {
        cb.apply(null, arguments);
        window[name] = null;
        document.body.removeChild(script);
    }
    document.body.appendChild(script);
}

jsonp('https://www.baidu.com/', function(data){
    console.log('jsonp success');
})