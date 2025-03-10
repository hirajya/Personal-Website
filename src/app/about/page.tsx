import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src="/AboutMeBg.jpg"
          alt="Header Image"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">About Me, Lei</h1>
        </div>
      </div>

      <div className="h-screen">page</div>
    </div>
  );
}
