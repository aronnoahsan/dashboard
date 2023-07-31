import BlogCard from "@/components/BlogCard";
import styles from "@/styles/blog.module.css";
function Blog() {
  return (
    <div className={styles.blog__card__holder}>
      <BlogCard title="Exploring the Mysteries of Deep Space: Unraveling the Secrets of the Cosmos" />
      <BlogCard title="The Power of Positive Thinking: How Optimism Shapes Your Reality" />
      <BlogCard title="From Paper to Pixels: The Evolution of Reading and its Impact on Society" />
      <BlogCard title="The Art of Mindful Living: Embracing Serenity in a Chaotic World" />
      <BlogCard title="Beyond the Screen: The Growing Trend of Virtual Travel and its Transformative Effects" />
      <BlogCard title="The Science of Happiness: Unraveling the Key Ingredients to a Fulfilling Life" />
      <BlogCard title="Revolutionizing Healthcare: The Role of Artificial Intelligence in Medicine and Patient Care" />
    </div>
  );
}

export default Blog;
