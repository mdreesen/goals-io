import { fetchAllWaterForToday } from '@/actions/nutrition_water';
import WaterForm from '@/components/forms/update/WaterForm';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Water',
        default: 'Water',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useWaterIntake = await fetchAllWaterForToday();

    return (
        <div>
            <WaterForm data={parse(useWaterIntake)} />
        </div>
    )
}
