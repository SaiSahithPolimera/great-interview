import { Tables } from "../lib/database.types";
import { companyIcons } from "./Icons";
import SpotlightCard from "./SpotLightCard";

const ExperienceCard = ({ interview }: { interview: Tables<"interviews"> }) => {
    if (!interview.tldr || !interview.is_interview) return;

    const companyKey = !interview.company_name ? "No company mentioned" : interview.company_name.toLowerCase();
    const companyIcon = companyIcons[companyKey] ? companyIcons[companyKey] : null;

    return (
        <SpotlightCard className={` bg-slate-900/90 border-[1px]  border-slate-700 cursor-pointer`} spotlightColor="rgba( 91, 91, 92, 0.3)">
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
