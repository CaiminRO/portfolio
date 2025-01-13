import { sanityClient } from "@/utils";

async function getResumeFile() {
  const query = `
    *[_type == "sitefile" && title == "Resume"][0]{
      title,
      "file": file.asset->url
    }
  `;

  return await sanityClient.fetch(query);
}

export default async function ResumePage() {
  const resume = await getResumeFile();

  if (!resume || !resume.file) {
    return (
      <p className="text-center mt-8 text-red-500">
        Resume not available at the moment.
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center h-full">
      <iframe
        className="w-[95%] h-[80vh] border-none"
        src={resume.file}
        title="Resume PDF"
      />
    </div>
  );
}
