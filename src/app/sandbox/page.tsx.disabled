import { db } from "~/server/db";
import { mockFiles, mockFolders } from "~/lib/mock-data";
import { folders, files } from "~/server/db/schema";

export default function SandboxPage() {
  return (
    <div className="flex flex-col gap-4">
      Seed Function
      <form
        action={async () => {
          "use server";

          const folderInsert = await db.insert(folders).values(
            mockFolders.map((folder, index) => ({
              name: folder.name,
              parent: index !== 0 ? 1 : null,
            })),
          );

          console.log(folderInsert);

          const fileInsert = await db.insert(files).values(
            mockFiles.map((file, index) => ({
              name: file.name,
              size: 1000,
              url: file.url,
              parent: (index % 3) + 1,
            })),
          );

          console.log(fileInsert);
        }}
      >
        <button type="submit">Seed</button>
      </form>
    </div>
  );
}
