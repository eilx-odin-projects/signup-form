const $ = document.querySelector.bind(document)

const password = $`#FormPassword`
const confirmer = $`#FormPasswordConfirm`


function confirmPasswordsIdentical () {
    let validity = password.value === confirmer.value
        ? ""
        : "Passwords aren't identical"

    password.setCustomValidity(validity)
    confirmer.setCustomValidity(validity)
}

password.addEventListener('change', confirmPasswordsIdentical)
confirmer.addEventListener('change', confirmPasswordsIdentical)