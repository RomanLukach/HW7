// Домашнее задание 7.3   (35 баллов) /  Срок сдачи задания - до 06.11

// Опишите кнопку отправки сообщений в чат с помощью конструктора класса, 
// - кнопка должна иметь определенный размер - ширина и высота числовое значение, 
// - тип кнопки (type = button), цвет кнопки (green), 
// создайте метод кнопки (onClick, выводящий в консоль информацию о нашей кнопке в формате 
// // console.log(this.props) выводим все пропертиес
// - не забудьте создать экземпляр класса button - передать аргументы в наш конструктор класса. 
// А также, проверьте в отдельной функции testButton(), что свойства этого экземпляра класса соответствуют заданным.
// --------------------

// Опиcание кнопки отправки сообщений в чат с помощью конструктора класса
class button {
    constructor(buttonName, buttonHigh, buttonWidth, buttonType, buttonColor) {
        this.buttonName = buttonName;
        this.buttonHigh = buttonHigh;
        this.buttonWidth = buttonWidth;
        this.buttonType = buttonType;
        this.buttonColor = buttonColor;
    }
}

// создать экземпляр класса button - передать аргументы в наш конструктор класса. 
let buttonSend =  new button('onClick', 50, 100, 'button', 'green')

// Заданные свойства кнопки (Technical requirements)
let buttonSendTechRequest = new button ('onClick', 50, 100, 'button', 'green')

// создайте метод кнопки (onClick, выводящий в консоль информацию о нашей кнопке в формате 
// console.log(this.props) выводим все пропертиес
console.log(`Button name: ${buttonSend.buttonName}`)
console.log(`Button high: ${buttonSend.buttonHigh}`)
console.log(`Button width: ${buttonSend.buttonWidth}`)
console.log(`Button type: ${buttonSend.buttonType}`)
console.log(`Button color: ${buttonSend.buttonColor}`)

// проверьте в отдельной функции testButton(), что свойства этого экземпляра класса соответствуют заданным.
function testButton() 
    {
        if (buttonSend.buttonName != buttonSendTechRequest.buttonName)
            console.log('Button name did not corresponds to technica requirements.')
        else if (buttonSend.buttonHigh !== buttonSendTechRequest.buttonHigh)
            console.log('Button width did not corresponds to technical requirements')
        else if (buttonSend.buttonWidth !== buttonSendTechRequest.buttonWidth)
            console.log('Button width did not corresponds to technical requirements')
        else if (buttonSend.buttonType !== buttonSendTechRequest.buttonType)
            console.log('Button type did not corresponds to technical requirements')
        else if (buttonSend.buttonColor !== buttonSendTechRequest.buttonColor)
            console.log('Button color did not corresponds to technical requirements')
        else
            console.log('Button design comply to technical requirements')
    }

    testButton()