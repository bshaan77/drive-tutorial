import { mockFiles, mockFolders } from "~/lib/mock-data";

export default function SandboxPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Sandbox Page</h1>
      <p>This page is for testing purposes.</p>
      <div className="mt-4">
        <h2>Mock Data Preview:</h2>
        <div className="text-sm">
          <p>Folders: {mockFolders.length}</p>
          <p>Files: {mockFiles.length}</p>
        </div>
      </div>
    </div>
  );
}
