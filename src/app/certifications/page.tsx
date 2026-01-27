import { Certifications as CertificationsList } from "@/modules/Certifications/Certifications";

export default function Certifications() {
  return (
    <>
      <h1 className="text-5xl md:text-3xl font-bold p-10 text-center md:text-left">
        Certifications
      </h1>
      <CertificationsList />
    </>
  );
}
