import styles from "./EmojiItem.module.css";

interface IProps {
  title: string;
  symbol: string;
}

export function EmojiRow({ title, symbol }: IProps) {
  return (
    <div className={styles.emojiItem}>
      <div className={styles.wrapper}>
        <h1 className={styles.symbol}>{symbol}</h1>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
