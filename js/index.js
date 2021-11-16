function openTrailer() {
  document.querySelector('body').classList.add('blur')
  let trailerModal = `
    <div class=modal-buttons>
      <span class="material-icons close" onclick="closeModal()">
        close
      </span>
    </div>
    <iframe class="yt-trailer-video" src="https://www.youtube.com/embed/ByXuk9QqQkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `
  let trailerNode = document.createElement('div')
  trailerNode.classList.add('modal')
  trailerNode.classList.add('center')
  trailerNode.innerHTML = trailerModal
  document.querySelector('html').appendChild(trailerNode)
}

function closeModal() {
  document.querySelector('body').classList.remove('blur')
  document.querySelector('.modal').remove()
}