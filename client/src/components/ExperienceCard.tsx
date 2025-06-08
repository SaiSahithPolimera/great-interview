import { Tables } from "../lib/database.types";
import { companyIcons } from "./Icons";
import SpotlightCard from "./SpotLightCard";

const ExperienceCard = ({ interview }: { interview: Tables<"interviews"> }) => {
    if (!interview.tldr || !interview.company_name || !interview.is_interview) return;

    const companyKey = interview.company_name.toLowerCase();
    const companyIcon = companyIcons[companyKey] ? companyIcons[companyKey] : null;

    return (
        <SpotlightCard className={` ${interview.tldr.length > 180 ? `col-span-${(interview.tldr.length / 2) % 10}` : ''} bg-slate-900/50 border-[1px] w-fit h-auto border-slate-700 cursor-pointer`} spotlightColor="rgba( 91, 91, 92, 0.3)">
            <div className="flex flex-col gap-2">

                <div className="flex flex-col justify-start gap-4">
                    {
                        companyIcon
                    }
                    <p className="text-white first-letter:capitalize">{interview.company_name}</p>
                </div>

                <p className="text-sm text-slate-300 text-start">
                    {interview.tldr}
                </p>
            </div>

        </SpotlightCard>
    );
};

export default ExperienceCard;
