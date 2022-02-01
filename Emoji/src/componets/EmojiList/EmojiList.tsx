import { useState } from "react";
import styles from "./EmojiList.module.css";
import { emojies } from "../Emojies/Emojies";
import { EmojiRow } from "../EmojiItem/EmojiItem";
import { Form } from "../Form/Form";

export const EmojiContainer = () => {
  const [search, setSearch] = useState("");

  const newEmojies = emojies.filter((emojies) => {
    if (emojies.title.toLowerCase().includes(search.toLowerCase())) {
      return (
        <EmojiRow
          title={emojies.title}
          symbol={emojies.symbol}
        />
      );    
    } else if (emojies.keywords.toLowerCase().includes(search.toLowerCase())) {
      return (
        <EmojiRow
          title={emojies.title}
          symbol={emojies.symbol}
        />
      );
    }
  })

  return (
    <div className={styles.emojiList}>
      <h1>Emoji</h1>
      <Form
        search={search} 
        setSearch={setSearch}
      />
      {newEmojies.map((emoji) => {        
          return (
            <EmojiRow
              title={emoji.title}
              symbol={emoji.symbol}
            />
          )
      })}
    </div>
  ) 
}