const excluirChecks = () => {
    let excluirBtns = document.querySelectorAll('button.btn.btn-danger')

    excluirBtns.forEach((btn) => {
        btn.click()

        let yesBtn = document.querySelectorAll('button.swal2-confirm.styled')
        yesBtn.forEach((btn) => {
            btn.click()
        
            let okBtn = document.querySelectorAll('button.swal2-confirm.styled')
            okBtn.forEach((btn) => {
               btn.click() 
            }) 
        })

    })

}

