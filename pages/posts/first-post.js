import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>Primeiro Post</h1>
      <h2>
        <Link href="/">voltar para home</Link>
      </h2>
    </>
  );
}
