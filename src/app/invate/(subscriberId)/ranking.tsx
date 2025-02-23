import Image from "next/image"
import medalGold from "../../../assets/medal-gold.svg"
import medalSilver from "../../../assets/medal-silver.svg"
import medalCooper from "../../../assets/medal-cooper.svg"
export function Ranking(){
    return(
        <div className="w-full max-w-[440px] space-y-5">
                <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de indicações</h2>
                <div className="space-t-4">
                    <div className="relative rounded-xl bg-gray-700 p-6 flex flex-col justify-center gap-3">
                        <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">1°</span> | Nádia Gabrielly</span>
                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none ">2402</span>
                        <Image className="absolute top-0 right-8" src={medalGold} alt={""}/>
                    </div>
                    <div className="relative rounded-xl bg-gray-700 p-6 flex flex-col justify-center gap-3">
                        <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">2°</span> | Cristiano Ronaldo</span>
                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none ">2401</span>
                        <Image className="absolute top-0 right-8" src={medalSilver} alt={""}/>
                    </div>
                    <div className="relative rounded-xl bg-gray-700 p-6 flex flex-col justify-center gap-3">
                        <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">3°</span> | Michael Jordan</span>
                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none ">1592</span>
                        <Image className="absolute top-0 right-8" src={medalCooper} alt={""}/>
                    </div>
                </div>
            </div>
    )
}