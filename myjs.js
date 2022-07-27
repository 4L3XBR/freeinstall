fetch("./baseDeProgs.json")
.then((resposta) => {
    return resposta.json();
})
.then((dadosProgs)=>{
    
        dadosProgs.map((val)=>{
            var inProgs = document.getElementById('cxProgs')
                inProgs.innerHTML += `
                
                <div class="formatProg" id="progList">
                    <div id="imgProg">
                        <img src="`+val.img+`" alt="">
                    </div>

                    <div id="legendaProg">
                        <h2>`+val.nome+`</h2>
                    </div>
                    <a href="`+val.download+`"><button type="submit">Download</button>
                </div>
                
                `
            })
})
