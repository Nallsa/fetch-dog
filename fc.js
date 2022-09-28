const butt = document.querySelector('.butt')

async function fetchAndRenderImages() {
  const img1 = document.querySelector('.image1')
  const res1 = await fetch('https://dog.ceo/api/breeds/image/random')
  const item1 = await res1.json()
  img1.src = item1.message

  const img2 = document.querySelector('.image2')
  const res2 = await fetch('https://dog.ceo/api/breeds/image/random')
  const item2 = await res2.json()
  img2.src = item2.message

  const img3 = document.querySelector('.image3')
  const res3 = await fetch('https://dog.ceo/api/breeds/image/random')
  const item3 = await res3.json()
  img3.src = item3.message
}

fetchAndRenderImages()

butt.addEventListener('click', async () => {
  const img1 = document.querySelector('.image1')
  const res1 = await fetch('https://dog.ceo/api/breeds/image/random')
  const item1 = await res1.json()
  img1.src = item1.message

  const img2 = document.querySelector('.image2')
  const res2 = await fetch('https://dog.ceo/api/breeds/image/random')
  const item2 = await res2.json()
  img2.src = item2.message

  const img3 = document.querySelector('.image3')
  const res3 = await fetch('https://dog.ceo/api/breeds/image/random')
  const item3 = await res3.json()
  img3.src = item3.message
})

const mass = [
  'Австралийская короткохвостая пастушья собака',
  'Австралийская овчарка',
  'Австралийская пастушья собака',
  'Австралийский келпи',
  'Австралийский терьер',
  'Австралийский шелковистый терьер',
  'Австрийская гончая',
  'Австрийский брудастый бракк',
  'Австрийский пинчер',
  'Азавак',
  'Азорская пастушья собака',
]

for (let i of mass) {
  const div = document.querySelector('.li')
  const li = document.createElement('li')
  li.textContent = i
  li.style.width = '200px'
  div.append(li)
}
