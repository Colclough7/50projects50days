const panels = [...document.querySelectorAll('.panel')]

panels.map(panel=>{
    panel.addEventListener('click',()=>{
        removePanelClassName()
        panel.classList.add('active')
    })
})


function removePanelClassName(){
    panels.map(panel=>{
        panel.classList.remove('active')
    })
}