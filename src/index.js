import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/******************* Exercise #5 *******************/
class Counter extends React.Component{
    counter = 0;

    increment = () =>{
        this.setState({counter: this.counter++})
    }

    decrement = ()=>{
        if(this.counter)
            this.setState({counter: this.counter--})
    }

    render(){
        return (
            <>
                <div>
                    <h3>Counter</h3>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.counter}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </>
        );
    }
}
ReactDOM.render(<Counter/>,document.querySelector('#root'));

// Components
/******************* Exercise #1 *******************/
// function MyThing(){
//     return (
        /*** JSX ***/
        // <React.Fragment>
        //     <div className='book'>
        //         <div className='title'>
        //             The Title
        //         </div>
        //         <div className='author'>
        //             The Author
        //         </div>
        //         <ul className='stats'>
        //             <li className='rating'>
        //                 5 stars
        //             </li>
        //             <li className='isbn'>
        //                 12-345678-910
        //             </li>
        //         </ul>
        //     </div>
        // </React.Fragment>

        /** Another approach with React.createElement **/
//         React.createElement('div',{className:'book'},
//             React.createElement('div', {className:'title'},'The Title'),
//             React.createElement('div', {className:'author'}, 'The Author'),
//             React.createElement('ul',{className:'stats'},
//                 React.createElement('li',{className:'rating'},'5 stars'),
//                 React.createElement('li',{className:'isbn'},'12-345678-910')))
//     );
// }


// Render Components into the index.html
// ReactDOM.render(<MyThing/>, document.querySelector('#root'));

/******************* Exercise #2 *******************/

// function Greeting(){
//     let username = 'Or Shalmayev';
//     return (
//         <React.Fragment>
//             {username = prompt('testing alert')}
//             <span>{!username ? 'Not logged in' : 'Hello '+username}</span>
//         </React.Fragment>
//     );
// }

// // Render Components into the index.html
// ReactDOM.render(<Greeting/>, document.querySelector('#root'));

/******************* Exercise #3 *******************/

// function Table(){
//     return (
//         <React.Fragment>
//             <table border="1">
//                 <tbody>
//                     <tr>
//                         <Data />
//                     </tr>
//                 </tbody>
//             </table>
//         </React.Fragment>

//     );
// }
// function Data(){
//     return (
//         <>
//             <td>data1</td>
//             <td>data2</td>
//             <td>data3</td>
//         </>
//     );
// }
// // Render Components into the index.html
// ReactDOM.render(<Table/>, document.querySelector('#root'));


/******************* Exercise #4 *******************/
// const tweets = 
//     [
//         {
//             id: 1,
//             user_id: 1,
//             created_at: Date.now()
            
//         },
//         {
//             id: 2,
//             user_id: 1,
//             created_at: Date.now()
            
//         },
//         {
//             id: 3,
//             user_id: 2,
//             created_at: Date.now()
            
//         }
//     ];
// const users = [
//     {
//         id: 1,
//         name:'Or Shalmayev',
//         username: 'oshalm',
//         avatar:'https://www.w3schools.com/howto/img_avatar.png',
//         user_tweets:[{
//             comment:'This is my first Tweet',
//             created_at: Date.now()
//         },{
//             comment:'This is my second Tweet',
//             created_at: Date.now()
//         }],
//         created_at: Date.now()
//     },
//     {
//         id: 2,
//         name:'Idan Gosalker',
//         avatar:'https://www.w3schools.com/howto/img_avatar.png',
//         username: 'igosa',
//         user_tweets:[{
//             comment:'This is my first Tweet',
//             created_at: Date.now()
//         },{
//             comment:'This is my second Tweet',
//             created_at: Date.now()
//         }],
//         created_at: Date.now()
//     },
//     {
//         id: 3,
//         name:'Netanel Bar-David',
//         avatar:'https://www.w3schools.com/howto/img_avatar.png',
//         username: 'netbar',
//         user_tweets:[{
//             comment:'This is my first Tweet',
//             created_at: Date.now()
//         },{
//             comment:'This is my second Tweet',
//             created_at: Date.now()
//         }],
//         created_at: Date.now()
//     }
// ];


// const testTweet = {
//     message: "Something about cats.",
//     gravatar: "https://www.w3schools.com/howto/img_avatar.png",
//     author: {
//         handle: "catperson",
//         name: "IAMA Cat Person"
//     },
//     likes: 2,
//     retweets: 0,
//     timestamp: "2016-07-30 21:24:37"
// };
    
// // Components
// function Tweet({tweet}){
//     return (
//         <React.Fragment>
//             {users.forEach( t => (
//                     <div className="tweet" key={t.id}>
//                         <Avatar avatar = {t.avatar}/>
//                         {' '}<Author author={t.name}/>
//                         {' '}<Time time={t.created_at}/>
//                         {'\n'}<Comment message={t.user_tweets[0].comment}/>
//                         {'\n'}
//                         <Button buttonClass={'fas fa-reply'}/>
//                         <Button buttonClass={'far fa-heart'}/>
//                         <Button buttonClass={'fas fa-ellipsis-h'}/>
//                     </div>
//             ) )}
            
//         </React.Fragment>
//     );
// }

// function Avatar({avatar}){
//     return (
//         <React.Fragment>
//             <img src={avatar} alt="Avatar" className="avatar" width="50" height="50"/>
//         </React.Fragment>
//     );
// }


// function Author({author}){
//     return (
//         <React.Fragment>
//             <div className="handle">
//                 <span className="author-name">{author.name}</span> 
//                 <span className="author-username">{' '}{author.username}</span> 
//             </div>
//         </React.Fragment>
//     );
// }

// function Time({time}){
//     return (
//         <React.Fragment>
//             <span>{time}</span>
//         </React.Fragment>
//     );
// }

// function Comment({message}){
//     return (
//         <React.Fragment>
//             <p className="tweet-comment">{message}</p>
//         </React.Fragment>
//     );
// }

// function Button({buttonClass}){

//     return (
//         <React.Fragment>
//             <button>
//                 <i className={buttonClass}></i>
//             </button>
//         </React.Fragment>
//     );
// }
// // Render to page
// ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));