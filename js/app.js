function photoSelect(photo) {
    const imageUrl = photo.getAttribute('src');
    
    const photoObj = {
        photoSrc: imageUrl
    }

    console.log(photoObj)

    const show = document.getElementById('show');
    
    show.style.backgroundImage = `url(${photoObj.photoSrc})`
}