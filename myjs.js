function tapInProduction() {
    marcca = prompt('Página em desenvolvimento! Envie uma sugestão:')

    if (window.confirm(marcca)) {
        window.open('https://api.whatsapp.com/send?phone=5562992936607&text='+ marcca);
      }

}

