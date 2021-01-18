{/* <i class="fas fa-heart"></i> */}
console.log("Hello")
const likeCount = document.getElementById('likeCount')
const imgDiv = document.querySelector('.image-container')
const realHeart = document.getElementById('realHeart')


count = 0;

const createHeart=(e)=>{
    let heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    imgDiv.appendChild(heart)
    
    setTimeout(()=>{
        heart.remove()
    },900)

    realHeart.style.color='red'
}

imgDiv.addEventListener('dblclick',()=>{
    likeCount.innerHTML =++count;
    createHeart()
  
})

realHeart.addEventListener('click',()=>{
    realHeart.style.color='black'
    console.log("hello Suhas ")
    realHeart.classList.toggle('change')
    if(realHeart.classList.contains("change")){
        createHeart()
        likeCount.innerHTML =++count;
    }
})


