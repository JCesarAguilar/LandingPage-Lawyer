import { P3 } from "../common/Typography";

interface InfoLawyerProps {
  resume: string;
  phone: string;
  email: string;
}

export default function InfoLawyer({ resume, phone, email }: InfoLawyerProps) {
  return (
    <div className="bg-gray-soft flex flex-col lg:flex-row py-25 lg:px-30 px-7 lg:gap-0 gap-12 text-black">
      <div className="w-full lg:w-1/2 flex flex-col gap-1">
        <P3 className="font-bold uppercase"> Contacto </P3>
        <P3>T: {phone} </P3>
        <P3 className="font-bold">{email}</P3>
      </div>

      <div className="lg:w-1/2 w-full">
        <P3 className="text-justify">{resume}</P3>
      </div>
    </div>
  );
}
