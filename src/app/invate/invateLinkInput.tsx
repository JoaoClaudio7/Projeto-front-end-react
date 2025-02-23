'use client'
import { InconButton } from "@/Components/IconButton";
import { InputField, InputIcon, InputRoot } from "@/Components/Input";
import { Copy, Link } from "lucide-react";

interface InvateLinkInputProps{
    invateLink: string 
}

export function InvateLinkInput({invateLink}: InvateLinkInputProps){
function CopyLinkInvate(){
    navigator.clipboard.writeText(invateLink)
}
    return(
        <InputRoot>
            <InputIcon>
                <Link className="size-5"/>
            </InputIcon>
            <InputField readOnly defaultValue={invateLink}/>
            <InconButton onClick={CopyLinkInvate} className="-mr-2">
                <Copy className="size-5"/>
            </InconButton>
        </InputRoot>
    )
}