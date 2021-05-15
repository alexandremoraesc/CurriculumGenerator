import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Gerar currículo</h1>
            <p>
                1. Escolha o template
            <p>
            <form>
                <input type="radio" id="firstTemplate" name="template" value="firstTemplate" onclick="whichTemplate()">
                <label for="firstTemplate">Template PT-BR</label><br>
                <input type="radio" id="secondTemplate" name="template" value="secondTemplate" onclick="whichTemplate()"    >  
                <label for="secondTemplate">Template EN</label>                 
            </form>                       
            <input type="text" id="field2" style="display:none">
            <p>
                2. Preencha com seus dados:
            </p>
            <form>
                <label for="yname">Nome:</label><br>
                <input type="text" id="yname" name="yname" onkeyup="update()"><br>
                <label for="yname">Universidade:</label><br>
                <input type="text" id="yuniversity" name="yuniversity" onkeyup="update()"><br>
                <label for="yname">Curso:</label><br>
                <input type="text" id="ymajor" name="ymajor" onkeyup="update()"><br>
            </form>

            <form style="display" id="form2-pre0" name="form2-pre0" enctype="multipart/form-data" action="https://texlive.net/cgi-bin/latexcgi" method="post" target="pre0ifr">
            <textarea style="display:none" type="text" name="filecontents[]" vairable="yname"></textarea>
                <input type="text" name="filename[]" value="document.tex" style="display:none">
                <input type="text" name="engine" value="pdflatex" style="display:none">
                <input type="text" name="return" value="pdfjs" style="display:none">
                <br>            
            <button class="llbutton" onclick="redirect(); latexcgi();" id="lo-pre0">Gerar currículo</button>
            </form>            

                `;
    }
}