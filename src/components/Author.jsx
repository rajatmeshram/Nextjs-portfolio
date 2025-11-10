"use client";
import * as FaCompo from "react-icons/fa";
import * as SaCompo  from "react-icons/si";


export function Author({ data }) {
  
  return (
    <section id="author" >
      <div className="flex items-center gap-6 justify-start py-10 flex-wrap">

        {data?.map((profile, index) => {
          const Icon = profile?.social_icon;
          const FaCp = FaCompo?.[Icon];
          const SaCp = SaCompo?.[Icon];
          return (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <div className="flex items-center justify-center bg-blue-600 p-4 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)] hover:shadow-[0_0_20px_rgba(56,189,248,0.8)]">
                {FaCp && <FaCp className="text-3xl text-white duration-300" />}
                {SaCp && <SaCp className="text-3xl text-white  duration-300" />}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
