import Image from "next/image";
import styles from "@/components/blogcard.module.css";

function BlogCard() {
  return (
    <div className={styles.card__holder}>
      <div>
        <Image
          src="https://minimal-kit-react.vercel.app/assets/images/covers/cover_10.jpg"
          width={200}
          height={200}
          alt="Blog Image ALt"
          className={styles.blog__thumbnail}
        />
      </div>
      <div className={styles.date__img__flex}>
        <Image
          src="https://minimal-kit-react.vercel.app/assets/images/avatars/avatar_22.jpg"
          width={40}
          height={40}
          alt="Author Image"
          className={styles.author__img}
        />
        <div className={styles.date__style}>July 31, 2023</div>
      </div>
      <div className={styles.title__style}>
        Exploring the Mysteries of Deep Space: Unraveling the Secrets of the
        Cosmos.
      </div>
    </div>
  );
}

export default BlogCard;
