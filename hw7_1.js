// Домашнее задание 7.1   (30 баллов) / Срок сдачи задания - до 06.11
//-------------------------------------------
// Получаем посылку в постамате.
// Тестовые данные: 
// - пользователь имеет - сумма 100р на счете
// - код для получения посылки пришел в смс оповещении A001DFX0
// - текст из смс… " ваша посылка находится в ячейке под номером 4 "
// - постамат имеет вид - [null, null, null, “4 - ваша посылка” , null]
// В условии проверьте, если наш код равен коду из смс, то выведем в консоль данные о нашей посылке, 
// и спишем со счета 100р в формате “Вы получили посылку из ячейки 4 и ваш счет составляет: …р.”

// Test data:
let userAccountBalance1 = 100;
let userAccountBalance2 = 100;
let smsCodeExpected = 'A001DFX0';
let smsCode = 'A001DFX0';
let smsMessageBoxNumber = 'Ваша посылка находится в ячейке под номером 4';
let smsMessageError = `Вы ввели неверный код из SMS`
let smsMessageEnter = 'Введите cmc код'
let postomatDefaultValue = null
// Matrix definition
let postomat = [null, null, null, '4 - ваша посылка', null];
// console.log(postomat.length)

// Version 1: Test sms Code and do Action (via if - else):
console.log('Version 1: Test sms Code and do Action (via if - else)\n')

if (smsCode === smsCodeExpected)
    {console.log(smsMessageBoxNumber)
    userAccountBalance1 -=100
    console.log(`Вы получили посылку из ячейки 4 и ваш счет составляет: ${userAccountBalance1}р.`)
    postomat[3] = postomatDefaultValue
    }
else
    console.log(smsMessageError);

// Version 2: Test sms Code and do Action (via switch):
console.log('\n')
console.log('Version 2: Test sms Code and do Action (via switch)\n')

switch (smsCode === smsCodeExpected) {     
    case true:
        console.log(smsMessageBoxNumber)
        userAccountBalance2 -=100
        console.log(`Вы получили посылку из ячейки 4 и ваш счет составляет: ${userAccountBalance2}р.`)
        postomat[3] = postomatDefaultValue
        break;
    case false:
        console.log(smsMessageError);
        break;
    default:
        console.log(smsMessageEnter)
}