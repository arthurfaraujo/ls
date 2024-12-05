const countries = await fetch('https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/countries.json').then(res => res.json())

console.log(countries)

const body = document.querySelector('.flags')

function genFlagCard(country) {
    const div = document.createElement('div')
    div.className = "flag"
    const img = document.createElement('img')
    const span = document.createElement('span')

    img.src = `https://raw.githubusercontent.com/hampusborgos/country-flags/refs/heads/main/png100px/${country.toLowerCase()}.png`
    span.innerHTML = countries[country]
    div.appendChild(img)
    div.appendChild(span)

    body.appendChild(div)
}


for (const country in countries) {
    genFlagCard(country)
}
