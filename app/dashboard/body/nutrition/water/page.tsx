import { fetchAllWaterForToday } from '@/actions/nutrition_water';
import WaterForm from '@/components/forms/update/WaterForm';
import { parse } from '@/lib/formatters';

export default async function Page() {

    const useWaterIntake = await fetchAllWaterForToday();

    return (
        <div>
            <WaterForm data={parse(useWaterIntake)} />
        </div>
    )
}
