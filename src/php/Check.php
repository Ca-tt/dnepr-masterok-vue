<?php
    $User_telephone = $_POST["User_telephone"];
    $error = "";
    if(trim($User_telephone) == '')
    $error = "Введите ваш номер";

    if($error != ''){
        echo $error;
        exit; 
    }

    $subject = "=?utf-8?B?".base64_encode("Тестовое сообщение")."?=";
    $headers = "From: $User_telephone\r\nReply-to: $User_telephone\r\nContent-type: text/html;charset=utf-8\r\n";

    mail('sasaacuta@gmail.com' , $subject , $User_telephone , $headers);

    header("Location:/Title.vue");
?>