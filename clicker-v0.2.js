const run = () => {
    let excluirBtns = document.querySelectorAll('button.btn.btn-danger')

    excluirBtns.forEach((btn) => {
        btn.click()

        let yesBtn = document.querySelectorAll('button.swal2-confirm.styled')
        console.log(yesBtn)
    })

}

