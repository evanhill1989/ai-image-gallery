import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/45e1f5f0-7f39-4026-8441-1ca6c3e83ae3-gcgq8.jpg",
  "https://utfs.io/f/845f953e-bc7b-4a7b-8d3f-184326303739-kt8mv6.jpg",
  "https://utfs.io/f/dc66c630-b8b1-41df-afc5-7ae8ce2dc36b-m3gfi1.jpg",
  "https://utfs.io/f/fa426e21-09f6-40fb-8c87-15733ccf56a5-vet876.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const images = await db.query.images.findMany();

  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={image.id + "-" + index} className="gap flex w-48 flex-col">
            <img src={image.url} className="" alt="astrophotography" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        Heo (gallery to come)
      </div>
    </main>
  );
}
