if(!isset($_POST['enter-tel'])){
} 
else {
    $enter-tel = $_POST['enter-tel'];
    $enter-tel = htmlspecialchars($enter-tel);
    $enter-tel = urldecode($enter-tel);
    $enter-tel = trim($enter-tel);
    if (gmail("sasaacuta@gmail.com", "Заявка с сайта",". Tel: ".$enter-tel ,)){
    echo "Сообщение успешно отправлено";
}
    else {
        echo "При отправке сообщения возникли ошибки";
    }
}