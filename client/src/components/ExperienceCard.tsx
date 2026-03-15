import { useState } from "react";
import { Tables } from "../lib/database.types";
import Markdown from 'marked-react';
import { BottomIcon, UpIcon, BuildingIcon, CompanyIcon } from "./Icons";
import SpotlightCard from "./SpotLightCard";

const ExperienceCard = ({ interview }: { interview: Tables<"interviews"> }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    if (!interview.tldr || !interview.is_interview) return null;
    
    const companyName = interview.company_name?.trim() || "";
    const companies = companyName ? companyName.split(',').map(c => c.trim()).filter(c => c.length > 0) : [];
    
    const displayTitle = companyName || interview.target_position || interview.current_position || "Interview Experience";

    return (
        <SpotlightCard className={` bg-slate-900/90 border-[1px]  border-slate-700 cursor-pointer flex flex-col`} spotlightColor="rgba( 91, 91, 92, 0.3)">
            <div className="flex flex-col gap-2 flex-grow">
                <div className="flex justify-start gap-2 items-center">
                    <div className="flex -space-x-2 mr-1">
                        {companies.length > 0 ? (
                            companies.map((company, idx) => (
                                <div key={`${company}-${idx}`} className="relative">
                                    <CompanyIcon name={company} />
                                </div>
                            ))
                        ) : (
                            <BuildingIcon />
                        )}
                    </div>
                    <p className="text-white first-letter:capitalize font-medium">{displayTitle}</p>
                </div>
                <p className="text-sm text-slate-300 text-start ">
                    <Markdown>
                        {interview.tldr}
                    </Markdown>
                </p>
                {interview?.strategy && interview.strategy?.length > 0 ?
                    <div className="self-start">
                        <div className="text-white flex gap-2 items-center">Startegy
                            {
                                <button className="cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? <BottomIcon /> : <UpIcon />}
                                </button>}
                        </div>
                        {
                            isOpen && <p className="text-sm text-slate-300 mt-1">
                                <Markdown>
                                    {interview.strategy}
                                </Markdown>
                            </p>
                        }
                    </div>
                    : null
                }
            </div>

        </SpotlightCard>
    );
};

export default ExperienceCard;
