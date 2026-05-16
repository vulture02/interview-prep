"use client";

import { Coins } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import UpgradeModel from "./UpgradeModel";

export default function CreditButton({ role, credits }) {
    const [open, setOpen] = useState(false);
    const handleClick=()=>{
        if(role==="INTERVIEWER"){
            window.location.href="/dashboard";
        }else{
            setOpen(true);
        }
    };
    return (
        <>
            <Button variant="outline" onClick={handleClick} className="border-amber-400/20 text-amber-400 cursor-pointer">
            <Coins size={16} />
            <span className="opacity-70">{credits} {role==="INTERVIEWER"?"Earned":"Credits"}</span>

            </Button>
            <UpgradeModel open={open} onOpenChange={setOpen} />
        </>
    )
}