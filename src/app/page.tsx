import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>hello world!</main>
      <Link href='/blog' replace>Blog</Link>
    </>
  
  );
}
