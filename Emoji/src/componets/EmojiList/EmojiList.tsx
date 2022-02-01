import { useState } from "react";
import styles from "./EmojiList.module.css";
import { emojies } from "../Emojies/Emojies";
import { EmojiRow } from "../EmojiItem/EmojiItem";
import { Form } from "../Form/Form";

// interface IEmojies {
//   title: string
//   symbol: string;
//   keywords: string;
// }

export const EmojiContainer = () => {
  const [text, setText] = useState<string>("");

  const [emojiesArr, setEmojiesArr] = useState(emojies);

  const addNewTodoKey = () => {

  // const resultArr = emojiesArr.reduce((prev: any, curr: any) => {

  //   if (curr.includes(text)) {
  //     return prev;
  //   }
  // }, []);

  // setEmojiesArr(resultArr)  

    // {emojiesArr.filter((emoji) => {
    //   if (text === emoji.title) {        
    //       return (
    //         <EmojiRow
    //           title={emoji.title}
    //           symbol={emoji.symbol}
    //         />            
    //       );
        
      
    //   } else if (text === emoji.keywords) {
    //     alert("Тоже")
    //   } 
    // })}
  }
  return (
    <div className={styles.emojiList}>
      <h1>Emoji</h1>
      <Form
        text={text} 
        setText={setText}
        addNewTodoKey={addNewTodoKey}
      />
      {emojiesArr.map((emoji) => {
        return (
          <EmojiRow
            title={emoji.title}
            symbol={emoji.symbol}
          />
          
        );
      })}
    </div>
  ) 
}