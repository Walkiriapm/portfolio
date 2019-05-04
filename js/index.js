function hideTopPage () {
    var button1 = document.getElementById('button-left')
    var button2 = document.getElementById('button-right')
    var image1 = document.getElementById('user-journey')
    var image2 = document.getElementById('user-journey2')

    if(image1.classList.contains('hidden')) {
        button1.classList.remove('hidden')
        button2.classList.add('hidden')
        image1.classList.remove('hidden')
        image2.classList.add('hidden')
    } else {
        button1.classList.add('hidden')
        button2.classList.remove('hidden')
        image1.classList.add('hidden')
        image2.classList.remove('hidden')
    }
}


function hideTopPage2 () {
    var button1 = document.getElementById('button-left2')
    var button2 = document.getElementById('button-right2')
    var image1 = document.getElementById('mind-map-img')
    var image2 = document.getElementById('empathy-map')

    if(image1.classList.contains('hidden')) {
        button1.classList.remove('hidden')
        button2.classList.add('hidden')
        image1.classList.remove('hidden')
        image2.classList.add('hidden')
    } else {
        button1.classList.add('hidden')
        button2.classList.remove('hidden')
        image1.classList.add('hidden')
        image2.classList.remove('hidden')
    }
}



