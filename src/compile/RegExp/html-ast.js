export function parseHtmlToAst(template){
    /*
    <div id="app">
        <div class="box" style="height:20px;width:20px;">你好 {{hello}}</div>
        
    </div>
    
    */





    const attribute =
    /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/

    const dynamicArgAttribute =
    /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/

    const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z${unicodeRegExp.source}]*`

    const qnameCapture = `((?:${ncname}\\:)?${ncname})`

    const startTagOpen = new RegExp(`^<${qnameCapture}`)

    const startTagClose = /^\s*(\/?)>/

    const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)

    const doctype = /^<!DOCTYPE [^>]+>/i

    const comment = /^<!\--/

    const conditionalComment = /^<!\[/
    
}