let state = {

    profilePage: {
        postsItems: [
            {message: 'Hi, world', likes: 0},
            {message: 'I`m Elon Mask, really', likes: 3},
            {message: 'Give me some bitcoins', likes: 10}
          ]
    },
    dialogsPage: {
        dialogNames: [
            {name:'Ivan Ivanov', id: 1},
            {name:'Ilon Mask', id: 2},
            {name:'Bill Gates', id: 2}
          ],
           messageItems:  [
            {message:'Hi!', id: 1},
            {message:'Go on the Mars', id: 1},
            {message:'Where is my chip?', id: 1}
          ]
     },
     navMenu: {
       friends: [
           {ava: 1, name: 'Vasya'},
           {ava: 1, name: 'Nikita'},
           {ava: 1, name: 'Oleg'}
       ]    
     }
      
       
}
export default state
