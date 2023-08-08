/**
create color changinf button X Made Div
recognixe a click X addEventListener ('click)
where will click be recognixed X colorchanging
get acces to color changing div X document.getElementById()
write code for when click happens X changeColorPlease
bg color changes
 */
let i = 0
const bodyDiv = document.getElementById('bodyID')
let colors = ['primary', 'danger', 'warning', 'information']

function changeColorPlease(){
bodyDiv.classList = `bg-${colors[i]}`
i = ((i +1) % colors.length)
}

const colorChangingDiv = document.getElementById('colorChanging')
colorChangingDiv.addEventListener('click', ()=>{changeColorPlease()})


