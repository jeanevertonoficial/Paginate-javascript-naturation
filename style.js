function pagina() {
  const data = Array.from({length: 100})
  .map((_,  i) => `<div class="item">Item ${(i + 1)}</div>`)
  
  const list = document.querySelector('#paginate .list')
  list.innerHTML = data.join("")
  
  return data
}
const data = pagina()

let perPage = 5
const stage = {
  page: 1,
  perPage: perPage,
  totalPage: Math.ceil(data.length / perPage)
}

console.log(stage.totalPage)

const controls = {
  next(){
    stage.page++
    
    const lastPage = stage.page > stage.totalPage
    if(lastPage){
      stage.page--
    }
  },
  prev(){
    
  },
  goTo(){}
}

console.log(stage.page)
controls.next()
console.log(stage.page)