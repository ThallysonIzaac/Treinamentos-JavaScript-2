function GerarQRcode(){
    var inputUsuario = document.querySelector('textarea').value;
    var googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    var conteudoQRcode = googleChartApi + encodeURIComponent(inputUsuario);
    document.querySelector("#QRcodeImage").src = conteudoQRcode;
}