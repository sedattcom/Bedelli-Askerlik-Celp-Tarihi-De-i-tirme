let allowedDate = 'ŞUBAT 2024'
function step1(count = 0) {
    if (count > 3) {
        window.location.reload();
        return false;
    }
    let elements = document.querySelectorAll('#donemCombobox option')

    if (elements.length < 2) {
        window.setTimeout(() => {
            step1(count++)
        }, 1000)
        return false;
    }

    let selected = false;
    elements.forEach((e, i) => {
        if (e.text === allowedDate) {
            selected = true
            elements[i].selected = true;
        }
    })

    if (selected) {
        document.getElementsByClassName('submitButton')[0].click();
        return false;
    }

    window.setTimeout(() => {
        window.location.reload();
    }, 1000)
}

function step2() {
    if (document.querySelectorAll('dl.compact')[1].textContent.indexOf(allowedDate) > 0) {
        document.querySelector('.radioButton').checked = true
        document.querySelector('.submitButton').click()
    }
}

if (window.location.href == 'https://www.turkiye.gov.tr/mill-savunma-askerligim?hizmet=BedelliCelpVeSevkDonemiDegisiklikBasvuru&basvuru=Bilgileri&stage=basvuruBilgileri') {
    step1()
} else {
    window.setTimeout(() => step2(), 500)
}