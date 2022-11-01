// Домашнее задание 7.2   (50 баллов) / Срок сдачи задания - до 06.11

// Тестовые данные 
// - массив  объектов players, 
// выведете в консоль игрока с максимальным значением scorePoints 
// (Используйте цикл, обращение к свойству через точку и метод глобального объекта Math, 
// позволяющий найти большее число из всех возможных)

// Изучите spread опреатор (...), позволяющий развернуть данные из результирующего массива всех очков игроков в метод объекта Math.

// const players = [
// {
//     "id": 1,
//     "name": "Ivan",
//     “scorePoints”: 4500
//  },
// {
//     "id": 2,
//     "name": "Petr",
//     “scorePoints”: 3600
// },
// {
//     "id": 3,
//     "name": "Vadim",
//     “scorePoints”: 3433
// },
// {
//     "id": 4,
//     "name": "Olga",
//     “scorePoints”: 2356
// },
// ];
// ----------------------------------

const players = [
{
    'id': 1,
    'name': 'Ivan',
    'scorePoints': 4500
 },
{
    'id': 2,
    'name': 'Petr',
    'scorePoints': 3600
},
{
    'id': 3,
    'name': 'Vadim',
    'scorePoints': 3433
},
{
    'id': 4,
    'name': 'Olga',
    'scorePoints': 2356
},
];

// Define player id with max scorePoints
let idMax = 0

// Define a total number of players
let totalPlayers = players.length

// Define id of player A (first player in the list) and player B (Last player in the list)
let playerA = 0
let playerB = totalPlayers - 1 

// check the list of players is not empty
if (totalPlayers == 0)
    {
    console.log('No any player')
    }
else if (totalPlayers == 1)
    {
        console.log('Only one player!')
    }
else if (totalPlayers > 1) 
    {
        while (playerA != playerB)
        {
//            {
                if (players[playerA].scorePoints > players[playerB].scorePoints) 
                {    
                    idMax = playerA
                    -- playerB 
                }
                else
                {
                    idMax = playerB
                    ++playerA
                }
        }
            console.log(`Winner's id = ${players[idMax].id}.`)
            console.log(`Winner's name is ${players[idMax].name}.`) 
            console.log(`Winner's scorepoints = ${players[idMax].scorePoints}.`)
    }
